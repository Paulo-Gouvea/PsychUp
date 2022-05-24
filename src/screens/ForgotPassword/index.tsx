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

import * as Yup from "yup";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import LogoImg from "../../assets/Logo.svg";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { GoBackButton } from "../../components/GoBackButton";
import { AnimationModal } from "../../components/AnimationModal";

export function ForgotPassword(){
    const [email, setEmail] = useState("");

    const navigation = useNavigation();
    const { forgotPassword, isLoading, openModal, setOpenModal } = useAuth();

    function handleGoBack(){
        navigation.goBack();
    }

    async function handleSendEmail(){
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                .required("e-mail obrigatório")
                .email("e-mail invalido"),
            });

            await schema.validate({ email });

            forgotPassword(email);
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert("Opa!", error.message);
            } else {
                Alert.alert(
                    "Erro na autenticação", 
                    "Ocorreu um erro ao fazer login, verifique às credenciais"
                )
            } 
        }
    }

    function handleModalButton(){
        setOpenModal(false);
        handleGoBack();
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <AnimationModal
                        visible={openModal}
                        title="Sucesso"
                        description="O e-mail de troca de senha foi enviado com sucesso!"
                        onPress={handleModalButton}
                        transparent
                    />

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
                        description="Digite o e-mail associado a sua conta. Iremos enviar um e-mail para que você possa mudar a sua senha."
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
                        title="Enviar e-mail"
                        isLoading={isLoading}
                        onPress={handleSendEmail}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}