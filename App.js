import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStore } from "redux"
import { Provider} from "react-redux"
import MyApp from "./src/MyApp.js"


const initializeState = {
  myCounter: 0,

}
// No need to use redux.createStore as we already imported

const reducer = ( state = initializeState, action) => {

  switch (action.type) {
    case "INC_COUNTER":
      return {myCounter: state.myCounter + 1 }

    case "DEC_COUNTER":
    if (state.myCounter >= 1) {
     return {myCounter: state.myCounter - 1 }
       
    } else { 
      return state
    }   
    
  }

  return state
}

const store = createStore(reducer);


export default class App extends React.Component{
render(){
  return (
       <Provider store = {store}>
       <MyApp />  
       </Provider> 
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
