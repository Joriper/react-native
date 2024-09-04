import { View,Text,Button } from "react-native";
import { useState } from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { AndroidMarket } from "react-native-rate";
import Rate from "react-native-rate";



export const CustomDrawer = props => {
    const [isRate,setRate] = useState(false)
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          >
            <DrawerItemList {...props} />
            <DrawerItem  style={{display:'flex',}} label={()=><Text style={{color: '#ffffff'}}>Rate us</Text>} onPress={()=>{
                const options = {

                    preferredAndroidMarket: AndroidMarket.Google,
                    preferInApp:false,
                    openAppStoreIfInAppFails:true,
                }
                Rate.rate(options, (success, errorMessage)=>{
                    if (success) {
                    // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                    setRate(true)
                    }
                    if (errorMessage) {
                    // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
                    console.error(`Example page Rate.rate() error: ${errorMessage}`)
                    }
                })
            }} />



        </DrawerContentScrollView>
        <Text style={{color:'white',textAlign:'center',padding:20}}>Developed by Tekchand(2024)</Text>

      </View>
    );
  };