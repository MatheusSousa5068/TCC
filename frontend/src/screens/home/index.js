import React from 'react'
import { Button, Image } from 'react-native'

import { Container, ButtonLogin, ButtonOrder, TextOrder, Text, ContainerButton, ContainerLogin } from './styles'

import LoginHeader from '../../components/LoginHeader'
import { TextSubmit } from '../order/styles'

export default function Home() {
    const test = () => {
        alert('testando')
    }


    return (
        <Container>
            <LoginHeader />

            <Text>O lugar certo para encomendar seu software</Text>

            <ContainerButton>
                <ButtonOrder onPress={test}>
                    <TextOrder>Faça seu pedido</TextOrder>
                </ButtonOrder>
            </ContainerButton>

            
            <ContainerLogin>
                <ButtonLogin>Faça Login Aqui!</ButtonLogin>
            </ContainerLogin>
            
        </Container>
    )
}