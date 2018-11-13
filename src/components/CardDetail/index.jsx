import React from 'react'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
// import PropTypes from 'prop-types'
import CardItem from '../CardItem'
import TextEditor from '../TextEditor'
import Icon from '../Icon'

import styles from './styles.module.css'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

export default class CardDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.name = ['Carlos Abbott', 'April Tucker']
  }

  render () {
    return (
      <div className={styles.cardDetailContainer}>
        <div className={styles.cardItemWrapper}>
          <CardItem />
          <div className={styles.cardTagWrapper}>
            <h4 className={styles.cardVisibleLabel}>Visible to:</h4>
            <Select
              multiple
              value={this.state.name}
              onChange={this.handleChange}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={this.state.name.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={styles.helpWrapper}>
            <h4 className={styles.helpLabel}>Note</h4>
            <ol className={styles.helpListWrapper}>
              <li className={styles.helpListItem}>
                Cards can be created with either Teradata or DSN2 source queries.
              </li>
              <li className={styles.helpListItem}>
                Not more than one source in a single card’s query.
              </li>
              <li className={styles.helpListItem}>
                Item number and Department number are mandatory fields in every query.
              </li>
              <li className={styles.helpListItem}>
                Data traffic peak timings: 1:00 pm to 3:00 pm daily.
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.editorWrapper}>
          <TextEditor />
        </div>
        <div className={styles.buttonWrapper}>
          <Button color="secondary">
            <Icon size="2">send</Icon>
          </Button>
        </div>
      </div>
    )
  }
}
