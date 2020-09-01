import React from "react"

class PizzaForm extends React.Component {

  state = {
    selectedPizza: {
        topping: '',
        size: '',
        vegetarian: false
    }
}


submitPizza = (e) => {
  
  this.props.submitHandler(e)
}

  render() {
    // console.log(this.props.topping)
    return(
      <form onSubmit={this.submitHandler}>

        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" onChange={this.props.toppingHandler} value= {this.props.topping} />
          </div>
          <div className="col">
            <select onChange={this.props.sizeHandler} value={this.props.size} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" onChange={this.props.vegHandler} checked={this.props.vegetarian ? true : false}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={this.props.vegHandler} checked={this.props.vegetarian ? false : true}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.submitPizza}>Submit</button>
          </div>
        </div>
        </form>
    )
  }
}

export default PizzaForm
