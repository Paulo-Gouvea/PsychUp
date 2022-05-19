import React from "react";
import { Platform } from "react-native";

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

import LogoImg from "../../assets/Logo.svg";
import GoogleImg from "../../assets/Google.svg";
import AppleImg from "../../assets/Apple.svg";
import FacebookImg from "../../assets/Facebook.svg";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";
import { SocialAccountButton } from "../../components/SocialAccountButton";

export function SignIn(){
    return (
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
                    placeholder="Digite o seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <PasswordInput 
                    placeholder="Digite a sua senha"
                />
            </InputWrapper>

            <Button 
                title="Entrar"
                onPress={() => console.log("Botão de entrar")}
            />

            <ForgetPasswordWrapper>
                <ForgetPasswordButton
                    onPress={() => console.log("Botão de esquecer a senha")}
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
                    onPress={() => console.log("Botão de criar conta")}
                >
                    <SignUpButtonTitle>
                        Crie aqui
                    </SignUpButtonTitle>
                </SignUpButton>
            </SignUpWrapper>
        </Container>
    )
}