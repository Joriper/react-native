import React, { useState } from 'react';
import {Modal,TextInput, View,Dimensions, Button,Text} from 'react-native';
import dummy from '../../assets/splash.png';


export const Modals = ({setTodo,setModalVisible,modalVisible,getTodo}) =>{
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [getInputText,setInputText]= useState("")
    const styles={
        centeredView: {
          flex: 0.3,
          width:'100%',
        },
        modalView: {
          margin: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2,
        },
        buttonOpen: {
          backgroundColor: '#F194FF',
        },
        buttonClose: {
          backgroundColor: '#2196F3',
        },
        textStyle: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        modalText: {
          marginBottom: 15,
          textAlign: 'center',
        },
      };


    const GetData = () =>{
        setTodo(prev=>([...prev,{"value":getInputText,"id":Math.round(Math.random()*10000)}]))
        setModalVisible(false)
        setInputText("")

      
    }
    return(
      <>
      <Modal
          
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
            <View style={{width:'100%',backgroundColor:'black',top:200,position:'relative',maxWidth:windowWidth-20,margin:10,borderRadius:10,padding:20}}>
              <Text style={{color:'white',fontSize:22}}>Display Name</Text>
              <TextInput
                value={getInputText}
                onChangeText={setInputText}
                placeholderTextColor="white"
                style={{padding:10,color:'white',marginBottom:20}}
                placeholder={"Enter your name"}
                />
              <View style={{flexDirection:'row'}}>
                <View style={{paddingRight:20,width:100}}>
                  <Button title={"Cancel"} onPress={()=>setModalVisible(false)} />
                </View>
                <View style={{paddingRight:20,width:100}}>
                  <Button title={"OK"} onPress={GetData} />

                </View>
              </View>
            </View>
            
            
      </Modal>
      </>
    )
}