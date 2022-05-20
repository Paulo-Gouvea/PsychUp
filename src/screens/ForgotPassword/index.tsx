import React, { 
    useState,
 } from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import {
    Container,
    Logo,
    InputWrapper,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import LogoImg from "../../assets/Logo.svg";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { GoBackButton } from "../../components/GoBackButton";

export function ForgotPassword(){
    const [email, setEmail] = useState("");

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <GoBackButton 
                        onPress={handleGoBack}
                    />

                    <Logo>
                        <LogoImg 
                            width={90}
                            height={90}
                        />
                    </Logo>

                    <Header
                        title="Crie uma nova senha"
                        description="Digite o seu endereço de e-mail abaixo. Iremos enviar um e-mail para que você possa mudar a sua senha."
                    />

                    <InputWrapper>
                        <Input 
                            iconName="mail"
                            placeholder="Digite o seu e-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </InputWrapper>

                    <Button 
                        title="Criar conta"
                        onPress={() => console.log("botão de recuperar senha")}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}