import React from 'react'
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

export default function Login(params) {
    return (
        <>
        <KeyboardView>
            <Header />
            <Container>
                <Title>Login</Title>
                <Input 
                    placeholderTextColor="#000"
                    placeholder="email"
                />
                <Input 
                    placeholderTextColor="#000"
                    placeholder="senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>
            </Container>
            
            
        </KeyboardView> 
        
        
        <Text>Ainda não é cadastrado? Faça login aqui</Text>

        </>
        
    )
}