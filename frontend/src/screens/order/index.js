import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from 'react-native';


import { 
    KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit ,
    Text
} from './styles'

import Header from '../../components/Header'


export default function Order({ navigation }) {
    // verificação de login
    const getToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value == null) {
              navigation.navigate('Login')
          }
        } catch(e) {
          alert('erro ao tentar pegar token')
        }
    }


    const isAuth = async () => {
        if (!getToken()) {
            
        }
    }

    const removeValue = async () => {
        try {
          await AsyncStorage.removeItem('token')
          navigation.navigate('Home')
        } catch(e) {
          // remove error
        }

      }

    getToken()

    const [pedido, setPedido] = useState()
    const [descped, setDescped] = useState()



    const data = {
        pedido: pedido,
        descped: descped,
        tipo_projet: "App",
        concluido: "false"
    }

    const submitData = () => {
        fetch('http://10.0.2.2:3000/pedido', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    
    return (
        <>
        <KeyboardView>
            <Header />

            <Button
                style={{flex: 1, color: 'red'}}
                title="Logout"
                onPress={removeValue}
            />

            <Container>
                <Title>Faça seu pedido</Title>

                <Input 
                    placeholderTextColor="gray"
                    placeholder="Confirme sua senha"
                    secureTextEntry      
                />

                <Input
                    placeholderTextColor="gray"
                    placeholder="Nome do Produto"
                    onChangeText={text => setPedido(text)}
                />

                <Input 
                    placeholderTextColor="gray"
                    placeholder="Descreva seu Produto"
                    onChangeText={text => setDescped(text)}
                />
                
                
                

    

            


                <ButtonSubmit onPress={submitData}>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
            </Container>
            
        </KeyboardView> 
        
        
        

        </>
        
    )
}