import { Image } from "react-native";
import {Text,View} from 'react-native'
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";

const Home = ({getTodo,setTodo}) =>{
    const styles = {
        container:{
            borderBottom:'2px solid aquamarine',
            backgroundColor:'#eb8b6d',
            padding:10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }
    }
    function removeItem(value){
        const test = getTodo.filter((data)=>data['id'] != value)
        setTodo(test)
    }

    const win = Dimensions.get('window');



    return(
        <ScrollView>

                {getTodo?.length !=0 ?getTodo?.map(data=>(
                    <View style={styles.container} key={data['id']}>
                        <View style={{width:win.width-100}}>
                            <Text>{data['value']}</Text>
                        </View>
                        <FontAwesome.Button 
                            name="trash" 
                            size={30}                            
                            backgroundColor={'transparent'}
                            color={'black'}
                            
                            onPress={()=>removeItem(data['id'])}
                        >
                                
                        </FontAwesome.Button>
                       


                    </View>

                 
                )):(

                    <Image
                        style={{width:win.width,height:win.height}}
                        source={require("../../assets/opps.jpg")}
                    />
                )}
            
        </ScrollView>
    )
}
export default Home