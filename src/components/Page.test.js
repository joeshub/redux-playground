import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Page from './Page'

describe('<Page />', () => {

  it('renders header', () => {
    const page = shallow(<Page />)
    const header = <h1>Simple Redux</h1>
    expect(page.contains(header)).toEqual(true)
  })

  it('clicks button', () => {
    const onButtonClick = sinon.spy()
    const page = shallow(
      <button onClick={onButtonClick} />
    )
    page.find('button').simulate('click')
    expect(onButtonClick.calledOnce).toEqual(true)
  })

})
