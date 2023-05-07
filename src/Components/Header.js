import React from 'react';
import { CommonContext } from './CommonContext';


export default function Header() {
  return (
    <div>
        <CommonContext.Consumer>
        {
            ({color,background})=> (
                <div>
                    <h1 style={{color:color, background:background}}>Header in Context Component</h1>
                </div>
            )
        }

     </CommonContext.Consumer>
    </div>
  )
}
