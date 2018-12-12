import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            'email':'',
            'password':'',
            'error': false
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
componentWillUnmount(){
    this.setState({
        email:'',
        password:'',
        error:'',
    })
}
    handleSumit(e){
        e.preventDefault()

        fetch('https://fondapi.devcharles.com/auth/login',{
            method:'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': this.state.email,
                'password': this.state.password
            })
        }).then(res => res.json()).then(json => {
            if (json.success){
                this.setState({
                    error:false
                })
                console.log('success login')
                localStorage.setItem('token',json.payload.token)
                console.log(this.state.error)
                this.props.history.push('/Home')

            }
            else{
                this.setState({
                    'error': true
                })
                console.log(this.state.error)
            }
        })
    }

    render() {
        let { email,password,error} = this.state
        let isError = error ? 'input-errors' :''
        let message = error ? 'Credenciales incorrectas' :'Login Exitoso'
      return (
         <div className="App-Register">
         <h1>Login</h1>
            <form onSubmit={this.handleSumit}>
                <input  className={isError} type="email" placeholder="Email" value={email} name='email' onChange={this.handleChangeInput}/>
                <input  className={isError} type="password" placeholder="Contraseña" value={password} name='password' onChange={this.handleChangeInput}/>
                <button type="summit">Login</button>
                <h3>{message}</h3>
            </form>
         </div> 
        
      );
    }
  }
  
  export default Login;

  