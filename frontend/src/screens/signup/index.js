import React, { useState } from 'react'

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

export default function Signup(params) {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()



    const data = {
        nome:  nome,
        email: email,
        senha: senha
    }

    const submitData = () => {
        fetch('http://10.0.2.2:3000/cadastro', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        alert('Usuário cadastrado')
    }


    return (
        <>
        <KeyboardView>
            <Header />
            <Container>
                <Title>Cadastre-se</Title>
                <Input
                    placeholderTextColor="gray"
                    placeholder="Usuário"
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
                    onChangeText={text => setNome(text)}
                />
                <Input 
                    placeholderTextColor="gray"
                    placeholder="Confirme sua senha"
                    secureTextEntry
                    onChangeText={text => setSenha(text)}
                />


                <ButtonSubmit onPress={submitData}>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
            </Container>
            
            <Text>Ainda não é cadastrado? Faça login aqui</Text>
        </KeyboardView> 
        
        
        

        </>
        
    )
}