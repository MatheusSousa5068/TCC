import React from 'react'

import { Container, ButtonLogin, ButtonOrder, TextOrder, Text, ContainerButton, ContainerLogin } from './styles'

import LoginHeader from '../../../components/LoginHeader'

export default function Home({ navigation }) {
    return (
        <Container>
            <LoginHeader />

            <Text>O lugar certo para encomendar seu software</Text>

            <ContainerButton>
                <ButtonOrder onPress={() => navigation.navigate('Login')}>
                    <TextOrder>Faça seu pedido</TextOrder>
                </ButtonOrder>
            </ContainerButton>

            
            <ContainerLogin>
                <ButtonLogin  onPress={() => navigation.navigate('Worker')}>É um funcionário Fabric?</ButtonLogin>
            </ContainerLogin>
            
        </Container>
    )
}