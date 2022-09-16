import { IArticle } from '../src'
import TicketCreate from '../src/OTRS/TicketCreate'
import TicketUpdate from '../src/OTRS/TicketUpdate'

const headers: HeadersInit = new Headers()
headers.set('Content-Type', 'text/xml')

const mockResponse: Response = {
  text: () =>
    Promise.resolve(
      `<?xml version="1.0" encoding="UTF-8"?><soap:Envelope soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><TicketUpdateResponse xmlns="http://10.0.0.12/nph-genericinterface.pl/Webservice/SharePointWC"><ArticleID>8667</ArticleID><TicketID>1668</TicketID><TicketNumber>2022091301000041</TicketNumber></TicketUpdateResponse></soap:Body></soap:Envelope>`,
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

const mockRequest = `<?xml version="1.0" encoding="utf-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tic="http://www.otrs.org/TicketConnector/">
            <soapenv:Header/>
            
        <soapenv:Body>
            <TicketUpdate>
            <tic:TicketID>1668</tic:TicketID>
            <tic:SessionID>Q1SPtmGPPoACzO33SzzXJMuiq7CvxZdh</tic:SessionID>
            <tic:Title>test</tic:Title>
            <tic:QueueID>2</tic:QueueID>
            <tic:Article><tic:Subject>second test update</tic:Subject>
            <tic:Body> update test</tic:Body>
            <tic:ContentType>text/html; charset=utf8</tic:ContentType>
            <tic:Charset>utf-8</tic:Charset>
            <tic:MimeType>text/html</tic:MimeType>
            <tic:IsVisibleForCustomer>1</tic:IsVisibleForCustomer>
            <tic:SenderTypeID>3</tic:SenderTypeID></tic:Article>
        </TicketUpdate>
        </soapenv:Body>
        
        </soapenv:Envelope>
        `
function Artticle() {
  const tit = 'second test update'
  const body = ' update test'
  let res = {} as IArticle
  res.Subject = tit
  res.Body = TicketCreate.EscapeBracket(body)
  res.ContentType = 'text/html; charset=utf8'
  res.Charset = 'utf-8'
  res.MimeType = 'text/html'
  res.IsVisibleForCustomer = 1
  res.SenderTypeID = '3'
  return res
}
describe('OTRSTicketUpdate', () => {
  test('Update', () => {
    global.fetch = jest.fn(() => Promise.resolve(mockResponse))
    TicketUpdate.URL = 'testURL'
    const res = new TicketUpdate()
    const tic = res.Ticket
    tic.TicketID = 1668
    tic.SessionID = 'Q1SPtmGPPoACzO33SzzXJMuiq7CvxZdh'
    tic.Title = 'test'
    tic.QueueID = 2
    tic.Article = []
    tic.Article.push(Artticle())
    res.Update().then((resp) => {
      expect(global.fetch).toHaveBeenCalledWith('testURL', { body: mockRequest, method: 'POST', mode: 'cors' })
      expect(resp.ArticleID).toBe(8667)
      expect(resp.TicketID).toBe(1668)
      expect(resp.TicketNumber).toBe(2022091301000041)
    })
  })
})
