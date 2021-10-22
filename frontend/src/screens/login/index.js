import React from 'react'
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
    return (
        <>
        <KeyboardView>
            <Header />
            
            <Container>
                <Title>Login</Title>
                <Input 
                    placeholderTextColor="gray"
                    placeholder="email"
                />
                <Input 
                    placeholderTextColor="gray"
                    placeholder="senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>
            </Container>
            
            <ContainerLogin>
                <ButtonLogin  onPress={() => navigation.navigate('Signup')}>Faça Login Aqui!</ButtonLogin>
            </ContainerLogin>
        </KeyboardView> 
        
        
        

        </>
        
    )
}