//import * as React from 'react'
//import { render } from '@testing-library/react'
import { Soap } from '../src'

import 'jest-canvas-mock'
import { ValuePart } from '../src/Soap/SoapTypes'
describe('Soap', () => {
  test('ticValues without wrap', () => {
    expect(Soap.ticValue('test', 1, true)).toBe('<tic:test>1</tic:test>')
  })
  test('ticValues with wrap', () => {
    expect(Soap.ticValue('test', 1)).toBe(`
            <tic:test>1</tic:test>`)
  })
  test('stringfybody', () => {
    let body: ValuePart = {
      PartName: 'SessionCreate',
      Values: {
        test: 'test',
        testN: 1,
        testU: undefined,
        testF: '',
        testV: () => {
          console.log('boom')
        },
        testA: { b: 'l', c: true },
      },
    }
    let header: ValuePart = {
      PartName: 'SessionCreate',
      Values: {
        test: 'test',
        testN: 1,
        testU: undefined,
        testF: '',
        testV: () => {
          console.log('boom')
        },
        testA: { b: 'l', c: true },
      },
    }
    Soap.stringfy(header)
    expect(Soap.stringfy(undefined, body)).toBe(`<?xml version=\"1.0\" encoding=\"utf-8\"?>
        <soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tic=\"http://www.otrs.org/TicketConnector/\">
            <soapenv:Header/>
            
        <soapenv:Body>
            <SessionCreate>
            <tic:test>test</tic:test>
            <tic:testN>1</tic:testN>
            <tic:testA>
            <tic:b>l</tic:b>
            <tic:c>true</tic:c>
            </tic:testA>
        </SessionCreate>
        </soapenv:Body>
        
        </soapenv:Envelope>
        `)
  })
  test('stringfyheader', () => {
    let body: ValuePart = {
      PartName: 'SessionCreate',
      Values: {
        test: 'test',
        testN: 1,
        testU: undefined,
        testF: '',
        testV: () => {
          console.log('boom')
        },
        testA: { b: 'l', c: true },
      },
    }
    Soap.stringfy(undefined, body)
    let header: ValuePart = {
      PartName: 'SessionCreate',
      Values: {
        test: 'test',
        testN: 1,
        testU: undefined,
        testF: '',
        testV: () => {
          console.log('boom')
        },
        testA: { b: 'l', c: true },
      },
    }
    expect(Soap.stringfy(header)).toBe(`<?xml version=\"1.0\" encoding=\"utf-8\"?>
        <soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tic=\"http://www.otrs.org/TicketConnector/\">
            
        <soapenv:Header>
            <SessionCreate>
            <tic:test>test</tic:test>
            <tic:testN>1</tic:testN>
            <tic:testA>
            <tic:b>l</tic:b>
            <tic:c>true</tic:c>
            </tic:testA>
        </SessionCreate>
        </soapenv:Header>
        
            <soapenv:Body/>
        </soapenv:Envelope>
        `)
  })
})

//expect.any(Soap.SetAnyBody({test:"test",testN:1}))
/**
  console.log = jest.fn();
    console.log("hello");
    //Soap.SetAnyBody({test:"test",testN:1, testU:undefined, testF:"", testV:()=>{console.log("boom")}, testA:{b:"l", c:true} });
    expect(console.log).toHaveBeenCalledWith('hello'); 
 
 */
