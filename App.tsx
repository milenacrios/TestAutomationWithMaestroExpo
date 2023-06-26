import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';


import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const {control, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = async (credentials: any) => {
    console.log(credentials)
    console.log(credentials?.email)
    console.log(credentials?.password)
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo(a)</Text>
      <Controller
        //rules={{required: {value: true, message: 'Esse campo é obrigatório!'}}}
        name='email'
        control={control}
        render={({field: {onChange, value}})=>(
          <TextInput placeholder='digite seu email' style={styles.input} onChangeText={onChange} value={value}></TextInput>
        )}
      />
      <Controller
        // rules={{required: {value: true, message: 'Esse campo é obrigatório!'}, minLength: {value: 6, message: 'A senha tem que ter 6 caracteres'}}}
        name='password'
        control={control}
        render={({field: {onChange, value}})=>(
          <TextInput placeholder='digite sua senha' style={styles.input} secureTextEntry={true} onChangeText={onChange} value={value}></TextInput>
        )}
      />
      
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      >
      <Text style={styles.textbutton}> Enviar</Text>
      </TouchableOpacity> 
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    color: '#000',
    borderColor: '#841584',
    alignItems: 'center',
    width: '100%', 
    height: 40,
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    marginBottom: 15,
    
  },
  title: {
    fontSize: 30,
    marginBottom: 60,
  },
  button: {
    width: '100%',
    height: 40, 
    backgroundColor: '#45D800', 
    borderRadius: 4, 
    justifyContent: 'center', 
    alignContent: 'center', 
  },

  textbutton: {
    color: '#FFFF', 
    justifyContent: 'center', 
    alignContent: 'center',
    fontWeight: 'bold', 
    fontSize: 18,
    textAlign: 'center' 
  }
});
