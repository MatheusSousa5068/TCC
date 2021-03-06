import React, { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'

import { 
    KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit ,
    Text,
    ContainerLogin,
    ButtonLogin
} from './styles'

import Header from '../../../components/Header'

export default function Sign({ navigation }) {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [senha2, setSenha2] = useState()



    const data = {
            nome:  nome,
            email: email,
            senha: senha
    }

    const submitData = async () => {
        if(senha == senha2) {
            await fetch('http://10.0.2.2:3000/cadastro', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        await alert('Usuário cadastrado')
        await navigation.navigate('Login')
        } else {
            alert('Senhas não coincidem')
        }
        
    }

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
            {!keyboardVisible &&<Title>Cadastre-se</Title>}
                <Input
                    placeholderTextColor="gray"
                    placeholder="Usuário"
                    onChangeText={text => setNome(text)}
                />

                <Input 
                    placeholderTextColor="gray"
                    placeholder="E-mail"
                    onChangeText={text => setEmail(text)}
                />
                <Input 
                    placeholderTextColor="gray"
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={text => setSenha(text)}
                />
                <Input 
                    placeholderTextColor="gray"
                    placeholder="Confirme sua senha"
                    secureTextEntry
                    onChangeText={text => setSenha2(text)}
                />


                {!keyboardVisible &&<ButtonSubmit onPress={submitData}>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>}
            </Container>
            
            {!keyboardVisible && <ContainerLogin>
                <ButtonLogin  onPress={() => navigation.navigate('Login')}>Faça Login Aqui!</ButtonLogin>
                <Text>Ou</Text>
                <ButtonLogin onPress={() => navigation.navigate('Home')}>Volte para a HomePage</ButtonLogin>
            </ContainerLogin>}
        </KeyboardView> 
        
        
        

        </>
    )
}