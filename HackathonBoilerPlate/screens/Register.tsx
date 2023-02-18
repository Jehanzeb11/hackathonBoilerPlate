import React,{useState} from 'react'
import { View,Text , Image, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';


const Register = ({navigation}) => {
  const [usename,setName] = useState('')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
<View>

<View>
  <Text style={[styles.textBold,styles.textBlack,styles.fs1,styles.m2,styles.textCenter]}>Register <Icon name="person" size={40} color="black" /></Text>
</View>


<View style={[styles.flexCenter,styles.mt5]}>
    <View><Text style={[styles.textBlack,styles.p1]}>User Name : </Text></View>
    
  <TextInput placeholder='Name' onChangeText={(e) => setName(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textPrimary,styles.bgBlack]} />
  </View> 


<View style={[styles.flexCenter,styles.mt5]}>
    <View><Text style={[styles.textBlack,styles.p1]}>Email : </Text></View>
    
  <TextInput keyboardType="email-address" placeholder='Email' onChangeText={(e) => setEmail(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textPrimary,styles.bgBlack]} />
  </View> 
  <View style={[styles.flexCenter,styles.mt5]}>
  <View><Text style={[styles.textBlack,styles.p1]}>Password : </Text></View>

  <TextInput  secureTextEntry={true} placeholder="Password" onChangeText={(e) => setPassword(e)} style={[styles.border1,styles.w75,styles.rounded,styles.p1,styles.textPrimary,styles.bgBlack]} />
  </View>

  <TouchableOpacity style={[styles.flexCenter]}>
  <Text style={[styles.mt4,styles.p1,styles.bgBlack,styles.textPrimary,styles.w25,styles.fs4,styles.roundedPill,styles.textCenter]}>Register</Text>
  </TouchableOpacity>

</View>
  )
}

export default Register
