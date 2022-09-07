import { XMLParser } from 'fast-xml-parser'
import { IOTRSAnswer, ValuePart } from './SoapTypes'

export default class SoapSerialisator {
  /**
   * Создает строку с данными для тик значений
   * @param Name  наименоваине значения
   * @param value само значение
   * @param NoWrap Необходимость начинать значение с новой строки
   * @returns строку с данными для тик значений
   */
  public static ticValue(Name: string, value: any, NoWrap?: boolean): string {
    if (NoWrap) {
      return `<tic:${Name}>${value}</tic:${Name}>`
    } else {
      return `
            <tic:${Name}>${value}</tic:${Name}>`
    }
  }

  /**
   * Преобразует в тик строку конкретный параметр
   * @param {string} Name Наименование параметра
   * @param {boolean} NoWrap Начинать ли с новой строки
   * @param {string} Value Значение
   * @returns {string} тик строку
   */
  private static OptStr(Name: string, NoWrap: boolean, Value?: any): string {
    let res = ''
    if (Value && typeof Value !== 'function') {
      res += `${SoapSerialisator.ticValue(Name, Value + '', NoWrap)}`
    }
    return res
  }

  /**
   * Преобразует набор данных в тик строку (каждое новое значение с новой строки)
   * @param {string} Name Наименование набора
   * @param {boolean} NoWrap переносить первую строку на новую строку
   * @param {[]} Arr набор значений
   * @returns {string} тик строку
   */
  /*private static ArrStr(Name:string, NoWrap:boolean, Arr?:[] ):string{
      var res="";
      if(Arr && Arr.length>0){
          for(var i=0;i<Arr.length; i++){
              res+=`${SoapSerialisator.ticValue(Name, Arr[i], i==0 && NoWrap)}`;
          }
      }
      return res;
  }*/

  /**
   *   Заголовок запроса
   */
  private static soapHeader?: string
  /**
   * Тело запроса
   */
  private static soapBody?: string

  /**
   * Устанавливает занчение в заголовок
   * @param {string} value значение помещаемое в заголовок
   * @example
   * <soapenv:Header>
   *     ${value}
   *  </soapenv:Header>
   */
  public static SetHeader(value: string): void {
    this.soapHeader = `
        <soapenv:Header>
            ${value}
        </soapenv:Header>
        `
  }

  /**
   * Устанавливает значение тела
   * @param {string} value значение для установки
   * @example
   * <soapenv:Body>
   *  ${value}
   * </soapenv:Body>
   */
  public static SetBody(value: string): void {
    this.soapBody = `
        <soapenv:Body>
            ${value}
        </soapenv:Body>
        `
  }

  public static stringfy(Header?: ValuePart, Body?: ValuePart): string {
    this.soapBody = undefined
    this.soapHeader = undefined
    if (Header) this.SetAnyHeader(Header)
    if (Body) this.SetAnyBody(Body)
    const header = this.soapHeader ? this.soapHeader : '<soapenv:Header/>'
    const body = this.soapBody ? this.soapBody : '<soapenv:Body/>'
    return `<?xml version="1.0" encoding="utf-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tic="http://www.otrs.org/TicketConnector/">
            ${header}
            ${body}
        </soapenv:Envelope>
        `
  }

  private static SetAnyHeader(Header: ValuePart): void {
    let res = this.serialiseObject(Header.Values)
    res = `<${Header.PartName}>
            ${res}
        </${Header.PartName}>`
    this.SetHeader(res)
  }

  private static SetAnyBody(Body: ValuePart): void {
    let res = this.serialiseObject(Body.Values)
    res = `<${Body.PartName}>
            ${res}
        </${Body.PartName}>`
    this.SetBody(res)
  }

  private static serialiseObject(obj: any): string {
    if (typeof obj === 'object') {
      let res = ''
      for (const key in obj) {
        if (typeof obj[key] !== 'object' && typeof obj[key] !== 'function') {
          res += this.OptStr(key, res.length < 1, obj[key])
        } else if (typeof obj[key] !== 'function') {
          if (Array.isArray(obj[key])) {
            const a = obj[key] as Array<object>
            a.forEach((m) => {
              res += this.OptStr(key, false, this.serialiseObject(m))
            })
          } else {
            res += this.OptStr(key, false, '\n            ' + this.serialiseObject(obj[key]) + '\n            ')
          }
        }
      }
      return res
    } else if (typeof obj !== 'function') {
      return obj + ''
    } else {
      return ''
    }
  }

  public static parse(val: string): IOTRSAnswer {
    //console.log(val)
    const parser = new XMLParser()
    const pres = parser.parse(val, { allowBooleanAttributes: true })
    return pres['soap:Envelope'] as IOTRSAnswer
  }
}
