import 'jest-canvas-mock'
import { OTRSTicketSearch } from '../src'

const headers : HeadersInit = new Headers()
headers.set('Content-Type','text/xml') 

const mockAllResponse:Response={
    text:()=>Promise.resolve(`<?xml version="1.0" encoding="UTF-8"?><soap:Envelope soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><TicketSearchResponse xmlns="http://10.0.0.12/nph-genericinterface.pl/Webservice/SharePointWC"><TicketID>1357</TicketID><TicketID>1355</TicketID><TicketID>1281</TicketID><TicketID>1280</TicketID><TicketID>1279</TicketID><TicketID>1274</TicketID><TicketID>1273</TicketID><TicketID>1270</TicketID><TicketID>1258</TicketID><TicketID>1254</TicketID><TicketID>1207</TicketID><TicketID>1206</TicketID><TicketID>1100</TicketID><TicketID>1099</TicketID><TicketID>1092</TicketID><TicketID>1091</TicketID><TicketID>1090</TicketID><TicketID>1089</TicketID><TicketID>1078</TicketID><TicketID>1072</TicketID><TicketID>1071</TicketID><TicketID>1036</TicketID><TicketID>1035</TicketID><TicketID>1031</TicketID><TicketID>1023</TicketID><TicketID>1022</TicketID><TicketID>1021</TicketID><TicketID>1020</TicketID><TicketID>1017</TicketID><TicketID>1016</TicketID><TicketID>1015</TicketID><TicketID>1014</TicketID><TicketID>1013</TicketID><TicketID>1012</TicketID><TicketID>1011</TicketID><TicketID>1009</TicketID><TicketID>1008</TicketID><TicketID>1007</TicketID><TicketID>1006</TicketID><TicketID>953</TicketID><TicketID>950</TicketID><TicketID>949</TicketID><TicketID>926</TicketID><TicketID>913</TicketID><TicketID>912</TicketID><TicketID>911</TicketID><TicketID>89</TicketID><TicketID>88</TicketID><TicketID>86</TicketID><TicketID>84</TicketID><TicketID>83</TicketID><TicketID>59</TicketID><TicketID>58</TicketID><TicketID>57</TicketID><TicketID>56</TicketID><TicketID>55</TicketID><TicketID>54</TicketID><TicketID>53</TicketID><TicketID>48</TicketID><TicketID>42</TicketID><TicketID>41</TicketID><TicketID>39</TicketID><TicketID>38</TicketID><TicketID>33</TicketID><TicketID>32</TicketID><TicketID>31</TicketID><TicketID>26</TicketID><TicketID>25</TicketID><TicketID>24</TicketID><TicketID>23</TicketID><TicketID>22</TicketID><TicketID>21</TicketID><TicketID>20</TicketID><TicketID>18</TicketID><TicketID>17</TicketID><TicketID>16</TicketID><TicketID>15</TicketID><TicketID>14</TicketID><TicketID>13</TicketID><TicketID>12</TicketID><TicketID>11</TicketID><TicketID>10</TicketID></TicketSearchResponse></soap:Body></soap:Envelope>`),
            headers:headers,
            ok:true,
            redirected:false,
            status:200,
            statusText:'Ok',
            type:'default',
            url:'testURL',
            clone:()=>{return mockAllResponse},
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

const mockOpenResponse:Response={
    text:()=>Promise.resolve(`<?xml version="1.0" encoding="UTF-8"?><soap:Envelope soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><TicketSearchResponse xmlns="http://10.0.0.12/nph-genericinterface.pl/Webservice/SharePointWC"><TicketID>1355</TicketID></TicketSearchResponse></soap:Body></soap:Envelope>`),
            headers:headers,
            ok:true,
            redirected:false,
            status:200,
            statusText:'Ok',
            type:'default',
            url:'testURL',
            clone:()=>{return mockAllResponse},
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

describe('OTRSTicketSearch', ()=>{
    test('get All',()=>{
        global.fetch=jest.fn(()=>Promise.resolve(mockAllResponse))
        OTRSTicketSearch.URL="testURL"
        const ts = new OTRSTicketSearch()
        const st =ts.SearchTerms
        st.SessionID = "session id"
		st.CustomerUserLogin =["test user"]
		st.TypeIDs = ["1"]
		st.Limit=10000
        const xmlRequest =`<?xml version="1.0" encoding="utf-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tic="http://www.otrs.org/TicketConnector/">
            <soapenv:Header/>
            
        <soapenv:Body>
            <TicketSearch>
            <tic:SessionID>session id</tic:SessionID>
            <tic:CustomerUserLogin>test user</tic:CustomerUserLogin>
            <tic:TypeIDs>1</tic:TypeIDs>
            <tic:Limit>10000</tic:Limit>
        </TicketSearch>
        </soapenv:Body>
        
        </soapenv:Envelope>
        `
        ts.Search().then((r)=>{
            expect(global.fetch).toHaveBeenCalledWith("testURL", {"body": xmlRequest, "method": "POST", "mode": "cors"})
            const ar = r as number[]
            expect(ar.length).toBe(82)
        })
    })

    test('get by state',()=>{
        global.fetch=jest.fn(()=>Promise.resolve(mockOpenResponse))
        OTRSTicketSearch.URL="testURL"
        const ts = new OTRSTicketSearch()
        const st =ts.SearchTerms
        st.SessionID = "session id"
		st.CustomerUserLogin =["test user"]
		st.TypeIDs = ["1"]
		st.Limit=10000
        st.StateIDs = ["1", "4", "5", "6", "8", "9"]
        const xmlRequest =`<?xml version="1.0" encoding="utf-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tic="http://www.otrs.org/TicketConnector/">
            <soapenv:Header/>
            
        <soapenv:Body>
            <TicketSearch>
            <tic:SessionID>session id</tic:SessionID>
            <tic:CustomerUserLogin>test user</tic:CustomerUserLogin>
            <tic:TypeIDs>1</tic:TypeIDs>
            <tic:Limit>10000</tic:Limit>
            <tic:StateIDs>1</tic:StateIDs>
            <tic:StateIDs>4</tic:StateIDs>
            <tic:StateIDs>5</tic:StateIDs>
            <tic:StateIDs>6</tic:StateIDs>
            <tic:StateIDs>8</tic:StateIDs>
            <tic:StateIDs>9</tic:StateIDs>
        </TicketSearch>
        </soapenv:Body>
        
        </soapenv:Envelope>
        `
        ts.Search().then((r)=>{
            expect(global.fetch).toHaveBeenCalledWith("testURL", {"body": xmlRequest, "method": "POST", "mode": "cors"})
            const ar = r as number
            expect(ar).toBe(1355)
        })
    })
})