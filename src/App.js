import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber , decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch =useDispatch();
  return (
    <>
      <div className="container">
          <h1 className="heading1">Increment / Decrement using Redux</h1>
          <h2 className="heading2">Counter Application</h2>
          
          <div className="counter">
              <button className="dec-btn" onClick={()=>dispatch(decNumber(5))}>Decrement</button>
              <span><input type="text" className="input-field" value={myState}/></span>
              <span className="inc-btn"><button className="inc-btn" onClick={()=>dispatch(incNumber(5))}>Increment</button></span>
          </div>
      </div>
    </>
  )
}

export default App;
