import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    
`

export const Container = styled.View`
    flex: 1;
    padding-top: 20%;
    justify-content: center;
    align-items: center;
    width: 90%;
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
    top: 10%;
`

export const TextSubmit = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

export const Text = styled.Text`
    color: #5B5A5A;
    font-size: 15px;
    text-decoration: underline;
`

export const TextContainer = styled.View`
    padding-top: 30%;
`

export const PickerContainer = styled.View`
    border: 2px solid #FF682B;
    width: 50%;
    align-items: center;
    border-radius: 9px;
`