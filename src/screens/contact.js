import { View,Text} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const root = {
    style:{
        flexDirection:'row',
        textAlign:'left',
        alignItems:'center'
    },
    contactstyle:{
        margin: 'auto'
    },
    fontStyle:{
        fontSize:20
    }
}
const Contact = () =>{
    return(
        <View style={root.contactstyle}>
            <View style={root.style}>
                <FontAwesome.Button 
                    name="phone" 
                    size={30}                            
                    backgroundColor={'transparent'}
                    color={'black'}
                >
                                
                </FontAwesome.Button>
                <Text style={root.fontStyle}>+8178341677</Text>
            </View>
                       
            <View style={root.style}>
                <FontAwesome.Button 
                        name="envelope" 
                        size={30}                            
                        backgroundColor={'transparent'}
                        color={'black'}
                    >
                                    
                </FontAwesome.Button>
                <Text style={root.fontStyle}>tekchand@adgonline.in</Text>
            </View>
                
            <View style={root.style}>
                <FontAwesome.Button 
                        name="home" 
                        size={30}                            
                        backgroundColor={'transparent'}
                        color={'black'}
                    >
                                    
                </FontAwesome.Button>
                <Text style={root.fontStyle}>A-B Block Sarita Vihar New Delhi</Text>
            </View>
        </View>
    )
}
export default Contact;