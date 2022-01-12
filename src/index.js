import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import thunk from 'redux-thunk'
import { compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'

const allReducers = combineReducers({   // combining multiple reducers
  products: productsReducer,
  user: userReducer
})

const allStoreEnhancers = compose(
  // applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()  //check if browser has devTools extension and pass that in as3rd argument
)

const store = createStore(
  allReducers, 
  {
    products: [{name: 'iPhone'}],   //pass an object as a second argument
    user: 'Rodrigo'                 //this sets up the initial state of the store
  },
  allStoreEnhancers
)



ReactDOM.render(
  <Provider store={store}>
    <App randomProp="whatevs"/>
  </Provider>,
  document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  
  
  
  // function reducer(state, action) {
    //   // console.log(action)
    
    //   if(action.type === 'changeState'){
      //     return action.payload.newState
      //   }
      
      //   return 'State'
      // }
      
      
      // console.log(store.getState())
      // //creating an action
      // const action = {
        //   type: 'changeState',
        //   payload: {
          //     newState: 'New state'
          //   }
          // }
          
          // store.dispatch(action)


          // console.log(store.getState())
          
          // const updateUserAction = {
          //   type: 'updateUser',
          //   payload: {
          //     user: 'John'
          //   }
          // }
          
          // store.dispatch(updateUserAction)
          
          // console.log(store.getState())