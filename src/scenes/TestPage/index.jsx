import React from 'react'

import SelectionProduct from '../../components/SelectionProduct'

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.status = 'ready'
    this.state.disabled = false
    this.state.loading = false
    this.state.togleValue = 0
  }

  render () {
    return (
      <div>
        <SelectionProduct
          togleValue={this.state.togleValue}
        ></SelectionProduct>
      </div>
    )
  }
}

export default MockChange
