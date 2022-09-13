import { Soap } from '..'
import { ITGBase, ITicket, ValuePart } from '../Soap/SoapTypes'
import OTRSConnector from './OTRSConnector'

export default class TicketGet {
  private ticketGet: ITGBase = <ITGBase>{}

  public static URL = ''

  public TicketConditions(): ITGBase {
    return this.ticketGet
  }

  public async GetTickets(): Promise<ITicket | ITicket[]> {
    const model: ValuePart = {
      PartName: 'TicketGet',
      Values: this.ticketGet,
    }
    const resp = await OTRSConnector.Load(TicketGet.URL, Soap.stringfy(undefined, model))
    const res = Soap.parse(resp)
    const ts = res['soap:Body'].TicketGetResponse
    if (!ts.Error) {
      return ts.Ticket
    } else {
      console.error(ts.Error)
      return []
    }
  }
}
