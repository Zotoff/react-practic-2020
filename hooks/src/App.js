import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

const App = ({initialCount}) => {
  /*Not an object state*/
  // let [count, setCount] = useState(initialCount);
  // const addOne = () => {
  //   setCount(count + 1);
  // }
  // const restCount = () => {
  //   setCount((prevCount)=>{
  //     return prevCount + 1;
  //   })
  // }


  /*Object state*/
  let [state, setState] = useState({
    name: 'Paul',
    count: initialCount
  });

  const restOne = () => {
    setState(prevState => {
      return {...prevState, count: state.count - 1}
    })
  };

  /*Array state*/
  let [posts, setPosts] = useState([
    {
      name: 'Super react',
      body: 'Lorem Ipsum super react'
    },
    {
      name: 'Awesome react',
      body: 'Lorem Ipsum super react'
    }
  ]);

  useEffect(()=>{

  });

  return(
    <div>
      <h1>{state.name}</h1>
      <h3>Count: {state.count}</h3>
      <button className="btn btn-info" onClick={()=>setState({...state, count: state.count + 1})}>Add</button>
      <button className="btn btn-info" onClick={restOne}>Rest</button>
      <button className="btn btn-info" onClick={()=>setState({...state, count: initialCount})}>Reset</button>
      <hr />

      {
        posts.map((item, i)=>(
          <Post item={item} key={i}/>
        ))
      }
    </div>
  )
}

export default App;
