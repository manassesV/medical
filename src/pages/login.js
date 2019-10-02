import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image} from 'react-native'
import { Container, Header, Content, Button, Text, Form, Item, Input } from 'native-base';
import User from '../controller/logincontroller'


export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    
      var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    var regexemail = new RegExp(pattern);

     if(this.state.email == "") {
         alert("Campo email vazio")

         return;
     }

     if(!regexemail.test(this.state.email)){
        alert("Email inválido")

        return;
     }
     if(this.state.password == "") {
        alert("Campo senha vazio")

        return
    }

   var user = new User();
   var self = this

   var model = {
       email: this.state.email,
       password: this.state.password
   }

   user.login(model,
    function(dados){
        self.props.navigation.navigate('Main')
    }, function(error){
        console.log(error);
        
        

    })


  }
  render() {
    return (
     
      <SafeAreaView style={styles.container}>

       

        <Image
  style={{height:200 , width: 150, marginTop: -70}}
  source={require('../../assets/logoB.png')}
  resizeMode="contain"
/>



           
          
        <Text style={styles.textHeader}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        
          <Item>
              <Input 
              
               autoCapitalize="none"
               placeholder="Email"
               onChangeText={email => this.setState({ email })}
               value={this.state.email}    
               />
          </Item>


            <Item last>
              <Input
               secureTextEntry
               autoCapitalize="none"
               placeholder="Senha"
               onChangeText={password => this.setState({ password })}
               value={this.state.password}
              
              />
            </Item>

      
          <Button full success onPress={this.handleLogin}  style={styles.buttonLogin}><Text> Login</Text></Button>
      




        <Button transparent light onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Cadastre-se</Text>
          </Button>


        

          </SafeAreaView>
    
   
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4'
  },
  textInput: {
    height: 40,
    color: '#FFF',
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: '#FFF'

  }, 

  textHeader: {
    
    color: '#FFF',
   

  }, 

  buttonLogin: {

    marginTop: 40
  }, 


  


})