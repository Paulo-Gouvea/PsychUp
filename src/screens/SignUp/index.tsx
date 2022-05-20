import React, { 
    useState,
 } from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert, 
} from "react-native";

import {
    Container,
    Logo,
    InputWrapper,
} from "./styles";

import LogoImg from "../../assets/Logo.svg";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleCreateAccount(){ 
        console.log(`Nome: ${name}, Email: ${email}, celular: ${phoneNumber}, senha: ${password}, confirmacao: ${confirmPassword}`);
    
        Alert.alert(
            "Parabéns! A sua conta foi criada!",
            "",
            [
                {text: "OK", onPress: () => console.log("boa")}
            ]
        );
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Logo>
                        <LogoImg 
                            width={90}
                            height={90}
                        />
                    </Logo>

                    <Header
                        title="Crie a sua conta"
                        description="Crie a sua conta e utilize de nossos serviços. A sua saúde mental é importante para nós!"
                    />

                    <InputWrapper>
                        <Input 
                            iconName="user"
                            placeholder="Digite o seu nome"
                            keyboardType="default"
                            autoCapitalize="none"
                            value={name}
                            onChangeText={setName}
                        />

                        <Input 
                            iconName="mail"
                            placeholder="Digite o seu e-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Input 
                            iconName="phone"
                            placeholder="Digite o seu telefone"
                            keyboardType="numeric"
                            autoCapitalize="none"
                            maxLength={11}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />   

                        <PasswordInput 
                            placeholder="Digite a sua senha"
                            value={password}
                            onChangeText={setPassword}
                        />

                        <PasswordInput 
                            placeholder="Confirme a sua senha"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        /> 
                    </InputWrapper>

                    <Button 
                        title="Criar conta"
                        onPress={handleCreateAccount}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}