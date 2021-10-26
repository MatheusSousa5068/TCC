import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, FlatList, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import axios from 'axios'


import { Space, ContainerButton } from './styles'

export default function Worker({ navigation }) {



    const [dados, setDados] = useState([])
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    
    const get = async () => {
        const { data } = await axios.get('http://10.0.2.2:3000/pedidos')
        setDados(data)

        return data
    }

    const aler = () => {
        alert('clicou')
    }

    return (
        <>
            <Space />
            <Button title="et" onPress={get} />

            <ContainerButton>
                {dados.map((dado) => (

                <>    

                <Button onPress={async () => {
                    try {
                        await AsyncStorage.setItem('codped', JSON.stringify(dado.codped))
                        alert('dado salvo')
                        navigation.navigate('WorkerPed')
                    } catch (error) {
                        alert(error)
                    }
                }} title={dado.pedido} />
                
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={async () => {
                        const data = {
                            codped: dado.codped
                        }

                        const result = await fetch('http://10.0.2.2:3000/delete', {
                            method: "post",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })

                        get()
    }}
  />
                </>
                ))}

                
            </ContainerButton>

        </>
    )
}