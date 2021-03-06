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

        const result = await fetch('http://10.0.2.2:3000/loginFunc', {
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
            navigation.navigate('Worker')
        } else {
            alert('erro')
        }
    }

    const storeData = async (token) => {
        try {
            await AsyncStorage.setItem(
                '@Fabric:worker',
                JSON.stringify(token)
              );
        } catch (error) {
            alert('nao salvou o token')
        }
    };

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
                <Title>Login - Funcion??rio</Title>
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
            
            { !keyboardVisible && <ContainerLogin onPress={() => navigation.navigate('Home')}>
                <ButtonLogin>Volte para a HomePage</ButtonLogin>
            </ContainerLogin>}

            {}

        </KeyboardView> 
            
            
        </>
        
    )
}