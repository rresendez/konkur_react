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
  lines2: [
    {
      department: 'D6 3623',
      name: 'Batteries'
    },
    {
      department: 'D6 3626',
      name: 'Cameras & Camcoders'
    },
    {
      department: 'D6 3626',
      name: 'Photo Media'
    },
    {
      department: 'D6 3626',
      name: 'Camera Accessories'
    },
    {
      department: 'D6 3626',
      name: 'Photo Frames'
    },
    {
      department: 'D6 3626',
      name: 'Enviro Fees'
    }
  ]
}
let titles = ['deparments', 'categories', 'sub-categories', 'finelines']
let next = ['categories', 'sub-categories', 'finelines', '']
let bottomText = []
let pleaseDrop = []
if (mock.lines.length > 0) {
  titles.map((title, idx) => {
    bottomText[idx] = mock.lines.length.toString() + '/50 ' + title + ' assigned'
    pleaseDrop[idx] = 'Drag and drop a ' + title.slice(0, title.length - 1) +
      ' to view ' + next[idx] + ' assigned'
  })
}

const Background = styled.div`
  
  color: rgba(222,235,247,1);
  background-color: rgba(222,235,247,1);
`
const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 1rem;
  background-color: rgba(222,235,247,1);
  width: max-content;
  @media (max-width: 768px){
    grid-template-columns: repeat(1, auto);
     grid-template-rows: repeat(6, auto);
  }
`
const HeaderWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1;
  grid-row-end: 1;
  padding-bottom: 1rem;
  width: 100vw;
  background-color: rgba(222,235,247,1);
   @media (max-width: 768px){
     display: none ;
   }
`
const LeftUp = styled.div`
  grid-column: 1/2;
  grid-row: 2;
  grid-row-end: 2;
  margin-left: 1rem;
  @media (max-width: 768px){
    margin: 1rem;
  }
`
const LeftDown = styled.div`
  grid-column: 1/2;
  grid-row: 3;
  grid-row-end: 3;
  margin-left: 1rem;
  margin-top: 1rem;
  @media (max-width: 768px){
    margin: 1rem;
    grid-column: 1/2;
    grid-row: 4;
    grid-row-end: 4;
  }
`
const RightUp = styled.div`
  grid-column: 2/2;
  grid-row: 2;
  grid-row-end: 2;
  margin-right: 1rem;
    @media (max-width: 768px){
    margin: 1rem;
    grid-column: 1/2;
    grid-row: 3;
    grid-row-end: 3;
  }
  
`
const RightDown = styled.div`
  grid-column: 2/2;
  grid-row: 3;
  grid-row-end: 3;
  margin-top: 1rem;
  margin-right: 1rem;
  @media (max-width: 768px){
    margin: 1rem;
    margin-bottom: 0;
    grid-column: 1/2;
    grid-row: 5;
    grid-row-end: 5;
  }
`
class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: ['ready', 'empty', 'empty', 'empty'],
      disabled: [false, false, true, true],
      loading: [false, false, false, true]
    }
  }
  handleSelectedLine = (line) => {
    console.log('this is the state on parent')
    console.log(line)
    this.setState({ status: ['ready', 'ready', 'empty', 'empty'],
      disabled: [false, false, false, true] }
    )
  }

  render () {
    return (
      <MainWrapper>
        <HeaderWrapper>
          <SelectionProduct
            togleValue={0}
            selects={mock.selects}
          ></SelectionProduct>
        </HeaderWrapper>
        <LeftUp>
          <LineDrop
            lines={mock.lines}
            title={titles[0]}
            bottomText={bottomText[0]}
            status={this.state.status[0]}
            pleaseDrop={pleaseDrop[0]}
            disabled={this.state.disabled[0]}
            handleSelectedLine={this.handleSelectedLine}
            loading={this.state.loading[0]}
          >
          </LineDrop>
        </LeftUp>
        <RightUp>
          <LineDrop
            lines={mock.lines2}
            title={titles[1]}
            bottomText={bottomText[1]}
            status={this.state.status[1]}
            pleaseDrop={pleaseDrop[0]}
            disabled={this.state.disabled[1]}
            handleSelectedLine={this.handleSelectedLine}
            loading={this.state.loading[1]}
          >
          </LineDrop>
        </RightUp>
        <LeftDown>
          <LineDrop
            lines={mock.lines}
            title={titles[2]}
            bottomText={bottomText[2]}
            status={this.state.status[2]}
            pleaseDrop={pleaseDrop[1]}
            disabled={this.state.disabled[2]}
            handleSelectedLine={this.handleSelectedLine}
            loading={this.state.loading[2]}
          >
          </LineDrop>
        </LeftDown>
        <RightDown>
          <LineDrop
            lines={mock.lines}
            title={titles[3]}
            bottomText={''}
            status={this.state.status[3]}
            pleaseDrop={pleaseDrop[2]}
            disabled={this.state.disabled[3]}
            handleSelectedLine={this.handleSelectedLine}
            loading={this.state.loading[3]}
          >
          </LineDrop>
        </RightDown>
      </MainWrapper>
    )
  }
}

export default MockChange
