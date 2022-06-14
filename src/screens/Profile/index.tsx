import React from "react";
import {
    Container,
    Header,
    Title,
    ChangeModeWrapper,
    UserInfo,
    UserPhoto,
    UserName,
    UserEmail,
    OptionsWrapper,
    LogoutWrapper
} from "./styles";

import { useAuth } from "../../hooks/auth";

import { ProfileOption } from "../../components/ProfileOption";

export function Profile(){
    const { user } = useAuth();

    return (
        <Container>
            <Header>
                <Title>Perfil</Title>

                <ChangeModeWrapper />
            </Header>

            <UserInfo>
                <UserPhoto />
                
                <UserName>{user.name}</UserName>

                <UserEmail>{user.email}</UserEmail>
            </UserInfo>

            <OptionsWrapper>
                <ProfileOption 
                    title="Editar Perfil"
                />

                <ProfileOption 
                    title="Histórico"
                />

                <ProfileOption 
                    title="Regras"
                />
            </OptionsWrapper>

            <LogoutWrapper>
                <ProfileOption 
                    title="Sair de sua conta"
                />
            </LogoutWrapper>
        </Container>
    )
}