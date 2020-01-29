import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, TextInput, ScrollView, Button} from 'react-native';
import Constants from 'expo-constants';


    /* <View style={styles.container}>
        <View style={styles.itemOne}>
          <Text>Item</Text>
        </View>
        <View style={styles.itemTwo}>
          <Text>Item</Text>
        </View>
        <View style={styles.itemThree}>
          <Text>Item</Text>
        </View>
        <View style={styles.itemFour}>
          <Text>Item</Text>
        </View>
      </View> */

export default function App() {
  const [value, onChangeText] = React.useState('Placeholder de mier...');
 
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}>Bienvenido</Text>
          <ActivityIndicator size="large" color="#212121" />
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/2608905129/monyet.jpg' }}
          style={styles.image}/>
          <TextInput 
            style={styles.input}

            onChangeText={ text => onChangeText(text)}
            value={value}
          />
          <TextInput 
            style={styles.input}

            onChangeText={ text => onChangeText(text)}
            value={value}
          />
          <TextInput 
            style={styles.input}

            onChangeText={ text => onChangeText(text)}
            value={value}
          />
          <TextInput 
            style={styles.input}

            onChangeText={ text => onChangeText(text)}
            value={value}
          />
          <Button title="NO XUTA" onPress={(event) => {
              console.log(event)
            }
            } />
        </View>
      </ScrollView>
    )
  
};
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 25
  },
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop: 200
  }
});


  /* itemOne: {
    flex: 1,
    backgroundColor: 'green'
  },
  itemTwo:{
    flex: 2,
    backgroundColor: 'blue'
  },
  itemThree: {
    flex: 3,
    backgroundColor: 'black'
  },
  itemFour: {
    flex: 4,
    backgroundColor: 'yellow'
  }
 */