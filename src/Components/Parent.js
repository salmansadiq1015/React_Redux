import React, { Component } from 'react';
import { CommonContext } from './CommonContext';
import Main from './Main';
import UpdateButton from './UpdateButton';
import Header from './Header';
import Footer from './Footer';

export default class Parent extends Component {

    constructor(){
         
        super();
    
        this.updateColor= (color)=>{
          this.setState({
           background: "red",
           color:color,
          })
        }
    
           this.state={
            background:"green",
            color:"red",
            updateColor:this.updateColor,
           }
          
      }
  

    render(){
        return (
            <CommonContext.Provider value={this.state} >
        <Header />
       <h1>Context API</h1>
       <Main />
       <UpdateButton /> 
       <Footer />
       </CommonContext.Provider>
          )
    }
}
