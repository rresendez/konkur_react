import React from 'react'

import styled from 'styled-components'

const MainWrapper = styled.div`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  background-color: #333;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 480px;
  padding: 0 40px;
}

.breadcrumb {
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  margin: auto;
  text-align: center;
  top: 50%;
  width: 100%;
  height: 57px;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  box-shadow: 0 1px 1px black, 0 4px 14px rgba(0, 0, 0, 0.7);
  z-index: 1;
  background-color: #ddd;
  font-size: 14px;
}

.breadcrumb a {
  position: relative;
  display: flex;
  flex-grow: 1;
  text-decoration: none;
  margin: auto;
  height: 100%;
  padding-left: 38px;
  padding-right: 0;
  color: #666;
}

.breadcrumb a:first-child {
  padding-left: 15.2px;
}

.breadcrumb a:last-child {
  padding-right: 15.2px;
}

.breadcrumb a:after {
  content: "";
  position: absolute;
  display: inline-block;
  width: 57px;
  height: 57px;
  top: 0;
  right: -28.1481481481px;
  background-color: #ddd;
  border-top-right-radius: 5px;
  -webkit-transform: scale(0.707) rotate(45deg);
          transform: scale(0.707) rotate(45deg);
  box-shadow: 1px -1px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.breadcrumb a:last-child:after {
  content: none;
}

.breadcrumb__inner {
  display: flex;
  flex-direction: column;
  margin: auto;
  z-index: 2;
}

.breadcrumb__title {
  font-weight: bold;
}

.breadcrumb a.active, .breadcrumb a:hover {
  background: rgba(44,112,179,1);
  color: white;
}

.breadcrumb a.active:after, .breadcrumb a:hover:after {
  background: rgba(44,112,179,1);
  color: white;
}

@media all and (max-width: 1000px) {
  .breadcrumb {
    font-size: 12px;
  }
}
@media all and (max-width: 710px) {
  .breadcrumb__desc {
    font-size: 11px;
  }

  .breadcrumb {
    height: 38px;
  }

  .breadcrumb a {
    padding-left: 25.3333333333px;
  }

  .breadcrumb a:after {
    content: "";
    width: 38px;
    height: 38px;
    right: -19px;
    -webkit-transform: scale(0.707) rotate(45deg);
            transform: scale(0.707) rotate(45deg);
  }
}

`

class Crumbs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <MainWrapper>
        <div class="container">
          <div class="breadcrumb">
            <a href="#">
              <span class="breadcrumb__inner">
                <span class="breadcrumb__desc">Mathew Jakson</span>
              </span>
            </a>
            <a href="#">
              <span class="breadcrumb__inner">
                <span class="breadcrumb__desc">Joel McDonald</span>
              </span>
            </a>
            <a href="#">
              <span class="breadcrumb__inner">
                <span class="breadcrumb__desc">Rigoberto Resendez</span>
              </span>
            </a>
            <a href="#">
              <span class="breadcrumb__inner">
                <span class="breadcrumb__desc">David Lung</span>
              </span>
            </a>
          </div>
        </div>
      </MainWrapper>
    )
  }
}

export default Crumbs
