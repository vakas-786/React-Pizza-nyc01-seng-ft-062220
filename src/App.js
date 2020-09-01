import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(pizza => this.setState({pizza: pizza}))
  }

  state = {
    pizza: [],
    editPizza: {
      id: "",
    topping: "",
    size: "",
    vegetarian: false
    }
  }

  editPizza = (pizza) => {
    console.log(pizza)
    this.setState({editPizza: pizza})
  }

  submitHandler = (e) => {
    e.preventDefault()
   const url = `http://localhost:3000/pizzas/`
   let pizzaData = this.state.editPizza
   console.log(pizzaData)
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({id: pizzaData.id, topping: pizzaData.topping, size: pizzaData.size, vegetarian: pizzaData.vegetarian })
    }
    fetch(url + pizzaData.id, options)
    .then(response => response.json())
    .then(data => this.componentDidMount())
    
  }

  vegHandler = (e) => {
    let newVegetarian = e.target.value === "Not Vegetarian" ? false: true 
    this.setState({editPizza: {...this.state.editPizza, vegetarian: newVegetarian}})
  }

  sizeHandler = (e) => {
    
    this.setState({editPizza: {...this.state.editPizza, size: e.target.value}})
  }

  toppingHandler = (e) => {
    this.setState({ editPizza: {...this.state.editPizza, topping: e.target.value}})
  }



  render() {



    return (
      <Fragment>
        <Header/>
        <PizzaForm submitHandler ={this.submitHandler} toppingHandler={this.toppingHandler} vegHandler={this.vegHandler} sizeHandler={this.sizeHandler} topping={this.state.editPizza.topping} size={this.state.editPizza.size} vegetarian={this.state.editPizza.vegetarian} />
        <PizzaList editPizza = {this.editPizza} pizzaArray={this.state.pizza} />
      </Fragment>
    )
  }
}

export default App;
