import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';

import { Space, Text, Container, TextContainer } from './styles';


export default function WorkerPed () {
    const [ data, setData ] = useState([])

    const getToken = async () => {
        const codped = await AsyncStorage.getItem('codped')

        const data = {
            codped: codped
        }
        
        const result = await fetch('http://10.0.2.2:3000/pedidoCod', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await result.json()
    }

    

    async function load() {
        const dados = await getToken()

        setData(dados)
    }

    
    useEffect(() => {
        load();
    }, []);


    return (
        <>
        <Container>
            <Space><Text style={{fontSize: 25}}>Dados do pedido</Text></Space>
            <Text>{'\n'} {'\n'}</Text>

            {data !== [] &&  <TextContainer><Text>
                Código do pedido: {data.codped} {'\n'} {'\n'}
                Nome do pedido: {data.pedido} {'\n'} {'\n'}
                Descrição do pedido: {data.descped} {'\n'} {'\n'}
                Tipo do projeto: {data.tipo_projet}
            </Text></TextContainer>}
           

        </Container>
        </>
    )
}