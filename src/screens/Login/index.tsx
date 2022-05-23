import React, {
    useState,
} from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,     
    Platform,
    Alert 
} from "react-native";

import {
    Container,
    Logo,
    InputWrapper,
    ForgetPasswordWrapper,
    ForgetPasswordButton,
    ForgetPasswordButtonTitle,
    SocialAccountWrapper,
    SocialAccountTitle,
    SocialAccountButtonWrapper,
    SignUpWrapper,
    SignUpQuestion,
    SignUpButton,
    SignUpButtonTitle,
} from "./styles";

import * as Yup from "yup";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import LogoImg from "../../assets/Logo.svg";
import GoogleImg from "../../assets/Google.svg";
import AppleImg from "../../assets/Apple.svg";
import FacebookImg from "../../assets/Facebook.svg";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";
import { SocialAccountButton } from "../../components/SocialAccountButton";

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    const { signIn } = useAuth();

    async function handleLogin(){
        try {
            const schema = Yup.object().shape({
                password: Yup.string()
                .required("Senha obrigatória")
                .min(6, "a senha deve conter no mínimo 6 digitos"),

                email: Yup.string()
                .required("e-mail obrigatório")
                .email("Digite um e-mail valido"),
            });

            await schema.validate({ email, password });

            signIn(email, password);
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

    function handleSignUp(){
        navigation.navigate("signup");
    }

    function handleForgotPassword(){
        navigation.navigate("forgotpassword");
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
                        title="Seja bem-vindo"
                        description="Entre em sua conta"
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

                        <PasswordInput 
                            placeholder="Digite a sua senha"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </InputWrapper>

                    <Button 
                        title="Entrar"
                        onPress={handleLogin}
                    />

                    <ForgetPasswordWrapper>
                        <ForgetPasswordButton
                            onPress={handleForgotPassword}
                        >
                            <ForgetPasswordButtonTitle>
                                Esqueceu a sua senha?
                            </ForgetPasswordButtonTitle>
                        </ForgetPasswordButton>
                    </ForgetPasswordWrapper>

                    <SocialAccountWrapper>
                        <SocialAccountTitle>
                            ou continue utilizando outro serviço
                        </SocialAccountTitle>

                        <SocialAccountButtonWrapper>
                            <SocialAccountButton 
                                Icon={GoogleImg}
                                width={30}
                                height={30}
                                onPress={() => console.log("Botão do Google")}
                            />

                            {
                                Platform.OS === "ios" &&
                                <SocialAccountButton 
                                    Icon={AppleImg}
                                    width={40}
                                    height={40}
                                    onPress={() => console.log("Botão da Apple")}
                                />      
                            }

                            <SocialAccountButton 
                                Icon={FacebookImg}
                                width={35}
                                height={35}
                                onPress={() => console.log("Botão do Facebook")}
                            />
                        </SocialAccountButtonWrapper>
                    </SocialAccountWrapper>

                    <SignUpWrapper>
                        <SignUpQuestion>
                            Não tem uma conta?
                        </SignUpQuestion>
                        <SignUpButton
                            onPress={handleSignUp}
                        >
                            <SignUpButtonTitle>
                                Crie aqui
                            </SignUpButtonTitle>
                        </SignUpButton>
                    </SignUpWrapper>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}