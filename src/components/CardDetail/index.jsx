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
import Fab from '@material-ui/core/Fab'

import CardItem from '../CardItem'
import TextEditor from '../TextEditor'
import Icon from '../Icon'
import TableResultArrange from '../TableResultArrange'
import DragnDrop from '../DragnDrop'

import styles from './styles.module.css'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

function Transition (props) {
  return (<Slide direction="up" {...props} />)
}

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

const SelectedModified = withStyles({
  root: {
    maxWidth: '17rem',
    minWidth: '17rem'
  }
})(Select)

const NotePaper = withStyles({
  root: {
    height: '100%'
  }
})(Paper)

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

export default class CardDetail extends React.Component {
  renderSelectValue = (value) => value

  renderMultiSelectValue = (selected) => {
    const simpleValues = selected.map((value) => value.name)
    return simpleValues.join(', ')
  }

  render () {
    return (
      <div className={styles.cardDetailContainer}>
        <div className={styles.wrapperCardHelp}>
          <NotePaper elevation={1}>
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
          </NotePaper>
        </div>
        <div className={styles.wrapperCardOptions}>
          <div className={styles.cardOptionsContainer}>
            <div className={styles.cardOptionsItem}>
              <h4 className={styles.cardVisibleLabel}>
                Visible to:
              </h4>
              <div className={styles.selectWrapper}>
                <SelectedModified
                  multiple
                  value={this.props.selectedJobs}
                  onChange={this.props.handleOnChangeJobs}
                  renderValue={this.renderMultiSelectValue}
                  MenuProps={MenuProps}
                >
                  {this.props.jobs.map((name, idx) => (
                    <MenuItem key={name.name} value={name.name} data-item-id={name.id} data-item-idx={idx}>
                      <Checkbox
                        checked={
                          this.props.selectedJobs.findIndex(
                            (job) => job.name === name.name) === -1 ? 0 : 1
                        }
                      />
                      <ListItemText primary={name.name} name={name.id} />
                    </MenuItem>
                  ))}
                </SelectedModified>
              </div>
            </div>
            <div className={styles.cardOptionsItem}>
              <h4 className={styles.cardVisibleLabel}>
                Card priority:
              </h4>
              <div className={styles.selectWrapper}>
                <SelectedModified
                  value={this.props.selectedPriority.name}
                  renderValue={this.renderSelectValue}
                  onChange={this.props.handleOnChangePriority}
                  MenuProps={MenuProps}
                >
                  {this.props.priorities.map(name => (
                    <MenuItem key={name.name} value={name.name} data-item-id={name.id}>
                      <ListItemText primary={name.name} />
                    </MenuItem>
                  ))}
                </SelectedModified>
              </div>
            </div>
            <div className={styles.cardOptionsItem}>
              <h4 className={styles.cardVisibleLabel}>
                Schedule Time:
              </h4>
              <div className={styles.selectWrapper}>
                <SelectedModified
                  value={this.props.selectedSchedule.name}
                  renderValue={this.renderSelectValue}
                  onChange={this.props.handleOnChangeSchedule}
                  MenuProps={MenuProps}
                >
                  {this.props.schedules.map(name => (
                    <MenuItem key={name.name} value={name.name} data-item-id={name.id}>
                      <ListItemText primary={name.name} />
                    </MenuItem>
                  ))}
                </SelectedModified>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapperCardItem}>
          <CardItem
            crud={this.props.crud}

            cardSubComponent={this.props.cardSubComponent}
            handleOnChangeCardSubComponent={this.props.handleOnChangeCardSubComponent}

            cardTitle={this.props.cardTitle}
            handleOnChangeCardTitle={this.props.handleOnChangeCardTitle}

            cardDataLevel={this.props.cardDataLevel}
            handleOnChangeCardDataLevel={this.props.handleOnChangeCardDataLevel}

            colors={this.props.cardComponents}
            handleColors={this.handleColors}
            selectedCardComponent={this.props.selectedCardComponent}
            cardComponentColor={this.props.cardComponentColor}
            handleOnChangeCardComponent={this.props.handleOnChangeCardComponent}
            handleOnChangeCardComponentColor={this.props.handleOnChangeCardComponentColor}
            cardComponentColorCouldNotBeSaved={this.props.cardComponentColorCouldNotBeSaved}
            handleOnCloseEditable={this.props.handleOnCloseEditableCardItem}
          />
          {
            this.props.crud === 'update' && (<div className={styles.wrapperHowToButton}>
              <Fab
                color="secondary"
                aria-label="attach"
                onClick={this.props.handleHowtoOpen}
              >
                <Icon size="2" color="white">attach_file</Icon>
              </Fab>
            </div>)
          }
        </div>
        <div className={styles.wrapperEditor}>
          <TextEditor
            handleRef={this.props.handleRefEditor}
            defaultValue={this.props.editorDefaultValue}
          />
        </div>
        <div className={styles.fabWrapper}>
          <Fab
            color="secondary"
            aria-label="Add"
            onClick={this.props.handleSendQuery}
          >
            <Icon size="2" color="white">send</Icon>
          </Fab>
        </div>
        <Dialog
          fullScreen
          open={this.props.dialogSwitch}
          onClose={this.handleClose}
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
            <TableResultArrange
              columns={this.props.columns}
              rows={this.props.rows}
              handleOnChange={this.props.handleOnChangeTableArrangement}
            />
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
        <DragnDrop
          open={this.props.howToSwitch}
          handleOnClose={this.props.handleOnCloseDropzone}
          handleUpload={this.props.handleUploadDropzone}
          handleCleanAttachment={this.props.handleCleanAttachment}
          handleSaveAttachment={this.props.handleSaveAttachment}
          name={this.props.attachedName}
        />
      </div>
    )
  }
}
