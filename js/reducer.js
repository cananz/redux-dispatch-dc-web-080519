// --------------------------------------------------------------------------
let state = {count: 0};

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
  state = changeState(state, action)
  render()
  // return state
  // console.log(state);
}

function render(){
  document.body.textContent = state.count
}

// call the render function



dispatch({type: 'INCREASE_COUNT'})
  // => 1
// dispatch({type: 'INCREASE_COUNT'})
//   // => 2
// dispatch({type: 'INCREASE_COUNT'})

// --------------------------------------------------------------------------
