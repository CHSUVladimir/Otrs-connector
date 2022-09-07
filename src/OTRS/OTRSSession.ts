import { Soap } from '..'
import { ISession, ValuePart } from '../Soap/SoapTypes'
import OTRSConnector from './OTRSConnector'

export default class OTRSSession {
  /**
   * Данные аутентификации
   */
  private static auth: ISession
  private static _sessionId?: string
  private static TimerId?: NodeJS.Timer

  private afterPlayBack: () => void

  constructor()
  constructor(Auth: ISession, AfterPlayBack: () => void)
  constructor(Auth?: ISession, AfterPlayBack?: () => void) {
    if (Auth && AfterPlayBack) {
      OTRSSession.auth = Auth
      this.afterPlayBack = AfterPlayBack
      this.OpenSession().then()
      OTRSSession.StartTimer(AfterPlayBack)
    } else {
      this.afterPlayBack = () => {
        return undefined
      }
    }
  }

  /**
   * Адрес для обращения за авторизационными данными.
   */
  public static URL: string

  /**
   * @static
   * @readonly {string} Идентификатор ссесии
   */
  public static SessionId(): string | undefined {
    return this._sessionId
  }

  public static setSesionId(value: string) {
    this._sessionId = value
  }

  public static TimerInterval?: number

  public async OpenSession(): Promise<string> {
    const ssid = OTRSSession.SessionId()
    if (ssid) {
      this.afterPlayBack()
      return ssid
    } else {
      const model: ValuePart = {
        PartName: 'SessionCreate',
        Values: OTRSSession.auth,
      }
      const resp = await OTRSConnector.Load(OTRSSession.URL, Soap.stringfy(undefined, model))
      const res = Soap.parse(resp)
      OTRSSession._sessionId = res['soap:Body'].SessionCreateResponse.SessionID
      this.afterPlayBack()
      return res['soap:Body'].SessionCreateResponse.SessionID
    }
  }

  public static async StartTimer(AfterPlayBack: () => void): Promise<void> {
    if (!OTRSSession.TimerId) {
      const interval = this.TimerInterval ? this.TimerInterval : 3600000
      OTRSSession.TimerId = setInterval(() => {
        OTRSSession._sessionId = undefined
        new OTRSSession(OTRSSession.auth, AfterPlayBack)
      }, interval)
    }
  }
}
