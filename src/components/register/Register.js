import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state={
            'email':'',
            'password':''
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleSumit = this.handleSumit.bind(this)
    }
    handleChangeInput(e){
        let t = e.target
        let v = t.value
        let n = t.name
        this.setState({
            [n]: v
        })
        // console.log('change =>',t.name,t.value);
    }

    handleSumit(e){
        e.preventDefault()

        fetch('https://fondapi.devcharles.com/users',{
            method:'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': this.state.email,
                'password': this.state.password
            })
        }).then(res => res.json()).then(json =>{
            
            
            console.log(json)})
            this.props.history.push('/login')
         }

    render() {
        let { email,password } = this.state
      return (
         <div className="App-Register">
         <h1>Register</h1>
            <form onSubmit={this.handleSumit}>
                <input  type="email" placeholder="Email" value={email} name='email' onChange={this.handleChangeInput}/>
                <input  type="password" placeholder="Contraseña" value={password} name='password' onChange={this.handleChangeInput}/>
                <button type="summit">Crear</button>
            </form>
            <br/>
            <br/>
         </div> 
        
      );
    }
  }
  
  export default Register;
  