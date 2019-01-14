import React from 'react'

import SelectionProduct from '../../components/SelectionProduct'

const mock = {
  selects: [
    {
      name: 'Department'
    },
    {
      name: 'Categroy'
    },
    {
      name: 'Subcategory'
    },
    {
      name: 'Fine-Line'
    }

  ]
}
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
          selects={mock.selects}
        ></SelectionProduct>
      </div>
    )
  }
}

export default MockChange
