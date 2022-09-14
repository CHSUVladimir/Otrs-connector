import { Soap } from '..'
import { ITicketCreateBase, ITicketCreateResponse, ValuePart } from '../Soap/SoapTypes'
import OTRSConnector from './OTRSConnector'

export default class TicketCreate {
  public TicketCreate: ITicketCreateBase = <ITicketCreateBase>{}

  public static URL: string

  private SendBody(): string {
    const model: ValuePart = {
      PartName: 'TicketCreate',
      Values: this.TicketCreate,
    }
    return Soap.stringfy(undefined, model)
  }

  public async Create(): Promise<ITicketCreateResponse> {
    const resp = await OTRSConnector.Load(TicketCreate.URL, this.SendBody())
    const res = Soap.parse(resp)
    return res['soap:Body'].TicketCreateResponse
  }

  public static EscapeBracket(value: string): string {
    return value.replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;')
  }
}
