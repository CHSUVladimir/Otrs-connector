import 'jest-canvas-mock'
import { ISession, OTRSSession, Soap } from '../src'
import { ValuePart } from '../src/Soap/SoapTypes'

const mockIS: ISession = {
  UserLogin: 'testLogin',
  CustomerUserLogin: 'testCustomer',
  Password: 'testPassword',
}
const headers: HeadersInit = new Headers()
headers.set('Content-Type', 'text/xml')

const mockResponse: Response = {
  text: () =>
    Promise.resolve(
      `<?xml version="1.0" encoding="UTF-8"?><soap:Envelope soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><SessionCreateResponse xmlns="http://10.0.0.12/nph-genericinterface.pl/Webservice/SharePointWC"><SessionID>noWwJqjGO5FOxz4YgUzMi8122sVsDqZO</SessionID></SessionCreateResponse></soap:Body></soap:Envelope>`,
    ),
  headers: headers,
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'Ok',
  type: 'default',
  url: 'testURL',
  clone: () => {
    return mockResponse
  },
  body: null,
  bodyUsed: true,
  arrayBuffer: () =>
    new Promise<ArrayBuffer>((resolve) => {
      resolve(new ArrayBuffer(8))
    }),
  blob: () =>
    new Promise<Blob>((resolve) => {
      resolve(new Blob())
    }),
  formData: () =>
    new Promise<FormData>((resolve) => {
      let f: FormData = new FormData()
      resolve(f)
    }),
  json: () => Promise.resolve(undefined),
}

describe('OTRSConnector', () => {
  test('open session on create', () => {
    global.fetch = jest.fn(() => Promise.resolve(mockResponse))
    const model: ValuePart = {
      PartName: 'SessionCreate',
      Values: mockIS,
    }
    OTRSSession.URL = 'testURl'
    const conn = new OTRSSession(mockIS, () => {})
    expect(global.fetch).toHaveBeenCalledWith('testURl', {
      body: Soap.stringfy(undefined, model),
      method: 'POST',
      mode: 'cors',
    })
    conn.OpenSession().then((r) => {
      expect(r).toBe('noWwJqjGO5FOxz4YgUzMi8122sVsDqZO')
    })
  })
})
