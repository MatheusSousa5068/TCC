import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


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

import Header from '../../components/Header'

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
            await storeData(data.token)
            navigation.navigate('Order')
        } else {
            alert('erro')
        }
    }

    const storeData = async (token) => {
        try {
            await AsyncStorage.setItem(
                'token',
                JSON.stringify(token)
              );
        } catch (error) {
            alert('nao salvou o token')
        }
    };
    
    


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
            
            <ContainerLogin>
                <ButtonLogin  onPress={() => navigation.navigate('Signup')}>Se Cadastre Aqui!</ButtonLogin>
            </ContainerLogin>
        </KeyboardView> 
        </>
        
    )
}