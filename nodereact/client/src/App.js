import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  state={
    cars: []
  }

  componentDidMount() {
    // axios.get('http://localhost:3001/api/users')
    //     .then((response)=>{
    //       console.log(response.data)
    //     })
    this.getCars();
  }

  getCars(){
    axios.get('/api/getcars')
    .then(response => {
      this.setState({
        cars: response.data
      })
      console.log(response.data)
    })
  }

  onCarSubmit = () => {
    axios.post('/api/addcar', {
      brand: 'Ford',
      model: 'Focus',
      year: 2020,
      avail: true
    })
    .then(response=>{
      console.log(response.data)
    })
  }

  removeCar = () => {
    axios.post('/api/removecar', {
      brand: 'Ford'
    })
    .then(response=>{
      this.getCars();
    })
  }

  updateCar = () => {
    axios.post('/api/updatecar', {
      id: '5efa39ffd43f780c2c8e49ed',
      brand: 'Kia'
    })
    .then(response=>{
      this.getCars();
    })
  }

  render(){
    return (
        <div className="App">
          <h1>Add Car</h1>
          <button
            onClick={()=>this.onCarSubmit()}
          >Add Car to DB</button>
          <button
            onClick={()=>this.removeCar()}
          >Remove car</button>
          <button
            onClick={()=>this.updateCar()}
          >Update car</button>
          <hr />
          {
            this.state.cars.map((car, i) => (
              <div key={i}>
                {car.brand}
                {car.year}
              </div>
            ))
          }
        </div>
    );
  }

}

export default App;
