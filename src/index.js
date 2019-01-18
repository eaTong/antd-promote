import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div>
        Example Component: {text}
        <Button>aa</Button>
      </div>
    )
  }
}
