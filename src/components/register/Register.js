import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state={
            email:''
        }
    }
    handleChangeInput
    render() {
        let {email} = this.state
      return (
         <div className="App-Register">
         <h1>Register</h1>
            <form>
                <input type="email" placeholder="Email" value={email}/>
                <input type="password" placeholder="Contraseña"/>
                <button type="summit">Crear</button>
            </form>
            <br/>
            <br/>
         </div> 
        
      );
    }
  }
  
  export default Register;
  