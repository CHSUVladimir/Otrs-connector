import { IAddArticle, ITicketCreate, OTRSTicketCreate } from "../src"

const headers : HeadersInit = new Headers()
headers.set('Content-Type','text/xml') 

const mock1Response:Response={
    text:()=>Promise.resolve(`<?xml version="1.0" encoding="UTF-8"?><soap:Envelope soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><TicketCreateResponse xmlns="http://10.0.0.12/nph-genericinterface.pl/Webservice/SharePointWC"><ArticleID>8620</ArticleID><TicketID>1669</TicketID><TicketNumber>2022091301000051</TicketNumber></TicketCreateResponse></soap:Body></soap:Envelope>`),
            headers:headers,
            ok:true,
            redirected:false,
            status:200,
            statusText:'Ok',
            type:'default',
            url:'testURL',
            clone:()=>{return mock1Response},
            body:null,
            bodyUsed:true,
            arrayBuffer:()=>new Promise<ArrayBuffer>((resolve)=>{
                resolve(new ArrayBuffer(8))
            }),
            blob:()=>new Promise<Blob>((resolve)=>{
                resolve(new Blob())
            }),
            formData:()=>new Promise<FormData>(resolve=>{
                let f:FormData=new FormData();
                resolve(f);
            }),
            json:()=>Promise.resolve(undefined),
}

const mockRequest =`<?xml version="1.0" encoding="utf-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tic="http://www.otrs.org/TicketConnector/">
            <soapenv:Header/>
            
        <soapenv:Body>
            <TicketCreate>
            <tic:SessionID>lYmaPoYQq3RjfIs4CGlk7mhZoHoRTKgj</tic:SessionID>
            <tic:Ticket>
            <tic:Title>test</tic:Title>
            <tic:QueueID>2</tic:QueueID>
            <tic:StateID>1</tic:StateID>
            <tic:TypeID>1</tic:TypeID>
            <tic:ServiceID>2</tic:ServiceID>
            <tic:CustomerID>ЧГУ</tic:CustomerID>
            <tic:CustomerUser>vetrunov</tic:CustomerUser>
            <tic:PriorityID>3</tic:PriorityID>
            </tic:Ticket>
            <tic:Article>
            <tic:Subject>test</tic:Subject>
            <tic:Body>test to send article
    second line
    another line
    &lt;/br&gt;
    &lt;p&gt;paragraph&lt;/p&gt;</tic:Body>
            <tic:ContentType>text/html; charset=utf8</tic:ContentType>
            <tic:Charset>utf-8</tic:Charset>
            <tic:MimeType>text/html</tic:MimeType>
            <tic:IsVisibleForCustomer>1</tic:IsVisibleForCustomer>
            <tic:SenderTypeID>3</tic:SenderTypeID>
            </tic:Article>
        </TicketCreate>
        </soapenv:Body>
        
        </soapenv:Envelope>
        `
function getTicket(){
    var res:ITicketCreate={
        Title:'test',
        QueueID:2,
        StateID:1,
        TypeID:1,
        ServiceID:"2",
        CustomerID:"ЧГУ",
        CustomerUser:'vetrunov',
        PriorityID:3
    } as ITicketCreate
    

    return res;
}

function getArticle(){
    let res={} as IAddArticle;
    res.Subject='test';
    res.Body=`test to send article
    second line
    another line
    &lt;/br&gt;
    &lt;p&gt;paragraph&lt;/p&gt;`;
    res.ContentType="text/html; charset=utf8";
    res.Charset="utf-8";
    res.MimeType="text/html";
    res.IsVisibleForCustomer=1;
    res.SenderTypeID="3"; 
    return res;
}


describe('OTRSTicketCreate', () => {
    test('Ticket create', () => {
        global.fetch = jest.fn(()=>Promise.resolve(mock1Response))
        OTRSTicketCreate.URL="TestUrl"
        const tc = new OTRSTicketCreate()
		const tv = tc.TicketCreate
        tv.SessionID = 'lYmaPoYQq3RjfIs4CGlk7mhZoHoRTKgj'
        tv.Ticket = getTicket()
		tv.Article = getArticle()
		tc.Create().then(m=>{
            expect(global.fetch).toHaveBeenCalledWith("TestUrl", {"body": mockRequest, "method": "POST", "mode": "cors"})
            expect(m.Error).toBe(undefined)
            expect(m.ArticleID).toBe(8620)
            expect(m.TicketID).toBe(1669)
            expect(m.TicketNumber).toBe(2022091301000051)
        })
    })
})