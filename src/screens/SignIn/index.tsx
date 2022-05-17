import React from "react";

import {
    Container,
    Logo,
    InputWrapper,

} from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

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
            </InputWrapper>
        </Container>
    )
}