import { Soap } from '..'
import { ITSBase, ValuePart } from '../Soap/SoapTypes'
import OTRSConnector from './OTRSConnector'

export default class TicketSearch {
  /**
   * Условия поиска
   */
  public SearchTerms: ITSBase = <ITSBase>{}

  public static URL: string

  public async Search(): Promise<number[] | number> {
    const model: ValuePart = {
      PartName: 'TicketSearch',
      Values: this.SearchTerms,
    }
    const resp = await OTRSConnector.Load(TicketSearch.URL, Soap.stringfy(undefined, model))
    const res = Soap.parse(resp)
    const ts = res['soap:Body'].TicketSearchResponse
    if (!ts.Error) {
      return ts.TicketID
    } else {
      console.error(ts.Error)
      return []
    }
  }
}
