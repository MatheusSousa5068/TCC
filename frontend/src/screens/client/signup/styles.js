import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    
`

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding-top: 25px;
`

export const Title = styled.Text`
    color: #000;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
`

export const Input = styled.TextInput`
    border: 2px solid #FF682B;
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #000;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #FF682B;
    border-radius: 9px;
    width: 50%;
    padding: 15px 20px;
    align-items: center;
`

export const TextSubmit = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

export const Text = styled.Text`
    color: #000;
    margin: 5px 0px;
`

export const ButtonLogin = styled.Text`
    color: #5B5A5A;
    font-size: 15px;
    text-decoration: underline;
`
export const ContainerLogin = styled.TouchableOpacity`
    align-items: center;
    margin-bottom: 25px;
`