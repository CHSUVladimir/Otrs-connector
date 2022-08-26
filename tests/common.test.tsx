//import * as React from 'react'
//import { render } from '@testing-library/react'

import 'jest-canvas-mock'

const myBeverage = {
  delicious: true,
  sour: false,
}

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy()
  })

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy()
  })
})
