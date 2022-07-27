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

import * as Yup from "yup";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import successAnimation from "../../assets/SuccessAnimation.json";
import errorAnimation from "../../assets/ErrorAnimation.json";
import LogoImg from "../../assets/Logo.svg";

import { Header } from "../../components/Headers/Header";
import { Input } from "../../components/Inputs/Input";
import { Button } from "../../components/Buttons/Button";
import { GoBackButton } from "../../components/Buttons/GoBackButton";
import { AnimationModal } from "../../components/AnimationModal";

export function ForgotPassword(){
    const [email, setEmail] = useState("");

    const navigation = useNavigation();
    const { 
        forgotPassword, 
        isLoading, 
        openModal, 
        setOpenModal,
        errorMessageTitle,
        setErrorMessageTitle,
        errorMessageDescription,
        setErrorMessageDescription,
    } = useAuth();

    function handleGoBack(){
        navigation.goBack();
    }

    async function handleSendEmail(){
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                .required("O e-mail é obrigatório")
                .email("O e-mail digitado está no formato invalido"),
            });

            await schema.validate({ email });

            forgotPassword(email);
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                setErrorMessageTitle("Erro de validação");
                setErrorMessageDescription(error.message);
                setOpenModal(true);
            } else {
                setErrorMessageTitle("Erro de validação");
                setErrorMessageDescription("Ocorreu um erro ao fazer login, verifique às credenciais");
                setOpenModal(true);
            } 
        }
    }

    function handleSuccessModalButton(){
        setOpenModal(false);
        handleGoBack();
    }

    function handleErrorModalButton(){
        setOpenModal(false);
        setErrorMessageTitle("");
        setErrorMessageDescription("");
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <AnimationModal
                        animationSource={ errorMessageTitle ? errorAnimation : successAnimation}
                        visible={openModal}
                        title={ errorMessageTitle ? errorMessageTitle : "Sucesso" }
                        description={ errorMessageDescription ? errorMessageDescription : "O e-mail de troca de senha foi enviado com sucesso!" }
                        onPress={ errorMessageTitle ? handleErrorModalButton : handleSuccessModalButton }
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