import React from 'react'

import { Image } from 'react-native'
import { Container } from './styles'

import Logo from '../../../assets/eay.jpg'

export default function Header(params) {
    return (
        <Container>
            <Image
                source={Logo}
            />
        </Container>
    )
}