import { View } from "react-native";
import { Modals } from "./modal";
import { useEffect, useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const HeaderRight = ({setTodo,getTodo}) =>{
    const [getModalvisiable,setModalVisible] = useState(false)

    useEffect(()=>{
        console.log(getTodo)
    },[getTodo])
    return(
        <View>
            <FontAwesome.Button name="plus" backgroundColor="black" size={30} onPress={()=>setModalVisible(true)}></FontAwesome.Button>
            <Modals setTodo={setTodo} setModalVisible={setModalVisible} modalVisible={getModalvisiable} getTodo={getTodo}/>
        </View>
    )
}
