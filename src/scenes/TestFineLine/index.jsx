import React from 'react'

import styled from 'styled-components'

import SelectionProduct from '../../components/SelectionProduct'
import LineDrop from '../../components/LineDrop'

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

  ],
  lines: [
    {
      department: 'D1',
      name: 'Candy'
    },
    {
      department: 'D2',
      name: 'Chocolate'
    },
    {
      department: 'D3',
      name: 'Auto'
    },
    {
      department: 'D4',
      name: 'Clothes'
    },
    {
      department: 'D5',
      name: 'Bath'
    },
    {
      department: 'D6',
      name: 'Wine'
    },
    {
      department: 'D7',
      name: 'Chips'
    },
    {
      department: 'D8',
      name: 'Frozen'
    },
    {
      department: 'D9',
      name: 'Pixa'
    },
    {
      department: 'D10',
      name: 'Computers'
    }
  ],
  lines2: []
}
let title = 'departments'
let bottomText = ''
if (mock.lines.length > 0) {
  bottomText = mock.lines.length.toString() + '/50 ' + title + ' assigned'
}
let next = 'categories'
let pleaseDrop = 'Drag and drop a ' + title.slice(0, title.length - 1) +
  ' to view ' + next + ' assigned'

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 1rem;
  background-color: rgba(222,235,247,1);
`
const HeaderWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1;
  grid-row-end: 1;
  padding-bottom: 1rem;
  background-color: rgba(222,235,247,1);
  width: 100vw;
`
const LeftUp = styled.div`
  grid-column: 1/2;
  grid-row: 2;
  grid-row-end: 2;
  padding-left: 1rem;
`
const RightUp = styled.div`
  grid-column: 2/2;
  grid-row: 2;
  grid-row-end: 2;
  padding-right: 1rem;
`
class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.status = ['ready', 'empty']
    this.state.disabled = false
    this.state.loading = false
    this.state.togleValue = 0
  }

  render () {
    return (
      <MainWrapper>
        <HeaderWrapper>
          <SelectionProduct
            togleValue={this.state.togleValue}
            selects={mock.selects}
          ></SelectionProduct>
        </HeaderWrapper>
        <LeftUp>
          <LineDrop
            lines={mock.lines}
            title={title}
            bottomText={bottomText}
            status={this.state.status[0]}
            pleaseDrop={pleaseDrop}
            disabled={this.state.disabled}
            handleSelectedLine={this.handleSelectedLine}
            loading={this.state.loading}
          >
          </LineDrop>
        </LeftUp>
        <RightUp>
          <LineDrop
            lines={mock.lines}
            title={title}
            bottomText={bottomText}
            status={this.state.status[1]}
            pleaseDrop={pleaseDrop}
            disabled={this.state.disabled}
            handleSelectedLine={this.handleSelectedLine}
            loading={this.state.loading}
          >
          </LineDrop>
        </RightUp>
      </MainWrapper>
    )
  }
}

export default MockChange
