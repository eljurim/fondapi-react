import React, { Component } from 'react';
import './DishMenu.css';

class DishMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            dishes: [],
        }
    }

    componentDidMount(){
        fetch('https://fondapi.devcharles.com/dishes')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            let dishArray = json.payload.dishes.map((currentValue)=>{
                return (
                    <h3><b>{currentValue.name}:</b>{currentValue.description}<span>{currentValue.price}</span></h3>
                )
            })
            this.setState({
                dishes:  dishArray,
            })
        })
    }

  render() {
    return (
      <div>
        <h1>Dishes</h1>
        {this.state.dishes}
      </div>
    );
  }
}

export default DishMenu;
