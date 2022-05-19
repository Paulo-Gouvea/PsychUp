import React from "react";

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

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";
import { SocialAccountButton } from "../../components/SocialAccountButton";

export function SignIn(){
    return (
        <Container>
            <Logo />

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
                    <SocialAccountButton />
                    <SocialAccountButton />
                    <SocialAccountButton />
                </SocialAccountButtonWrapper>
            </SocialAccountWrapper>

            <SignUpWrapper>
                <SignUpQuestion>
                    Não tem uma conta?
                </SignUpQuestion>
                <SignUpButton>
                    <SignUpButtonTitle>
                        Crie aqui
                    </SignUpButtonTitle>
                </SignUpButton>
            </SignUpWrapper>
        </Container>
    )
}