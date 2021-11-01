import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keyboard } from 'react-native'


import { 
    KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit ,
    Text,
    ButtonLogin,
    ContainerLogin
} from './styles'

import Header from '../../../components/Header'

export default function Login({ navigation }) {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const submitData = async () => {
        const data = {
            email: email,
            senha: senha
        }

const result = await fetch('http://10.0.2.2:3000/login', {
    method: "post",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})

        return await result.json()
    }


    const verify = async () => {
        const data = await submitData()


        if(data.auth) {
            await storeData(data.token, data.email)
            navigation.navigate('Order')
        } else {
            alert('erro')
        }
    }

    const storeData = async (token, email) => {
        try {
            await AsyncStorage.setItem(
                'token',
                JSON.stringify(token)
            );

            await AsyncStorage.setItem(
                'email',
                JSON.stringify(email)
            )
        } catch (error) {
            alert('Erro ao tentar salvar o token')
        }
    };
    
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) {
            navigation.navigate('Order')
          }
        } catch(e) {
          alert('Erro ao tentar pegar token')
        }
    }

    getData()
    

    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        let unmounted = false

               const keyboardDidShowListener = Keyboard.addListener(
                    'keyboardDidShow',

                    () => {if(!unmounted) {
                        setKeyboardVisible(true)
                    }});
            
                const keyboardDidHideListener = Keyboard.addListener(
                    'keyboardDidHide',
                    () => {if(!unmounted){
                        setKeyboardVisible(false)
                    }}); 
            
        
        return () => {unmounted = true}
    }, []);
    


    return (
        <>
        <KeyboardView>
            <Header />
            
        <Container>
                <Title>Login</Title>
                <Input 
                    placeholderTextColor="gray"
                    placeholder="email"
                    onChangeText={text => setEmail(text)}
                />
                <Input 
                    placeholderTextColor="gray"
                    placeholder="senha"
                    secureTextEntry
                    onChangeText={text => setSenha(text)}
                />
                <ButtonSubmit onPress={verify}>
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>
        </Container>
            
            {!keyboardVisible && <ContainerLogin>
                <ButtonLogin  onPress={() => navigation.navigate('Signup')}>Se Cadastre Aqui!</ButtonLogin>
                <Text>Ou</Text>
                <ButtonLogin onPress={() => navigation.navigate('Home')}>Volte para a HomePage</ButtonLogin>
            </ContainerLogin>}

        </KeyboardView> 
            
            
        </>
        
    )
}