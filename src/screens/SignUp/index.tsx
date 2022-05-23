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

import LogoImg from "../../assets/Logo.svg";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";
import { GoBackButton } from "../../components/GoBackButton";
import { AnimationModal } from "../../components/AnimationModal";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isNewAccountCreated, setIsNewAccountCreated] = useState(false);

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    async function handleCreateAccount(){ 
        if(password !== confirmPassword) {
            Alert.alert(
                "Opa",
                "As senhas têm que serem iguais"
            )
        }

        try {
            const schema = Yup.object().shape({
                confirmPassword: Yup.string()
                .required("Senha obrigatória")
                .min(6, "a senha deve conter no mínimo 6 digitos"),

                password: Yup.string()
                .required("Senha obrigatória")
                .min(6, "a senha deve conter no mínimo 6 digitos"),

                phoneNumber: Yup.string()
                .required("número de telefone obrigatório")
                .min(11, "o número de telefone deve conter 11 digitos"),

                email: Yup.string()
                .required("e-mail obrigatório")
                .email(),

                name: Yup.string()
                .required("Nome obrigatório"),
            });

            await schema.validate({ name, email, phoneNumber, password, confirmPassword });

            setIsNewAccountCreated(true);
        } catch(error){
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

                    {
                        isNewAccountCreated && 
                        <AnimationModal 
                            title="Sucesso"
                            description="A sua conta foi criada com sucesso!"
                            onPress={handleGoBack}
                        />
                    }
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}