import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text } from 'react-native';

import CheckBox from '@react-native-community/checkbox';


import { Space } from './styles';

import axios from 'axios'

export default function WorkerPed () {
    const [ data, setData ] = useState([])

    const getToken = async () => {
        const codped = await AsyncStorage.getItem('codped')
/*
        const result = await fetch('http://10.0.2.2:3000/pedidoCod', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(codped)
        })*/

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
            <Space />


            {data !== [] &&  <Text>
                {data.codped}
                {data.pedido}
                {data.descped}
            </Text>}
           

        </>
    )
}