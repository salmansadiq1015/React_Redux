import React from 'react'
import { CommonContext } from './CommonContext'

export default function Footer() {
  return (
     <CommonContext.Consumer>
        {
            ({background, color})=> (
                <div>
                    <h1 style={{color:color, background:background}}>Header in Context Component</h1>
                </div>
            )
        }

     </CommonContext.Consumer>
    
  )
}
