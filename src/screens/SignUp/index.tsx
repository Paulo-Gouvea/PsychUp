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

import errorAnimation from "../../assets/ErrorAnimation.json";
import successAnimation from "../../assets/SuccessAnimation.json";
import LogoImg from "../../assets/Logo.svg";

import { Header } from "../../components/Headers/Header";
import { Input } from "../../components/Inputs/Input";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { Button } from "../../components/Buttons/Button";
import { GoBackButton } from "../../components/Buttons/GoBackButton";
import { AnimationModal } from "../../components/AnimationModal";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigation = useNavigation();
    const {  
        createUser,
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

    function handleSuccessModalButton(){
        setOpenModal(false);
        handleGoBack();
    }

    function handleErrorModalButton(){
        setOpenModal(false);
        setErrorMessageTitle("");
        setErrorMessageDescription("");
    }

    async function handleCreateAccount(){ 
        if(password !== confirmPassword) {
            setErrorMessageTitle("Erro na criação de senha");
            setErrorMessageDescription("As senhas têm que serem iguais");
            setOpenModal(true);
        }

        try {
            const schema = Yup.object().shape({
                confirmPassword: Yup.string()
                .required("Confirme a sua senha")
                .min(6, "a senha deve conter no mínimo 6 digitos"),

                password: Yup.string()
                .required("Senha obrigatória")
                .min(6, "a senha deve conter no mínimo 6 digitos"),

                phoneNumber: Yup.string()
                .required("número de telefone obrigatório")
                .min(11, "o número de telefone deve conter 11 digitos"),

                email: Yup.string()
                .required("e-mail obrigatório")
                .email("O e-mail digitado está no formato invalido"),

                name: Yup.string()
                .required("Nome obrigatório"),
            });

            await schema.validate({ name, email, phoneNumber, password, confirmPassword });

            await createUser(email, password, name, phoneNumber);
            
            setOpenModal(true);
        } catch(error){
            if(error instanceof Yup.ValidationError){
                setErrorMessageTitle("Erro de validação");
                setErrorMessageDescription(error.message);
                setOpenModal(true);
            } else {
                setErrorMessageTitle("Erro na autenticação");
                setErrorMessageDescription("Ocorreu um erro ao fazer login, verifique às credenciais");
                setOpenModal(true);
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <AnimationModal 
                        animationSource={errorMessageTitle ? errorAnimation : successAnimation}
                        visible={openModal}
                        title={ errorMessageTitle ? errorMessageTitle : "Sucesso" }
                        description={ errorMessageDescription ? errorMessageDescription : "A sua conta foi criada com sucesso!" }
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
                        isLoading={isLoading}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}