import React from 'react'

import SearchField from '../../components/SearchField'

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.selectedPersonal = {}
  }

  render () {
    return (
      <div>
        <SearchField>

        </SearchField>
      </div>
    )
  }
}

export default MockChange
