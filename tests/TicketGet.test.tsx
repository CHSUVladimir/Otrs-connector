import { ITicket } from "../src"
import TicketGet from "../src/OTRS/TicketGet"

const headers : HeadersInit = new Headers()
headers.set('Content-Type','text/xml') 

const mock1Response:Response={
    text:()=>Promise.resolve(`<?xml version="1.0" encoding="UTF-8"?><soap:Envelope soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><TicketGetResponse xmlns="http://10.0.0.12/nph-genericinterface.pl/Webservice/SharePointWC"><Ticket><Age>17022130</Age><ArchiveFlag>n</ArchiveFlag><Article><ArticleID>7017</ArticleID><ArticleNumber>1</ArticleNumber><Attachment><Content>PHNwYW4gY3Q9J1R5cGVFcXVpcCc+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0LXRhdC90LjQ
    utC4OiDQn9GA0LjQvdGCINGB0LXRgNCy0LXRgDwvc3Bhbj48YnI+PHNwYW4gY3Q9J01vZGVsJz7Q
    nNC+0LTQtdC70Yw6IEQtTGluayBEUFIgMTA2MTwvc3Bhbj48YnI+PHNwYW4gY3Q9J0ludk51bWJl
    cic+0JjQvdCy0LXQvdGC0LDRgNC90YvQuSDQvdC+0LzQtdGAOiAxMDEzNDQwMzM3PC9zcGFuPjxi
    cj48c3BhbiBjdD0nQWRyZXMnPtCa0L7RgNC/0YPRgSAo0LDQtNGA0LXRgSksIOKEliDQutCw0LHQ
    uNC90LXRgtCwOiDQm9GD0L3QsNGH0LDRgNGB0LrQvtCz0L4gNSDQutCw0LEg4oSWMTEzPC9zcGFu
    Pjxicj48c3BhbiBjdD0nRklPJz7QpNCY0J4g0LzQsNGC0LXRgNC40LDQu9GM0L3QviDQvtGC0LLQ
    tdGC0YHQstC10L3QvdC+0LPQviDQu9C40YbQsCAo0L/QvtC70L3QvtGB0YLRjNGOKTog0J3QtSDQ
    t9C90LDRjiAo0JLQsNC00LjQvCDQnNCw0YDQutC10LvQvtCyKTwvc3Bhbj48YnI+PHNwYW4gY3Q9
    J0RvbGdub3N0Jz7QlNC+0LvQttC90L7RgdGC0Ywg0LzQsNGC0LXRgNC40LDQu9GM0L3QviDQvtGC
    0LLQtdGC0YHQstC10L3QvdC+0LPQviDQu9C40YbQsDog0J3QsNGH0LDQu9GM0L3QuNC6PC9zcGFu
    Pjxicj48c3BhbiBjdD0nQ29udGFjdCc+0JrQvtC90YLQsNC60YLQvdGL0Lkg0YLQtdC70LXRhNC+
    0L0g0LzQsNGC0LXRgNC40LDQu9GM0L3QviDQvtGC0LLQtdGC0YHQstC10L3QvdC+0LPQviDQu9C4
    0YbQsDog0LAg0LrRgtC+INC10LPQviDQt9Cw0L3QtdGCPzwvc3Bhbj48YnI+PHNwYW4gY3Q9J1N1
    YmRpdmlzaW9uJz7Qn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTog0J7QoNC40KHQn9CePC9zcGFu
    Pjxicj48c3BhbiBjdD0nTm90ZSc+0J3QtdC40YHQv9GA0LDQstC90L7RgdGMOiDQn9GA0Lgg0L7R
    gtC/0YDQsNCy0LrQtSDQvdCwINC/0YDQuNC90YLQtdGALCDQsiDQv9C10YDQstGL0Lkg0YDQsNC3
    INC90LUg0L/QtdGH0LDRgtCw0LXRgtGB0Y8g0LTQvtC60YPQvNC10L3Rgiwg0L/RgNC4INC/0L7Q
    stGC0L7RgNC90L7QuSDQvtGC0L/RgNCw0LLQutC1LCDQv9C10YfQsNGC0LDQtdGCLCDQvtC00L3Q
    sNC60L4g0LXRgdC70Lgg0YEg0LTRgNGD0LPQvtCz0L4g0LrQvtC80L/RjNGO0YLQtdGA0LAg0L7R
    gtC/0YDQsNCy0LjRgtGMINC90LAg0L/QtdGH0LDRgtGMLCDRgtC+INCx0YPQtNC10YIg0YDQsNGB
    0L/QtdGH0LDRgtCw0L0g0LTQvtC60YPQvNC10L3RgiDQutC+0YLQvtGA0YvQuSDQsdGL0Lsg0L7R
    gtC/0YDQsNCy0LvQtdC9INGBINC80L7QtdCz0L4sINGBINC00L7Qv9C+0LvQvdC40YLQtdC70YzQ
    vdC+0Lkg0YHRgtGA0LDQvdC40YbQtdC5INGBINC60YDRj9C60L7Qt9GP0LHRgNCw0LzQuC48L3Nw
    YW4+PGJyPg==
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>1375</FilesizeRaw></Attachment><Bcc /><Body>Наименование техники: Принт сервер
    Модель: D-Link DPR 1061
    Инвентарный номер: 1013440337
    Корпус (адрес), № кабинета: Луначарского 5 каб №113
    ФИО материально ответсвенного лица (полностью): Не знаю (Вадим Маркелов)
    Должность материально ответсвенного лица: Начальник
    Контактный телефон материально ответсвенного лица: а кто его занет?
    Подразделение: ОРиСПО
    Неисправнось: При отправке на принтер, в первый раз не печатается документ,
    при повторной отправке, печатает, однако если с другого компьютера отправить
    на печать, то будет распечатан документ который был отправлен с моего, с
    дополнительной страницей с крякозябрами.
    </Body><Cc /><ChangeBy>3</ChangeBy><ChangeTime>2022-02-28 09:28:20</ChangeTime><Charset>utf8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf8</ContentCharset><ContentType>text/plain; charset=utf8</ContentType><CreateBy>3</CreateBy><CreateTime>2022-02-28 09:28:20</CreateTime><From>"vetrunov" &lt;vetrunov@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1646029700</IncomingTime><IsVisibleForCustomer>1</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>customer</SenderType><SenderTypeID>3</SenderTypeID><Subject>Ремонт компьютерной техники (кроме принтеров)</Subject><TicketID>1355</TicketID><TimeUnit>0</TimeUnit><To>УИТ::Ремонт компьютерной техники</To></Article><ChangeBy>3</ChangeBy><Changed>2022-02-28 09:28:20</Changed><CreateBy>3</CreateBy><Created>2022-02-28 09:28:20</Created><CustomerID>ЧГУ</CustomerID><CustomerUserID>vetrunov</CustomerUserID><DynamicField><Name>EndAdversment</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementActivityID</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementProcessID</Name><Value /></DynamicField><DynamicField><Name>StartAdversment</Name><Value /></DynamicField><EscalationResponseTime>0</EscalationResponseTime><EscalationSolutionTime>0</EscalationSolutionTime><EscalationTime>0</EscalationTime><EscalationUpdateTime>0</EscalationUpdateTime><GroupID>8</GroupID><Lock>unlock</Lock><LockID>1</LockID><Owner>SharePointAgent</Owner><OwnerID>3</OwnerID><Priority>3 normal</Priority><PriorityID>3</PriorityID><Queue>УИТ::Обслуживание оргтехники::Ремонт компьютерной техники</Queue><QueueID>14</QueueID><RealTillTimeNotUsed>0</RealTillTimeNotUsed><Responsible>otrs-admin</Responsible><ResponsibleID>1</ResponsibleID><SLAID /><Service>SharePointWC</Service><ServiceID>2</ServiceID><State>new</State><StateID>1</StateID><StateType>new</StateType><TicketID>1355</TicketID><TicketNumber>2022022801000017</TicketNumber><TimeUnit>0</TimeUnit><Title>Ремонт компьютерной техники (кроме принтеров)</Title><Type>Unclassified</Type><TypeID>1</TypeID><UnlockTimeout>0</UnlockTimeout><UntilTime>0</UntilTime></Ticket></TicketGetResponse></soap:Body></soap:Envelope>`),
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

const mock3Response:Response={
    text:()=>Promise.resolve(`<?xml version="1.0" encoding="UTF-8"?><soap:Envelope soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><TicketGetResponse xmlns="http://10.0.0.12/nph-genericinterface.pl/Webservice/SharePointWC"><Ticket><Age>17022393</Age><ArchiveFlag>n</ArchiveFlag><Article><ArticleID>7017</ArticleID><ArticleNumber>1</ArticleNumber><Attachment><Content>PHNwYW4gY3Q9J1R5cGVFcXVpcCc+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0LXRhdC90LjQ
    utC4OiDQn9GA0LjQvdGCINGB0LXRgNCy0LXRgDwvc3Bhbj48YnI+PHNwYW4gY3Q9J01vZGVsJz7Q
    nNC+0LTQtdC70Yw6IEQtTGluayBEUFIgMTA2MTwvc3Bhbj48YnI+PHNwYW4gY3Q9J0ludk51bWJl
    cic+0JjQvdCy0LXQvdGC0LDRgNC90YvQuSDQvdC+0LzQtdGAOiAxMDEzNDQwMzM3PC9zcGFuPjxi
    cj48c3BhbiBjdD0nQWRyZXMnPtCa0L7RgNC/0YPRgSAo0LDQtNGA0LXRgSksIOKEliDQutCw0LHQ
    uNC90LXRgtCwOiDQm9GD0L3QsNGH0LDRgNGB0LrQvtCz0L4gNSDQutCw0LEg4oSWMTEzPC9zcGFu
    Pjxicj48c3BhbiBjdD0nRklPJz7QpNCY0J4g0LzQsNGC0LXRgNC40LDQu9GM0L3QviDQvtGC0LLQ
    tdGC0YHQstC10L3QvdC+0LPQviDQu9C40YbQsCAo0L/QvtC70L3QvtGB0YLRjNGOKTog0J3QtSDQ
    t9C90LDRjiAo0JLQsNC00LjQvCDQnNCw0YDQutC10LvQvtCyKTwvc3Bhbj48YnI+PHNwYW4gY3Q9
    J0RvbGdub3N0Jz7QlNC+0LvQttC90L7RgdGC0Ywg0LzQsNGC0LXRgNC40LDQu9GM0L3QviDQvtGC
    0LLQtdGC0YHQstC10L3QvdC+0LPQviDQu9C40YbQsDog0J3QsNGH0LDQu9GM0L3QuNC6PC9zcGFu
    Pjxicj48c3BhbiBjdD0nQ29udGFjdCc+0JrQvtC90YLQsNC60YLQvdGL0Lkg0YLQtdC70LXRhNC+
    0L0g0LzQsNGC0LXRgNC40LDQu9GM0L3QviDQvtGC0LLQtdGC0YHQstC10L3QvdC+0LPQviDQu9C4
    0YbQsDog0LAg0LrRgtC+INC10LPQviDQt9Cw0L3QtdGCPzwvc3Bhbj48YnI+PHNwYW4gY3Q9J1N1
    YmRpdmlzaW9uJz7Qn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTog0J7QoNC40KHQn9CePC9zcGFu
    Pjxicj48c3BhbiBjdD0nTm90ZSc+0J3QtdC40YHQv9GA0LDQstC90L7RgdGMOiDQn9GA0Lgg0L7R
    gtC/0YDQsNCy0LrQtSDQvdCwINC/0YDQuNC90YLQtdGALCDQsiDQv9C10YDQstGL0Lkg0YDQsNC3
    INC90LUg0L/QtdGH0LDRgtCw0LXRgtGB0Y8g0LTQvtC60YPQvNC10L3Rgiwg0L/RgNC4INC/0L7Q
    stGC0L7RgNC90L7QuSDQvtGC0L/RgNCw0LLQutC1LCDQv9C10YfQsNGC0LDQtdGCLCDQvtC00L3Q
    sNC60L4g0LXRgdC70Lgg0YEg0LTRgNGD0LPQvtCz0L4g0LrQvtC80L/RjNGO0YLQtdGA0LAg0L7R
    gtC/0YDQsNCy0LjRgtGMINC90LAg0L/QtdGH0LDRgtGMLCDRgtC+INCx0YPQtNC10YIg0YDQsNGB
    0L/QtdGH0LDRgtCw0L0g0LTQvtC60YPQvNC10L3RgiDQutC+0YLQvtGA0YvQuSDQsdGL0Lsg0L7R
    gtC/0YDQsNCy0LvQtdC9INGBINC80L7QtdCz0L4sINGBINC00L7Qv9C+0LvQvdC40YLQtdC70YzQ
    vdC+0Lkg0YHRgtGA0LDQvdC40YbQtdC5INGBINC60YDRj9C60L7Qt9GP0LHRgNCw0LzQuC48L3Nw
    YW4+PGJyPg==
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>1375</FilesizeRaw></Attachment><Bcc /><Body>Наименование техники: Принт сервер
    Модель: D-Link DPR 1061
    Инвентарный номер: 1013440337
    Корпус (адрес), № кабинета: Луначарского 5 каб №113
    ФИО материально ответсвенного лица (полностью): Не знаю (Вадим Маркелов)
    Должность материально ответсвенного лица: Начальник
    Контактный телефон материально ответсвенного лица: а кто его занет?
    Подразделение: ОРиСПО
    Неисправнось: При отправке на принтер, в первый раз не печатается документ,
    при повторной отправке, печатает, однако если с другого компьютера отправить
    на печать, то будет распечатан документ который был отправлен с моего, с
    дополнительной страницей с крякозябрами.
    </Body><Cc /><ChangeBy>3</ChangeBy><ChangeTime>2022-02-28 09:28:20</ChangeTime><Charset>utf8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf8</ContentCharset><ContentType>text/plain; charset=utf8</ContentType><CreateBy>3</CreateBy><CreateTime>2022-02-28 09:28:20</CreateTime><From>"vetrunov" &lt;vetrunov@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1646029700</IncomingTime><IsVisibleForCustomer>1</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>customer</SenderType><SenderTypeID>3</SenderTypeID><Subject>Ремонт компьютерной техники (кроме принтеров)</Subject><TicketID>1355</TicketID><TimeUnit>0</TimeUnit><To>УИТ::Ремонт компьютерной техники</To></Article><ChangeBy>3</ChangeBy><Changed>2022-02-28 09:28:20</Changed><CreateBy>3</CreateBy><Created>2022-02-28 09:28:20</Created><CustomerID>ЧГУ</CustomerID><CustomerUserID>vetrunov</CustomerUserID><DynamicField><Name>EndAdversment</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementActivityID</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementProcessID</Name><Value /></DynamicField><DynamicField><Name>StartAdversment</Name><Value /></DynamicField><EscalationResponseTime>0</EscalationResponseTime><EscalationSolutionTime>0</EscalationSolutionTime><EscalationTime>0</EscalationTime><EscalationUpdateTime>0</EscalationUpdateTime><GroupID>8</GroupID><Lock>unlock</Lock><LockID>1</LockID><Owner>SharePointAgent</Owner><OwnerID>3</OwnerID><Priority>3 normal</Priority><PriorityID>3</PriorityID><Queue>УИТ::Обслуживание оргтехники::Ремонт компьютерной техники</Queue><QueueID>14</QueueID><RealTillTimeNotUsed>0</RealTillTimeNotUsed><Responsible>otrs-admin</Responsible><ResponsibleID>1</ResponsibleID><SLAID /><Service>SharePointWC</Service><ServiceID>2</ServiceID><State>new</State><StateID>1</StateID><StateType>new</StateType><TicketID>1355</TicketID><TicketNumber>2022022801000017</TicketNumber><TimeUnit>0</TimeUnit><Title>Ремонт компьютерной техники (кроме принтеров)</Title><Type>Unclassified</Type><TypeID>1</TypeID><UnlockTimeout>0</UnlockTimeout><UntilTime>0</UntilTime></Ticket><Ticket><Age>17021116</Age><ArchiveFlag>n</ArchiveFlag><Article><ArticleID>7019</ArticleID><ArticleNumber>1</ArticleNumber><Attachment><Content>PHNwYW4gY3Q9J1R5cGVFcXVpcCc+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0LXRhdC90LjQ
    utC4OiB0ZXN0PC9zcGFuPjxicj48c3BhbiBjdD0nTW9kZWwnPtCc0L7QtNC10LvRjDogdGVzdDwv
    c3Bhbj48YnI+PHNwYW4gY3Q9J0ludk51bWJlcic+0JjQvdCy0LXQvdGC0LDRgNC90YvQuSDQvdC+
    0LzQtdGAOiB0ZXN0PC9zcGFuPjxicj48c3BhbiBjdD0nQWRyZXMnPtCa0L7RgNC/0YPRgSAo0LDQ
    tNGA0LXRgSksIOKEliDQutCw0LHQuNC90LXRgtCwOiDQm9GD0L3QsNGH0LDRgNGB0LrQvtCz0L4g
    NTwvc3Bhbj48YnI+PHNwYW4gY3Q9J0ZJTyc+0KTQmNCeINC80LDRgtC10YDQuNCw0LvRjNC90L4g
    0L7RgtCy0LXRgtGB0LLQtdC90L3QvtCz0L4g0LvQuNGG0LAgKNC/0L7Qu9C90L7RgdGC0YzRjik6
    INCi0YDRg9C90L7QsiDQktC70LDQtNC40LzQuNGAINCV0LLQs9C10L3RjNC10LLQuNGHPC9zcGFu
    Pjxicj48c3BhbiBjdD0nRG9sZ25vc3QnPtCU0L7Qu9C20L3QvtGB0YLRjCDQvNCw0YLQtdGA0LjQ
    sNC70YzQvdC+INC+0YLQstC10YLRgdCy0LXQvdC90L7Qs9C+INC70LjRhtCwOiDQmNC90LbQtdC9
    0LXRgCDQv9GA0L7Qs9GA0LDQvNC80LjRgdGCPC9zcGFuPjxicj48c3BhbiBjdD0nQ29udGFjdCc+
    0JrQvtC90YLQsNC60YLQvdGL0Lkg0YLQtdC70LXRhNC+0L0g0LzQsNGC0LXRgNC40LDQu9GM0L3Q
    viDQvtGC0LLQtdGC0YHQstC10L3QvdC+0LPQviDQu9C40YbQsDogKzcoOTA2KTI5MzE2ODk8L3Nw
    YW4+PGJyPjxzcGFuIGN0PSdTdWJkaXZpc2lvbic+0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LU6
    INCe0KDQuNCh0J/Qnjwvc3Bhbj48YnI+PHNwYW4gY3Q9J05vdGUnPtCd0LXQuNGB0L/RgNCw0LLQ
    vdC+0YHRjDog0KLQtdGB0YIg0L/QvtC00LDRh9C4INC4INC+0L/QvtCy0LXRidC10L3QuNGPPC9z
    cGFuPjxicj4=
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>920</FilesizeRaw></Attachment><Bcc /><Body>Наименование техники: test
    Модель: test
    Инвентарный номер: test
    Корпус (адрес), № кабинета: Луначарского 5
    ФИО материально ответсвенного лица (полностью): Трунов Владимир Евгеньевич
    Должность материально ответсвенного лица: Инженер программист
    Контактный телефон материально ответсвенного лица: +7(906)2931689
    Подразделение: ОРиСПО
    Неисправнось: Тест подачи и оповещения
    </Body><Cc /><ChangeBy>3</ChangeBy><ChangeTime>2022-02-28 09:49:37</ChangeTime><Charset>utf8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf8</ContentCharset><ContentType>text/plain; charset=utf8</ContentType><CreateBy>3</CreateBy><CreateTime>2022-02-28 09:49:37</CreateTime><From>"vetrunov" &lt;vetrunov@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1646030977</IncomingTime><IsVisibleForCustomer>1</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>customer</SenderType><SenderTypeID>3</SenderTypeID><Subject>Ремонт компьютерной техники (кроме принтеров)</Subject><TicketID>1357</TicketID><TimeUnit>0</TimeUnit><To>УИТ::Ремонт компьютерной техники</To></Article><Article><ArticleID>7020</ArticleID><ArticleNumber>2</ArticleNumber><Attachment><Content>PCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBl
    IiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiLz48L2hlYWQ+PGJvZHkgc3R5bGU9
    ImZvbnQtZmFtaWx5OkdlbmV2YSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXpl
    OiAxMnB4OyI+MTIzPC9ib2R5PjwvaHRtbD4=
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf-8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>197</FilesizeRaw></Attachment><Bcc /><Body>123</Body><Cc /><ChangeBy>15</ChangeBy><ChangeTime>2022-02-28 10:39:56</ChangeTime><Charset>utf-8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf-8</ContentCharset><ContentType>text/plain; charset=utf-8</ContentType><CreateBy>15</CreateBy><CreateTime>2022-02-28 10:39:56</CreateTime><From>"Вадим Маркелов" &lt;vgmarkelov@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1646033996</IncomingTime><IsVisibleForCustomer>1</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>agent</SenderType><SenderTypeID>1</SenderTypeID><Subject>Тест успешен</Subject><TicketID>1357</TicketID><TimeUnit>0</TimeUnit><To /></Article><Article><ArticleID>7021</ArticleID><ArticleNumber>3</ArticleNumber><Attachment><Content>CjwhRE9DVFlQRSBodG1sIFBVQkxJQyAiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25h
    bC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9u
    YWwuZHRkIj4KPGh0bWw+CjxoZWFkPgogICAgPG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBl
    IiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLTgiPgogICAgPHN0eWxlIHR5cGU9InRl
    eHQvY3NzIj4KICAgIGJvZHkgewogICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7CiAgICAg
    ICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lOwogICAgICAgIG1hcmdpbjogMHB4Owog
    ICAgICAgIHBhZGRpbmc6IDBweDsKICAgIH0KCiAgICB0YWJsZSB0ZCB7CiAgICAgICAgYm9yZGVy
    LWNvbGxhcHNlOiBjb2xsYXBzZTsKICAgIH0KCiAgICAjYmFja2dyb3VuZFRhYmxlIHsKICAgICAg
    ICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgcGFk
    ZGluZzogMDsKICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OwogICAgfQoKICAgIGgxLCBo
    MiwgaDMsIGg0LCBoNSwgaDYgewogICAgICAgIGNvbG9yOiMyMDIwMjA7CiAgICAgICAgZGlzcGxh
    eTpibG9jazsKICAgICAgICBmb250LWZhbWlseTpBcmlhbDsKICAgICAgICBmb250LXdlaWdodDpi
    b2xkOwogICAgICAgIGxpbmUtaGVpZ2h0OjEwMCU7CiAgICAgICAgbWFyZ2luLXRvcDowOwogICAg
    ICAgIG1hcmdpbi1yaWdodDowOwogICAgICAgIG1hcmdpbi1ib3R0b206NXB4OwogICAgICAgIG1h
    cmdpbi1sZWZ0OjA7CiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0OwogICAgfQoKICAgIGgxIHsKICAg
    ICAgICBmb250LXNpemU6IDM0cHg7CiAgICB9CgogICAgaDIsIGgzLCBoNCwgaDUsIGg2IHsKICAg
    ICAgICBtYXJnaW4tdG9wOiA1cHg7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgfQoK
    ICAgIGgyIHsKICAgICAgICBmb250LXNpemU6IDI4cHg7CiAgICB9CgogICAgaDMgewogICAgICAg
    IGZvbnQtc2l6ZTogMjRweDsKICAgIH0KCiAgICBoNCB7CiAgICAgICAgZm9udC1zaXplOiAyMnB4
    OwogICAgfQoKICAgIGg1IHsKICAgICAgICBmb250LXNpemU6IDE4cHg7CiAgICB9CgogICAgaDYg
    ewogICAgICAgIGZvbnQtc2l6ZTogMTZweDsKICAgIH0KCiAgICAjdGVtcGxhdGVDb250YWluZXIs
    IC5ib2R5Q29udGVudHsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOwogICAgfQoK
    ICAgIC5ib2R5Q29udGVudCwgLmJvZHlDb250ZW50ICogewogICAgICAgIGNvbG9yOiAjNTA1MDUw
    OwogICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDsKICAgICAgICBmb250LXNpemU6IDEzcHg7CiAg
    ICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7CiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsKICAgIH0K
    CiAgICAuYm9keUNvbnRlbnQgZGl2IHsKICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4OwogICAg
    fQoKICAgIC5ib2R5Q29udGVudCBhOmxpbmssCiAgICAuYm9keUNvbnRlbnQgYTp2aXNpdGVkLAog
    ICAgLmZvb3RlckNvbnRlbnQgZGl2IGE6bGluaywKICAgIC5mb290ZXJDb250ZW50IGRpdiBhOnZp
    c2l0ZWQgewogICAgICAgIGNvbG9yOiAjZjkyOwogICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7
    CiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lCiAgICB9CgogICAgI3RlbXBsYXRlRm9vdGVy
    IHsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOwogICAgICAgIGJvcmRlci10b3A6
    IDBweDsKICAgIH0KCiAgICAuZm9vdGVyQ29udGVudCBkaXYgewogICAgICAgIGNvbG9yOiM3MDcw
    NzA7CiAgICAgICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAgICAgZm9udC1zaXplOjEzcHg7CiAg
    ICAgICAgbGluZS1oZWlnaHQ6MTI1JTsKICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7CiAgICB9Cgog
    ICAgI2xpbmtzIHsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOwogICAgICAgIGJv
    cmRlcjogMDsKICAgIH0KCiAgICAjbGlua3MgZGl2IHsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50
    ZXI7CiAgICB9CgogICAgLkNhbGxGb3JBY3Rpb246YWN0aXZlLAogICAgLkNhbGxGb3JBY3Rpb246
    aG92ZXIgewogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7CiAgICAgICAgYm9yZGVy
    LWNvbG9yOiAjOTk5OwogICAgfQoKICAgIC5ib2R5Q29udGVudCBhIHsKICAgICAgICBjb2xvcjog
    I2Y5MiAhaW1wb3J0YW50OwogICAgfQoKICAgIC5pbSB7CiAgICAgICAgY29sb3I6ICM1NTUgIWlt
    cG9ydGFudDsKICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KPGJvZHkgbGVmdG1hcmdpbj0iMCIg
    bWFyZ2lud2lkdGg9IjAiIHRvcG1hcmdpbj0iMCIgbWFyZ2luaGVpZ2h0PSIwIiBvZmZzZXQ9IjAi
    PgogICAgPGNlbnRlcj4KICAgICAgICA8dGFibGUgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIg
    Y2VsbHNwYWNpbmc9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJiYWNrZ3JvdW5k
    VGFibGUiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNGQUZBRkEiPgogICAgICAgICAgICA8dGJv
    ZHk+CiAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPSJj
    ZW50ZXIiIHZhbGlnbj0idG9wIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+CiAgICAg
    ICAgICAgICAgICAgICAgICAgIDx0YWJsZSBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxs
    c3BhY2luZz0iMCIgaWQ9InRlbXBsYXRlQ29udGFpbmVyIiBzdHlsZT0iYm9yZGVyOiAxcHggc29s
    aWQgI0RERERERDsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PgogICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgPHRkIGFsaWduPSJjZW50ZXIiIHZhbGlnbj0idG9wIj4KICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIw
    IiBjZWxsc3BhY2luZz0iMCIgaWQ9InRlbXBsYXRlQm9keSI+CiAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PgogICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICA8dGQgdmFsaWduPSJ0b3AiIGNsYXNzPSJib2R5Q29udGVu
    dCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgPGgxIHN0eWxlPSJiYWNrZ3JvdW5kOiAjMzMzMzMzOyBib3JkZXItYm90dG9tOiAxMHB4IHNv
    bGlkICNGRjk5MjI7IHBhZGRpbmc6IDIwcHg7IGxpbmUtaGVpZ2h0OiAxMzAlOyBjb2xvcjogIzk5
    OTsgbWFyZ2luOiAwcHg7IGZvbnQtc2l6ZTogMjBweDsiPgogICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbVGlja2V0IzIwMjIwMjI4MDEw
    MDAwMzVdINCY0LfQvNC10L3QtdC90LjQtSDRgdGC0LDRgtGD0YHQsDrQoNC10LzQvtC90YIg0LrQ
    vtC80L/RjNGO0YLQtdGA0L3QvtC5INGC0LXRhdC90LjQutC4ICjQutGA0L7QvNC1INC/0YDQuNC9
    0YLQtdGA0L7QsikKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICA8L2gxPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgPHRkIHZhbGlnbj0idG9wIiBjbGFzcz0iYm9keUNvbnRlbnQiIHN0eWxlPSJib3JkZXIt
    Ym90dG9tOiAxcHggc29saWQgI2VlZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgcGFkZGluZzog
    MTVweDsgZm9udC1zaXplOiAxM3B4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAg0JfQtNGA0LDQstGB0YLQstGD0LnRgtC1INCS0LvQsNC0
    0LjQvNC40YAsPGJyIC8+PGJyIC8+0JfQsNGP0LLQutCwIFtUaWNrZXQjMjAyMjAyMjgwMTAwMDAz
    NV0g0KHQvtC30LTQsNC90LAg0LImbmJzcDsg0KPQmNCiOjrQoNC10LzQvtC90YIg0LrQvtC80L/R
    jNGO0YLQtdGA0L3QvtC5INGC0LXRhdC90LjQutC4LjxiciAvPjxiciAvPnZldHJ1bm92INCf0LjR
    iNC10YI6PGJyIC8+PGRpdiB0eXBlPSJjaXRlIiBzdHlsZT0iYmFja2dyb3VuZDogI2Y1ZjVmNTsg
    Ym9yZGVyOiAwcHggIWltcG9ydGFudDsgY29sb3I6ICM1NTU7IG1hcmdpbjogMTBweCAwcHggMHB4
    IDBweDsgcGFkZGluZzogMTBweDsiPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC10YXQvdC4
    0LrQuDogdGVzdDxici8+CtCc0L7QtNC10LvRjDogdGVzdDxici8+CtCY0L3QstC10L3RgtCw0YDQ
    vdGL0Lkg0L3QvtC80LXRgDogdGVzdDxici8+CtCa0L7RgNC/0YPRgSAo0LDQtNGA0LXRgSksIOKE
    liDQutCw0LHQuNC90LXRgtCwOiDQm9GD0L3QsNGH0LDRgNGB0LrQvtCz0L4gNTxici8+CtCk0JjQ
    niDQvNCw0YLQtdGA0LjQsNC70YzQvdC+INC+0YLQstC10YLRgdCy0LXQvdC90L7Qs9C+INC70LjR
    htCwICjQv9C+0LvQvdC+0YHRgtGM0Y4pOiDQotGA0YPQvdC+0LIg0JLQu9Cw0LTQuNC80LjRgCDQ
    ldCy0LPQtdC90YzQtdCy0LjRhzxici8+CtCU0L7Qu9C20L3QvtGB0YLRjCDQvNCw0YLQtdGA0LjQ
    sNC70YzQvdC+INC+0YLQstC10YLRgdCy0LXQvdC90L7Qs9C+INC70LjRhtCwOiDQmNC90LbQtdC9
    0LXRgCDQv9GA0L7Qs9GA0LDQvNC80LjRgdGCPGJyLz4K0JrQvtC90YLQsNC60YLQvdGL0Lkg0YLQ
    tdC70LXRhNC+0L0g0LzQsNGC0LXRgNC40LDQu9GM0L3QviDQvtGC0LLQtdGC0YHQstC10L3QvdC+
    0LPQviDQu9C40YbQsDogKzcoOTA2KTI5MzE2ODk8YnIvPgrQn9C+0LTRgNCw0LfQtNC10LvQtdC9
    0LjQtTog0J7QoNC40KHQn9CePGJyLz4K0J3QtdC40YHQv9GA0LDQstC90L7RgdGMOiDQotC10YHR
    giDQv9C+0LTQsNGH0Lgg0Lgg0L7Qv9C+0LLQtdGJ0LXQvdC40Y88L2Rpdj48YnIgLz48YnIgLz7Q
    kdGL0Lsg0LjQt9C80LXQvdC10L0g0YHRgtCw0YLRg9GBITxiciAvPtCi0LXQutGD0YnQuNC5INGB
    0YLQsNGC0YPRgSDQt9Cw0Y/QstC60Lg6Jm5ic3A70LfQsNC60YDRi9GC0LAg0YPRgdC/0LXRiNC9
    0L4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwv
    dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+
    CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT4KICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+CiAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj0iY2VudGVyIiB2YWxpZ249InRv
    cCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgYm9yZGVy
    PSIwIiBjZWxscGFkZGluZz0iMTAiIGNlbGxzcGFjaW5nPSIwIiBpZD0idGVtcGxhdGVGb290ZXIi
    PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT4KICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHZhbGlnbj0i
    dG9wIiBjbGFzcz0iZm9vdGVyQ29udGVudCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgPC90Ym9keT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    IDwvdGFibGU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgIDwvdGJvZHk+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+CiAgICAgICAgICAg
    ICAgICAgICAgICAgIDxiciAvPgogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAg
    ICAgICA8L3RyPgogICAgICAgICAgICA8L3Rib2R5PgogICAgICAgIDwvdGFibGU+CiAgICA8L2Nl
    bnRlcj4KPC9ib2R5PgoKPC9odG1sPgo=
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf-8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>6578</FilesizeRaw></Attachment><Bcc /><Body>
       [Ticket#2022022801000035] Изменение статуса:Ремонт компьютерной техники
    (кроме принтеров)   
    
      Здравствуйте Владимир,
    
    Заявка [Ticket#2022022801000035] Создана в  УИТ::Ремонт компьютерной техники.
    
    vetrunov Пишет:
    &gt; Наименование техники: test
    &gt; Модель: test
    &gt; Инвентарный номер: test
    &gt; Корпус (адрес), № кабинета: Луначарского 5
    &gt; ФИО материально ответсвенного лица (полностью): Трунов Владимир Евгеньевич
    &gt; Должность материально ответсвенного лица: Инженер программист
    &gt; Контактный телефон материально ответсвенного лица: +7(906)2931689
    &gt; Подразделение: ОРиСПО
    &gt; Неисправнось: Тест подачи и оповещения
    
    
    
    Был изменен статус!
    Текущий статус заявки: закрыта успешно   
    
        
    </Body><Cc /><ChangeBy>15</ChangeBy><ChangeTime>2022-02-28 10:39:57</ChangeTime><Charset>utf-8</Charset><CommunicationChannelID>1</CommunicationChannelID><ContentCharset>utf-8</ContentCharset><ContentType>text/plain; charset=utf-8</ContentType><CreateBy>15</CreateBy><CreateTime>2022-02-28 10:39:57</CreateTime><From>ЧГУ &lt;otrs@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1646033997</IncomingTime><IsVisibleForCustomer>0</IsVisibleForCustomer><MessageID>&lt;1646033997.253019.618876317@otrs.chsu.ru&gt;</MessageID><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>system</SenderType><SenderTypeID>2</SenderTypeID><Subject>[Ticket#2022022801000035] Изменение статуса:Ремонт компьютерной техники (кроме принтеров)</Subject><TicketID>1357</TicketID><TimeUnit>0</TimeUnit><To>vetrunov@chsu.ru</To></Article><Article><ArticleID>7022</ArticleID><ArticleNumber>4</ArticleNumber><Attachment><Content>CjwhRE9DVFlQRSBodG1sIFBVQkxJQyAiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25h
    bC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9u
    YWwuZHRkIj4KPGh0bWw+CjxoZWFkPgogICAgPG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBl
    IiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLTgiPgogICAgPHN0eWxlIHR5cGU9InRl
    eHQvY3NzIj4KICAgIGJvZHkgewogICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7CiAgICAg
    ICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lOwogICAgICAgIG1hcmdpbjogMHB4Owog
    ICAgICAgIHBhZGRpbmc6IDBweDsKICAgIH0KCiAgICB0YWJsZSB0ZCB7CiAgICAgICAgYm9yZGVy
    LWNvbGxhcHNlOiBjb2xsYXBzZTsKICAgIH0KCiAgICAjYmFja2dyb3VuZFRhYmxlIHsKICAgICAg
    ICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgcGFk
    ZGluZzogMDsKICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OwogICAgfQoKICAgIGgxLCBo
    MiwgaDMsIGg0LCBoNSwgaDYgewogICAgICAgIGNvbG9yOiMyMDIwMjA7CiAgICAgICAgZGlzcGxh
    eTpibG9jazsKICAgICAgICBmb250LWZhbWlseTpBcmlhbDsKICAgICAgICBmb250LXdlaWdodDpi
    b2xkOwogICAgICAgIGxpbmUtaGVpZ2h0OjEwMCU7CiAgICAgICAgbWFyZ2luLXRvcDowOwogICAg
    ICAgIG1hcmdpbi1yaWdodDowOwogICAgICAgIG1hcmdpbi1ib3R0b206NXB4OwogICAgICAgIG1h
    cmdpbi1sZWZ0OjA7CiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0OwogICAgfQoKICAgIGgxIHsKICAg
    ICAgICBmb250LXNpemU6IDM0cHg7CiAgICB9CgogICAgaDIsIGgzLCBoNCwgaDUsIGg2IHsKICAg
    ICAgICBtYXJnaW4tdG9wOiA1cHg7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OwogICAgfQoK
    ICAgIGgyIHsKICAgICAgICBmb250LXNpemU6IDI4cHg7CiAgICB9CgogICAgaDMgewogICAgICAg
    IGZvbnQtc2l6ZTogMjRweDsKICAgIH0KCiAgICBoNCB7CiAgICAgICAgZm9udC1zaXplOiAyMnB4
    OwogICAgfQoKICAgIGg1IHsKICAgICAgICBmb250LXNpemU6IDE4cHg7CiAgICB9CgogICAgaDYg
    ewogICAgICAgIGZvbnQtc2l6ZTogMTZweDsKICAgIH0KCiAgICAjdGVtcGxhdGVDb250YWluZXIs
    IC5ib2R5Q29udGVudHsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOwogICAgfQoK
    ICAgIC5ib2R5Q29udGVudCwgLmJvZHlDb250ZW50ICogewogICAgICAgIGNvbG9yOiAjNTA1MDUw
    OwogICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDsKICAgICAgICBmb250LXNpemU6IDEzcHg7CiAg
    ICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7CiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsKICAgIH0K
    CiAgICAuYm9keUNvbnRlbnQgZGl2IHsKICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4OwogICAg
    fQoKICAgIC5ib2R5Q29udGVudCBhOmxpbmssCiAgICAuYm9keUNvbnRlbnQgYTp2aXNpdGVkLAog
    ICAgLmZvb3RlckNvbnRlbnQgZGl2IGE6bGluaywKICAgIC5mb290ZXJDb250ZW50IGRpdiBhOnZp
    c2l0ZWQgewogICAgICAgIGNvbG9yOiAjZjkyOwogICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7
    CiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lCiAgICB9CgogICAgI3RlbXBsYXRlRm9vdGVy
    IHsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOwogICAgICAgIGJvcmRlci10b3A6
    IDBweDsKICAgIH0KCiAgICAuZm9vdGVyQ29udGVudCBkaXYgewogICAgICAgIGNvbG9yOiM3MDcw
    NzA7CiAgICAgICAgZm9udC1mYW1pbHk6QXJpYWw7CiAgICAgICAgZm9udC1zaXplOjEzcHg7CiAg
    ICAgICAgbGluZS1oZWlnaHQ6MTI1JTsKICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7CiAgICB9Cgog
    ICAgI2xpbmtzIHsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOwogICAgICAgIGJv
    cmRlcjogMDsKICAgIH0KCiAgICAjbGlua3MgZGl2IHsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50
    ZXI7CiAgICB9CgogICAgLkNhbGxGb3JBY3Rpb246YWN0aXZlLAogICAgLkNhbGxGb3JBY3Rpb246
    aG92ZXIgewogICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7CiAgICAgICAgYm9yZGVy
    LWNvbG9yOiAjOTk5OwogICAgfQoKICAgIC5ib2R5Q29udGVudCBhIHsKICAgICAgICBjb2xvcjog
    I2Y5MiAhaW1wb3J0YW50OwogICAgfQoKICAgIC5pbSB7CiAgICAgICAgY29sb3I6ICM1NTUgIWlt
    cG9ydGFudDsKICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KPGJvZHkgbGVmdG1hcmdpbj0iMCIg
    bWFyZ2lud2lkdGg9IjAiIHRvcG1hcmdpbj0iMCIgbWFyZ2luaGVpZ2h0PSIwIiBvZmZzZXQ9IjAi
    PgogICAgPGNlbnRlcj4KICAgICAgICA8dGFibGUgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIg
    Y2VsbHNwYWNpbmc9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJiYWNrZ3JvdW5k
    VGFibGUiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNGQUZBRkEiPgogICAgICAgICAgICA8dGJv
    ZHk+CiAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPSJj
    ZW50ZXIiIHZhbGlnbj0idG9wIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+CiAgICAg
    ICAgICAgICAgICAgICAgICAgIDx0YWJsZSBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxs
    c3BhY2luZz0iMCIgaWQ9InRlbXBsYXRlQ29udGFpbmVyIiBzdHlsZT0iYm9yZGVyOiAxcHggc29s
    aWQgI0RERERERDsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PgogICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgPHRkIGFsaWduPSJjZW50ZXIiIHZhbGlnbj0idG9wIj4KICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIw
    IiBjZWxsc3BhY2luZz0iMCIgaWQ9InRlbXBsYXRlQm9keSI+CiAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PgogICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICA8dGQgdmFsaWduPSJ0b3AiIGNsYXNzPSJib2R5Q29udGVu
    dCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgPGgxIHN0eWxlPSJiYWNrZ3JvdW5kOiAjMzMzMzMzOyBib3JkZXItYm90dG9tOiAxMHB4IHNv
    bGlkICNGRjk5MjI7IHBhZGRpbmc6IDIwcHg7IGxpbmUtaGVpZ2h0OiAxMzAlOyBjb2xvcjogIzk5
    OTsgbWFyZ2luOiAwcHg7IGZvbnQtc2l6ZTogMjBweDsiPgogICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbVGlja2V0IzIwMjIwMjI4MDEw
    MDAwMzVdIFRpY2tldCBOb3RlOiDQotC10YHRgiDRg9GB0L/QtdGI0LXQvQogICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+CiAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdmFsaWduPSJ0b3AiIGNs
    YXNzPSJib2R5Q29udGVudCIgc3R5bGU9ImJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyBi
    YWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBwYWRkaW5nOiAxNXB4OyBmb250LXNpemU6IDEzcHg7Ij4K
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQ
    l9C00YDQsNCy0YHRgtCy0YPQudGC0LUsINCS0LvQsNC00LjQvNC40YAsPGJyIC8+PGJyIC8+0JLQ
    sNC00LjQvCDQnNCw0YDQutC10LvQvtCyJm5ic3A7INC/0LjRiNC10YI6PGJyIC8+PGRpdiB0eXBl
    PSJjaXRlIiBzdHlsZT0iYmFja2dyb3VuZDogI2Y1ZjVmNTsgYm9yZGVyOiAwcHggIWltcG9ydGFu
    dDsgY29sb3I6ICM1NTU7IG1hcmdpbjogMTBweCAwcHggMHB4IDBweDsgcGFkZGluZzogMTBweDsi
    PjEyMzwvZGl2PjxiciAvPjxiciAvPtC/0L7QtNGA0L7QsdC90L7RgdGC0Lgg0LzQvtC20L3QviDQ
    v9C+0LvRg9GH0LjRgtGMINC/0L4g0LDQtNGA0LXRgdGDOjxiciAvPjxhIGhyZWY9Imh0dHA6Ly9v
    dHJzLmNoc3UucnUvL2luZGV4LnBsP0FjdGlvbj1BZ2VudFRpY2tldFpvb207VGlja2V0SUQ9MTM1
    NyIgdGl0bGU9Imh0dHA6Ly9vdHJzLmNoc3UucnUvL2luZGV4LnBsP0FjdGlvbj1BZ2VudFRpY2tl
    dFpvb207VGlja2V0SUQ9MTM1NyI+aHR0cDovL290cnMuY2hzdS5ydS8vaW5kZXgucGw/QWN0aW9u
    PUFnZW50VGlja2V0Wm9vbTtUaWNrZXRJRD0xMzU3PC9hPjxiciAvPtC40LvQuDxiciAvPjxhIGhy
    ZWY9Imh0dHBzOi8vZHcuY2hzdS5ydS9BcHBsaWNhdGlvbi9PVFJTcGFnZXMvV29ya2VyLmFzcHgi
    IHRhcmdldD0iX2JsYW5rIj7QvdCwINC60L7RgNC/0L7RgNCw0YLQuNCy0L3QvtC8INC/0L7RgNGC
    0LDQu9C1PC9hPjxiciAvPjxiciAvPi0tIE9UUlMgTm90aWZpY2F0aW9ucwogICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PgogICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPgogICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4KICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgPHRkIGFsaWduPSJjZW50ZXIiIHZhbGlnbj0idG9wIj4KICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBib3JkZXI9IjAiIGNlbGxwYWRkaW5n
    PSIxMCIgY2VsbHNwYWNpbmc9IjAiIGlkPSJ0ZW1wbGF0ZUZvb3RlciI+CiAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PgogICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+CiAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdmFsaWduPSJ0b3AiIGNsYXNzPSJmb290
    ZXJDb250ZW50Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    ICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
    PC90cj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5
    PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT4KICAgICAg
    ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAg
    ICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT4KICAg
    ICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGJy
    IC8+CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgIDwvdHI+CiAgICAg
    ICAgICAgIDwvdGJvZHk+CiAgICAgICAgPC90YWJsZT4KICAgIDwvY2VudGVyPgo8L2JvZHk+Cgo8
    L2h0bWw+Cg==
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf-8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>6049</FilesizeRaw></Attachment><Bcc /><Body>
       [Ticket#2022022801000035] Ticket Note: Тест успешен   
    
      Здравствуйте, Владимир,
    
    Вадим Маркелов  пишет:
    &gt; 123
    
    
    подробности можно получить по адресу:
    [1]http://otrs.chsu.ru//index.pl?Action=AgentTicketZoom;TicketID=1357
    или
    [2]на корпоративном портале
    
    -- OTRS Notifications   
    
        
    
    
    [1] http://otrs.chsu.ru//index.pl?Action=AgentTicketZoom;TicketID=1357
    [2] https://dw.chsu.ru/Application/OTRSpages/Worker.aspx
    </Body><Cc /><ChangeBy>15</ChangeBy><ChangeTime>2022-02-28 10:39:57</ChangeTime><Charset>utf-8</Charset><CommunicationChannelID>1</CommunicationChannelID><ContentCharset>utf-8</ContentCharset><ContentType>text/plain; charset=utf-8</ContentType><CreateBy>15</CreateBy><CreateTime>2022-02-28 10:39:57</CreateTime><From>ЧГУ &lt;otrs@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1646033997</IncomingTime><IsVisibleForCustomer>0</IsVisibleForCustomer><MessageID>&lt;1646033997.389046.553312244@otrs.chsu.ru&gt;</MessageID><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>system</SenderType><SenderTypeID>2</SenderTypeID><Subject>[Ticket#2022022801000035] Ticket Note: Тест успешен</Subject><TicketID>1357</TicketID><TimeUnit>0</TimeUnit><To>vetrunov@chsu.ru</To></Article><ChangeBy>15</ChangeBy><Changed>2022-02-28 10:39:56</Changed><CreateBy>3</CreateBy><Created>2022-02-28 09:49:37</Created><CustomerID>ЧГУ</CustomerID><CustomerUserID>vetrunov</CustomerUserID><DynamicField><Name>EndAdversment</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementActivityID</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementProcessID</Name><Value /></DynamicField><DynamicField><Name>StartAdversment</Name><Value /></DynamicField><EscalationResponseTime>0</EscalationResponseTime><EscalationSolutionTime>0</EscalationSolutionTime><EscalationTime>0</EscalationTime><EscalationUpdateTime>0</EscalationUpdateTime><GroupID>8</GroupID><Lock>unlock</Lock><LockID>1</LockID><Owner>vgmarkelov</Owner><OwnerID>15</OwnerID><Priority>3 normal</Priority><PriorityID>3</PriorityID><Queue>УИТ::Обслуживание оргтехники::Ремонт компьютерной техники</Queue><QueueID>14</QueueID><RealTillTimeNotUsed>0</RealTillTimeNotUsed><Responsible>otrs-admin</Responsible><ResponsibleID>1</ResponsibleID><SLAID /><Service>SharePointWC</Service><ServiceID>2</ServiceID><State>closed successful</State><StateID>2</StateID><StateType>closed</StateType><TicketID>1357</TicketID><TicketNumber>2022022801000035</TicketNumber><TimeUnit>0</TimeUnit><Title>Ремонт компьютерной техники (кроме принтеров)</Title><Type>Unclassified</Type><TypeID>1</TypeID><UnlockTimeout>1646033996</UnlockTimeout><UntilTime>0</UntilTime></Ticket><Ticket><Age>110579290</Age><ArchiveFlag>n</ArchiveFlag><Article><ArticleID>25</ArticleID><ArticleNumber>1</ArticleNumber><Attachment><Content>PCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBl
    IiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiLz48L2hlYWQ+PGJvZHkgc3R5bGU9
    ImZvbnQtZmFtaWx5OkdlbmV2YSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXpl
    OiAxMnB4OyI+VGVzdCB0byBjcmVhdGUgbmV3IHRpY2tldCBmb3IgZXhhbXBsZTwvYm9keT48L2h0
    bWw+
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf-8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>231</FilesizeRaw></Attachment><Bcc /><Body>Test to create new ticket for example</Body><Cc /><ChangeBy>1</ChangeBy><ChangeTime>2019-03-13 13:26:43</ChangeTime><Charset>utf-8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf-8</ContentCharset><ContentType>text/plain; charset=utf-8</ContentType><CreateBy>1</CreateBy><CreateTime>2019-03-13 13:26:43</CreateTime><From>"vetrunov" &lt;vetrunov@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1552483603</IncomingTime><IsVisibleForCustomer>1</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>customer</SenderType><SenderTypeID>3</SenderTypeID><Subject>Test</Subject><TicketID>10</TicketID><TimeUnit>0</TimeUnit><To>УИТ::Обслуживане оргтехники::Заправка картриджа</To></Article><Article><ArticleID>27</ArticleID><ArticleNumber>2</ArticleNumber><Attachment><Content>PCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBl
    IiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiLz48L2hlYWQ+PGJvZHkgc3R5bGU9
    ImZvbnQtZmFtaWx5OkdlbmV2YSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXpl
    OiAxMnB4OyI+cmUgdGVzdDwvYm9keT48L2h0bWw+
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf-8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>201</FilesizeRaw></Attachment><Bcc /><Body>re test</Body><Cc /><ChangeBy>1</ChangeBy><ChangeTime>2019-03-13 14:31:57</ChangeTime><Charset>utf-8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf-8</ContentCharset><ContentType>text/plain; charset=utf-8</ContentType><CreateBy>1</CreateBy><CreateTime>2019-03-13 14:31:57</CreateTime><From>vetrunov &lt;vetrunov@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1552487517</IncomingTime><IsVisibleForCustomer>1</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>customer</SenderType><SenderTypeID>3</SenderTypeID><Subject>Re: Test</Subject><TicketID>10</TicketID><TimeUnit>0</TimeUnit><To /></Article><Article><ArticleID>37</ArticleID><ArticleNumber>3</ArticleNumber><Bcc /><Body>проверка ответов</Body><Cc /><ChangeBy>3</ChangeBy><ChangeTime>2019-03-15 10:46:22</ChangeTime><Charset>utf8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf8</ContentCharset><ContentType>text/plain; charset=utf8</ContentType><CreateBy>3</CreateBy><CreateTime>2019-03-15 10:46:22</CreateTime><From>vetrunov &lt;vetrunov@chsu.ru&gt;</From><InReplyTo /><IncomingTime>1552646782</IncomingTime><IsVisibleForCustomer>1</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>agent</SenderType><SenderTypeID>1</SenderTypeID><Subject>Re:Re: Test</Subject><TicketID>10</TicketID><TimeUnit>0</TimeUnit><To /></Article><Article><ArticleID>50</ArticleID><ArticleNumber>4</ArticleNumber><Attachment><Content>PCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBl
    IiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiLz48L2hlYWQ+PGJvZHkgc3R5bGU9
    ImZvbnQtZmFtaWx5OkdlbmV2YSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXpl
    OiAxMnB4OyI+0KLQtdGB0YIg0LfQsNCy0LXRgNGI0LXQvSDRg9GB0L/QtdGI0L3QviE8L2JvZHk+
    PC9odG1sPg==
    </Content><ContentAlternative /><ContentID /><ContentType>text/html; charset="utf-8"</ContentType><Disposition>inline</Disposition><FileID>1</FileID><Filename>file-2</Filename><FilesizeRaw>235</FilesizeRaw></Attachment><Bcc /><Body>Тест завершен успешно!</Body><Cc /><ChangeBy>1</ChangeBy><ChangeTime>2019-03-18 11:47:33</ChangeTime><Charset>utf-8</Charset><CommunicationChannelID>3</CommunicationChannelID><ContentCharset>utf-8</ContentCharset><ContentType>text/plain; charset=utf-8</ContentType><CreateBy>1</CreateBy><CreateTime>2019-03-18 11:47:33</CreateTime><From>"Admin OTRS" &lt;otrs-admin&gt;</From><InReplyTo /><IncomingTime>1552909653</IncomingTime><IsVisibleForCustomer>0</IsVisibleForCustomer><MessageID /><MimeType>text/plain</MimeType><References /><ReplyTo /><SenderType>agent</SenderType><SenderTypeID>1</SenderTypeID><Subject>Тест завершен успешно!</Subject><TicketID>10</TicketID><TimeUnit>0</TimeUnit><To /></Article><ChangeBy>1</ChangeBy><Changed>2019-03-18 11:47:33</Changed><CreateBy>1</CreateBy><Created>2019-03-13 13:26:43</Created><CustomerID>ОРиСПО</CustomerID><CustomerUserID>vetrunov</CustomerUserID><DynamicField><Name>EndAdversment</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementActivityID</Name><Value /></DynamicField><DynamicField><Name>ProcessManagementProcessID</Name><Value /></DynamicField><DynamicField><Name>StartAdversment</Name><Value /></DynamicField><EscalationResponseTime>0</EscalationResponseTime><EscalationSolutionTime>0</EscalationSolutionTime><EscalationTime>0</EscalationTime><EscalationUpdateTime>0</EscalationUpdateTime><GroupID>1</GroupID><Lock>unlock</Lock><LockID>1</LockID><Owner>otrs-admin</Owner><OwnerID>1</OwnerID><Priority>3 normal</Priority><PriorityID>3</PriorityID><Queue>УИТ::Обслуживание оргтехники::Заправка картриджа</Queue><QueueID>7</QueueID><RealTillTimeNotUsed>0</RealTillTimeNotUsed><Responsible>otrs-admin</Responsible><ResponsibleID>1</ResponsibleID><SLAID /><Service>SharePointWC</Service><ServiceID>2</ServiceID><State>closed successful</State><StateID>2</StateID><StateType>closed</StateType><TicketID>10</TicketID><TicketNumber>2019031301000013</TicketNumber><TimeUnit>0</TimeUnit><Title>Test</Title><Type>Unclassified</Type><TypeID>1</TypeID><UnlockTimeout>1552909653</UnlockTimeout><UntilTime>0</UntilTime></Ticket></TicketGetResponse></soap:Body></soap:Envelope>`),
            headers:headers,
            ok:true,
            redirected:false,
            status:200,
            statusText:'Ok',
            type:'default',
            url:'testURL',
            clone:()=>{return mock3Response},
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

const mock1Request = `<?xml version="1.0" encoding="utf-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tic="http://www.otrs.org/TicketConnector/">
            <soapenv:Header/>
            
        <soapenv:Body>
            <TicketGet>
            <tic:SessionID>Ot3Pm6ztHowDXWyk2DFVO412AzKCCYor</tic:SessionID>
            <tic:AllArticles>true</tic:AllArticles>
            <tic:DynamicFields>true</tic:DynamicFields>
            <tic:HTMLBodyAsAttachment>true</tic:HTMLBodyAsAttachment>
            <tic:GetAttachmentContents>true</tic:GetAttachmentContents>
            <tic:Attachments>true</tic:Attachments>
            <tic:TicketID>1355</tic:TicketID>
        </TicketGet>
        </soapenv:Body>
        
        </soapenv:Envelope>
        `

const mock3Request = `<?xml version="1.0" encoding="utf-8"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tic="http://www.otrs.org/TicketConnector/">
            <soapenv:Header/>
            
        <soapenv:Body>
            <TicketGet>
            <tic:SessionID>upZtKD0601Qhl5kYjSMrdioB87QwpBFN</tic:SessionID>
            <tic:AllArticles>true</tic:AllArticles>
            <tic:DynamicFields>true</tic:DynamicFields>
            <tic:HTMLBodyAsAttachment>true</tic:HTMLBodyAsAttachment>
            <tic:GetAttachmentContents>true</tic:GetAttachmentContents>
            <tic:Attachments>true</tic:Attachments>
            <tic:TicketID>1355</tic:TicketID>
            <tic:TicketID>1357</tic:TicketID>
            <tic:TicketID>10</tic:TicketID>
        </TicketGet>
        </soapenv:Body>
        
        </soapenv:Envelope>
        `

describe('OTRSTicketGet',() => {
    test('only one',() => {
        global.fetch = jest.fn(()=>Promise.resolve(mock1Response))
        TicketGet.URL = 'TestUrl'
        const tg = new TicketGet()
        const tc = tg.TicketConditions()
        tc.SessionID='Ot3Pm6ztHowDXWyk2DFVO412AzKCCYor'
        tc.AllArticles=true
        tc.DynamicFields = true
        tc.HTMLBodyAsAttachment = true
        tc.GetAttachmentContents = true
        tc.Attachments = true
        tc.TicketID = 1355
        tg.GetTickets().then((t) => {           
            expect(global.fetch).toHaveBeenCalledWith("TestUrl", {"body": mock1Request, "method": "POST", "mode": "cors"})
            const tt = t as ITicket
            expect(tt.TicketID).toBe(1355)
        })
    })
    test('tree tickets',() => {
        global.fetch = jest.fn(()=>Promise.resolve(mock3Response))
        TicketGet.URL = 'TestUrl'
        const tg = new TicketGet()
        const tc = tg.TicketConditions()
        tc.SessionID='upZtKD0601Qhl5kYjSMrdioB87QwpBFN'
        tc.AllArticles=true
        tc.DynamicFields = true
        tc.HTMLBodyAsAttachment = true
        tc.GetAttachmentContents = true
        tc.Attachments = true
        tc.TicketID = [1355, 1357, 10]
        tg.GetTickets().then((t) => {
            expect(global.fetch).toHaveBeenCalledWith("TestUrl", {"body": mock3Request, "method": "POST", "mode": "cors"})
            const tt = t as ITicket[]
            expect(tt.length).toBe(3)
        })
    })
})