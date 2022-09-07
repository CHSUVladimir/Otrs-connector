/**
 * @class подключения к OTRS
 */
export default class OTRSConnector {
  private url: string
  private body: string

  /**
   * Инициализирует класс для получения/отправки данных
   * @param URL адрес для подключения
   * @param Body отправляемые данные для получения данных
   */
  constructor(URL: string, Body: string) {
    this.url = URL
    this.body = Body
  }

  /**
   * производит подключение при помощи POST,и получает ответ
   * @returns текст ответа сервера
   */
  public async ConnectResult(): Promise<string> {
    const res = await fetch(this.url, {
      body: this.body,
      method: 'POST',
      mode: 'cors',
    }).then((resp) => resp.text())
    return res
  }

  /**
   * Отправляет POST запрос для получения данных
   * @param URL адресс куда идет обращение
   * @param Body набор данных преобразованных в строку текста данных
   * @returns текстовый ответ сервера
   */
  public static async Load(URL: string, Body: string): Promise<string> {
    const con = new OTRSConnector(URL, Body)
    return await con.ConnectResult()
  }
}
