import React from 'react'
import CardItem from '../../components/CardItem'

const mock = {
  colors: [
    {
      id: 1,
      name: 'new category',
      color: 'rgba(193,193,193,1)'
    },
    {
      id: 2,
      name: 'demand',
      color: 'rgba(244,115,33,1)'
    },
    {
      id: 3,
      name: 'fulfillment',
      color: 'rgba(255,194,32,1)'
    },
    {
      id: 4,
      name: 'inventory',
      color: 'rgba(118,192,67,1)'
    }
  ]
}

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.colors = mock.colors.reverse()
    this.state.crud = 'create || update'
  }

  handleColors = (colors) => {
    this.setState({
      colors
    })
  }
  render () {
    return (
      <div>
        <div>
          <CardItem
            colors={this.state.colors}
            handleColors={this.handleColors}
            crud="create"
          >
          </CardItem>
        </div>
      </div>
    )
  }
}

export default MockChange
