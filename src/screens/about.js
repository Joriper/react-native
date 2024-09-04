import { Image } from "react-native";
import {View,Text,ScrollView} from 'react-native'
const About = () =>{
    return(
        <ScrollView style={{padding:10}}>
            <Text style={{fontSize:20}}>I am Tekchand working as python developer in ADG Online solutions pvt ltd</Text>

            <View style={{paddingTop:20}}>
                <Text style={{fontSize:20,textDecoration:'underline'}}>Development Skills</Text>
                <View  style={{paddingBottom:20}}>
                    <Text style={{fontSize:25}}>1. Python</Text>
                    <Image
                        style={{width:100,height:100}}
                        source={require("../../assets/python.png")}
                    />
                    <Text>
                            Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name "Python" is a nod to the British comedy group Monty Python.


                    </Text>
                </View>



                <View style={{paddingBottom:20}}>
                    <Text style={{fontSize:25}}>2. Python</Text>
                    <Image
                        style={{width:100,height:100}}
                        source={require("../../assets/node.png")}
                    />
                    <Text>
                    Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.

                    </Text>
                </View>




                <View style={{paddingBottom:20}}>
                    <Text style={{fontSize:25}}>3. HTML/CSS</Text>
                    <Image
                        style={{width:100,height:100}}
                        source={require("../../assets/html.png")}
                    />
                    <Text>
                        HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

                    </Text>
                </View>



                <View style={{paddingBottom:20}}>
                    <Text style={{fontSize:25}}>4. MySQL</Text>
                    <Image
                        style={{width:100,height:100}}
                        source={require("../../assets/mysql.png")}
                    />
                    <Text>
                        MySQL is the world's most popular open source database. According to DB-Engines, MySQL ranks as the second-most-popular database, behind Oracle Database. MySQL powers many of the most accessed applications, including Facebook, Twitter, Netflix, Uber, Airbnb, Shopify, and Booking.com.

                    </Text>
                </View>


                <View style={{paddingBottom:20}}>
                    <Text style={{fontSize:25}}>5. Typescript</Text>
                    <Image
                        style={{width:100,height:100}}
                        source={require("../../assets/ts.png")}
                    />
                    <Text>
                        TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg (designer of C#) at Microsoft. TypeScript is both a language and a set of tools. TypeScript is a typed superset of JavaScript compiled to JavaScript. In other words, TypeScript is JavaScript plus some additional features.

                    </Text>
                </View>


            </View>
        </ScrollView>
    )
}

export default About
