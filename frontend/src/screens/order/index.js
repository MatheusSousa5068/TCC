import React, { useState } from 'react'

import { StyleSheet } from 'react-native'

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


export default function Order({ navigation }) {
    const [pedido, setPedido] = useState()
    const [descped, setDescped] = useState()



    const data = {
        pedido: pedido,
        descped: descped,
        tipo_projet: "App"
    }

    const submitData = () => {
        fetch('http://10.0.2.2:3000/pedido', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    
    return (
        <>
        <KeyboardView>
            <Header />
            <Container>
                <Title>Faça seu pedido</Title>

                <Input 
                    placeholderTextColor="gray"
                    placeholder="Confirme sua senha"
                    secureTextEntry      
                />

                <Input
                    placeholderTextColor="gray"
                    placeholder="Nome do Produto"
                    onChangeText={text => setPedido(text)}
                />

                <Input 
                    placeholderTextColor="gray"
                    placeholder="Descreva seu Produto"
                    onChangeText={text => setDescped(text)}
                />
                
                
                

    

            


                <ButtonSubmit onPress={submitData}>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
            </Container>
            
        </KeyboardView> 
        
        
        

        </>
        
    )
}