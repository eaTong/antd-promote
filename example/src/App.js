import React, { Component } from 'react'
import 'antd/dist/antd.css'
import ExampleComponent from 'antd-promote'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
