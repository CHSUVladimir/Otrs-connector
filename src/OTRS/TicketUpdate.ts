import { Soap } from '..'
import { ITicket, ITicketUpdateResponse, ValuePart } from '../Soap/SoapTypes'
import OTRSConnector from './OTRSConnector'

export default class TicketUpdate {
  public static URL: string

  public Ticket: ITicket = <ITicket>{}

  private SendBody(): string {
    const model: ValuePart = {
      PartName: 'TicketUpdate',
      Values: this.Ticket,
    }
    return Soap.stringfy(undefined, model)
  }

  public async Update(): Promise<ITicketUpdateResponse> {
    const resp = await OTRSConnector.Load(TicketUpdate.URL, this.SendBody())
    const res = Soap.parse(resp)
    return res['soap:Body'].TicketUpdateResponse
  }
}
