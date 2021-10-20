import React from 'react'

import { Image } from 'react-native'
import { Container, Text } from './styles'

import Logo from '../../../assets/eay.jpg'

export default function LoginHeader(params) {
    return (
        <Container>
            <Image
                source={Logo}
            />

            <Text>Fabric</Text>
        </Container>
    )
}