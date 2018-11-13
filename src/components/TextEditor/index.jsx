import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MonacoEditor from 'react-monaco-editor'
import Card from '@material-ui/core/Card'

const EditorWrapper = styled.div`
  padding: 1rem 0;
`

export default class TextEditor extends React.Component {
  render () {
    return (
      <Card raised={this.props.raised}>
        <EditorWrapper>
          <MonacoEditor
            width="100%"
            height="600px"
            language="sql"
            theme="vs-light"
          />
        </EditorWrapper>
      </Card>
    )
  }
}

TextEditor.defaultProps = {
  raised: false
}

TextEditor.propTypes = {
  raised: PropTypes.bool
}
