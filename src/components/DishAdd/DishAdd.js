import React, { Component } from 'react';
import './DishAdd.css';

class DishAdd extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price:'',
            description:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

handleSubmit(){
  
}
handleChangeInput(){
  
}

  render() {
    return (
      <div>
        <h1>Dishes Add</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChangeInput}/>
          <input/>
          <input/>
        </form>
      </div>
    );
  }
}

export default DishAdd;
