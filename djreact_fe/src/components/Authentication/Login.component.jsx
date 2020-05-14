import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CustomForm } from './Login.styles'

import {
  FormControl,
  Paper,
  Button,
  ButtonGroup,
  TextField,
} from '@material-ui/core'

import { axiosFetchCreateAsync } from '../../redux/reducers/leads/leads.action'

class Login extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }
  handleFormSubmit(evt) {
    evt.preventDefault()
    this.props.submitForm({ ...this.state })
    this.setState({ name: '', email: '', message: '' })
  }
  handleInputChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  render() {
    return (
      <CustomForm onSubmit={this.handleFormSubmit.bind(this)}>
        <Paper style={{ width: '25rem', padding: '2rem' }}>
          <FormControl fullWidth={true} margin="dense">
            <TextField
              id="name"
              label="Name"
              margin="dense"
              name="name"
              type="text"
              required={true}
              onChange={this.handleInputChange.bind(this)}
              value={this.state.name}
            />
            <TextField
              id="email"
              label="Email"
              margin="dense"
              name="email"
              type="email"
              required={true}
              onChange={this.handleInputChange.bind(this)}
              value={this.state.email}
            />
            <TextField
              multiline={true}
              rows="3"
              id="message"
              label="Message"
              type="text"
              margin="dense"
              name="message"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.message}
            />
          </FormControl>
          <ButtonGroup>
            <Button color="primary" variant="contained" type="submit">
              Save
            </Button>
          </ButtonGroup>
        </Paper>
      </CustomForm>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitForm: (data) => dispatch(axiosFetchCreateAsync(data)),
})

export default connect(null, mapDispatchToProps)(Login)
