import React,{useState} from 'react'
import { View,Text , Image, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles'

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <View>

      <View>
        <Text style={[styles.textBold,styles.textBlack,styles.fs1,styles.m2,styles.textCenter]}>Login <Icon name="person" size={40} color="black" /></Text>
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
        <Text style={[styles.mt4,styles.p1,styles.bgBlack,styles.textPrimary,styles.w25,styles.fs4,styles.roundedPill,styles.textCenter]}>Login</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={[styles.flexCenter]} onPress={()=>{
          navigation.navigate("Register")
        }}>
        <Text style={[styles.mt4,styles.textInfo,styles.fs3,styles.textCenter]}>Create Account</Text>
        </TouchableOpacity>


    </View>
  )
}

export default Login
