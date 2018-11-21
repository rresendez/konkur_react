import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/sql'
import 'brace/snippets/sql'
import 'brace/theme/github'
import 'brace/ext/language_tools'

const EditorWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0;
  width: 100%;
`

export default class TextEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    if (props.defaultValue.length > 0) {
      this.state.editorValue = props.defaultValue
    } else {
      this.state.editorValue = ''
    }
  }

  handleRef = (refEditor) => {
    this.editorRef = refEditor
    this.props.handleRef(refEditor)
  }

  handleOnChange = (value, event) => {
    this.setState({
      editorValue: value
    })
  }

  render () {
    return (
      <Card raised={this.props.raised}>
        <EditorWrapper>
          <AceEditor
            ref={this.handleRef}
            mode="sql"
            theme="github"
            name="CARD_BUILDER_EDITOR"
            editorProps={{
              $blockScrolling: true
            }}
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true}
            wrapEnabled={true}
            width="100%"
            height="37.5rem"
            fontSize={14}
            tabSize={2}
            value={this.state.editorValue}
            defaultValue={this.props.defaultValue}
            onChange={this.handleOnChange}
          />
        </EditorWrapper>
      </Card>
    )
  }
}

TextEditor.defaultProps = {
  raised: false,
  defaultValue: ''
}

TextEditor.propTypes = {
  raised: PropTypes.bool,
  defaultValue: PropTypes.string
}
