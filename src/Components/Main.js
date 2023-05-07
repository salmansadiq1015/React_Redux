import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

export default  class Main extends Component {
  

    render(){
        return (
            <CommonContext.Consumer >
                {
                    ({background, color})=>(
                        <h1 style={{background:background, color:color, position:'absolute', left:'0',bottom:'0', width:'100%'}}>Hey, this is main page!</h1>
                    )
                }
            </CommonContext.Consumer>
          )
    }
}
