import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import { Image,Dimensions,View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home';
import About from './src/screens/about';
import Contact from './src/screens/contact';
import RateUs from './src/screens/rateus';
import { HeaderRight } from './src/components/header_right';


export default function App() {
  const Vigator = createDrawerNavigator()
  const [getTodo,setTodo] = useState([])
  const win = Dimensions.get("screen")

  return (
      <NavigationContainer>
        <Vigator.Navigator initialRouteName='Home'
          screenOptions={{
            headerStyle:{
              backgroundColor:'black',
            },
            headerTintColor:'white'
          }}
        
        >
          <Vigator.Screen name="Home" component={()=><Home getTodo={getTodo} setTodo={setTodo}/>}
            options={{
              headerRight:()=><HeaderRight getTodo={getTodo} setTodo={setTodo}/>
            }}
          />
          <Vigator.Screen name="About us" component={About} />
          <Vigator.Screen name="Contact us" component={Contact} />
          <Vigator.Screen name="Rate us" component={RateUs} />

        </Vigator.Navigator>

      </NavigationContainer>

  );  
}
