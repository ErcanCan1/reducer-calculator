import React from 'react';
import { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { initialState } from './reducers';
import reducer from './reducers';
import { applyNumber, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_CLEAR, MEMORY_TOTAL, MEMORY_TOPLAM } from './actions';

function App() {
const [state, dispatch] = useReducer( reducer, initialState)

function handleAdd(e){
  dispatch(applyNumber(Number(e.target.value)));
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={()=>dispatch ({type: MEMORY_TOTAL})} />
              <CalcButton value={"MR"} onClick ={() => dispatch ({ type: MEMORY_TOPLAM})}/>
              <CalcButton value={"MC"} onClick = {() => dispatch({ type: MEMORY_CLEAR})}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e)=>handleAdd(e)}/>
              <CalcButton value={2} onClick={(e)=>handleAdd(e)}/>
              <CalcButton value={3} onClick={(e)=>handleAdd(e)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e)=>handleAdd(e)}/>
              <CalcButton value={5} onClick={(e)=>handleAdd(e)}/>
              <CalcButton value={6} onClick={(e)=>handleAdd(e)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e)=>handleAdd(e)}/>
              <CalcButton value={8} onClick={(e)=>handleAdd(e)}/>
              <CalcButton value={9} onClick={(e)=>handleAdd(e)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => dispatch({ type: CHANGE_OPERATION, payload: "+"})}/>
              <CalcButton value={"*"} onClick={(e) => dispatch({ type: CHANGE_OPERATION, payload: "*"})}/>
              <CalcButton value={"-"} onClick={(e) => dispatch({ type: CHANGE_OPERATION, payload: "-"})}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch({ type: CLEAR_DISPLAY })}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
