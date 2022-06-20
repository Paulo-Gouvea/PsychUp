import React from "react";
import { Alert } from "react-native";
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
    const { user, signOut } = useAuth();

    function handleSignOut(){
        Alert.alert(
            "Saindo do aplicativo",
            "Você deseja mesmo sair de sua conta?",
            [
                {
                    text: "Não",
                    onPress: () => { return; }
                },
                {
                    text: "Sim",
                    onPress: () => signOut(),
                }
            ]
        );
    }

    return (
        <Container>
            <Header>
                <Title>Perfil</Title>

                <ChangeModeWrapper />
            </Header>

            <UserInfo>
                <UserPhoto 
                    source={{ uri: "https://www.nicepng.com/png/detail/137-1379898_anonymous-headshot-icon-user-png.png" }}
                />
                
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
                    onPress={handleSignOut}
                />
            </LogoutWrapper>
        </Container>
    )
}