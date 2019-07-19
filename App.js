import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStore } from "redux"
import { Provider} from "react-redux"
const initializeState = {
  myCounter: 0,

}
// No need to use redux.createStore as we already imported

const store = createStore();


export default class App extends React.Component{
render(){
  return (
    <View style={styles.container}>
      <Text>Let's create An App</Text>
    </View>
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
