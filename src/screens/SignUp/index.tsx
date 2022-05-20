import React from "react";

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
    return (
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
                />

                <Input 
                    iconName="mail"
                    placeholder="Digite o seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <PasswordInput 
                    placeholder="Digite a sua senha"
                />

                <Input 
                    iconName="phone"
                    placeholder="Digite o seu telefone"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    maxLength={11}
                />

                <Input 
                    iconName="home"
                    placeholder="Digite o seu cep"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    maxLength={8}
                />      
            </InputWrapper>

            <Button 
                title="Criar conta"
                onPress={() => console.log("Botão de criar conta")}
            />
        </Container>
    )
}