import React from 'react'
// import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import CardItem from '../CardItem'
import TextEditor from '../TextEditor'
import Icon from '../Icon'

import styles from './styles.module.css'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

function Transition (props) {
  return (<Slide direction="up" {...props} />)
}

const SelectedModified = withStyles({
  root: {
    maxWidth: '17rem',
    minWidth: '17rem'
  }
})(Select)

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

let id = 0
function createData (name, calories, fat, carbs, protein) {
  id += 1
  return { id, name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
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
          <div className={styles.helpWrapper}>
            <Paper elevation={1}>
              <div className={styles.helpContainer}>
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
            </Paper>
          </div>
          <div className={styles.cardItemWrapperItem}>
            <CardItem />
            <div className={styles.cardTagWrapper}>
              <h4 className={styles.cardVisibleLabel}>
                Visible to:
              </h4>
              <div className={styles.selectWrapper}>
                <SelectedModified
                  multiple
                  value={this.props.visibleToSelected}
                  onChange={this.props.handleOnChangeSelectedValues}
                  renderValue={selected => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {this.props.visibleToData.map(name => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={this.props.visibleToSelected.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </SelectedModified>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.editorWrapper}>
          <TextEditor
            handleRef={this.props.handleRefEditor}
            defaultValue={this.props.editorDefaultValue}
          />
        </div>
        <div className={styles.fabWrapper}>
          <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
            onClick={this.props.handleSendQuery}
          >
            <Icon size="2" color="white">send</Icon>
          </Button>
        </div>
        <Dialog
          fullScreen
          open={this.props.dialogSwitch}
          // onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            position="fixed"
            color="primary"
          >
            <Toolbar>
              <div className={styles.toolbarModalButtonsWrapper}>
                <IconButton
                  aria-label="close"
                  onClick={this.props.handleOnCloseResultModal}
                >
                  <Icon color="white" size="1.5">close</Icon>
                </IconButton>
                <IconButton
                  aria-label="save"
                  onClick={this.props.handleOnSaveCard}
                >
                  <Icon color="white" size="1.5">save</Icon>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <div className={styles.tableWrapper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>DEPT</TableCell>
                  <TableCell>item_nbr</TableCell>
                  <TableCell>CID</TableCell>
                  <TableCell>ITEM1_DESC</TableCell>
                  <TableCell>location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>{row.protein}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth={false}
            open={this.props.dialogSaveSwitch}
            aria-labelledby="confirmation-dialog-title"
          >
            <DialogTitle id="confirmation-dialog-title">Save this card</DialogTitle>
            <DialogContent>
              Do you want to save this card?
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleOnCancelSaveCard} color="primary">
                Cancel
              </Button>
              <Button onClick={this.props.handleOnConfirmSaveCard} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </Dialog>
      </div>
    )
  }
}
