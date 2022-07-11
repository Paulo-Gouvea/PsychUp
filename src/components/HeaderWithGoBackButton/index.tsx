import React from "react";
import {
    Container,
    Title,
    Helper
} from './styles';

import { GreenGoBackButton } from "../GreenGoBackButton";

interface HeaderWithGoBackButtonProps {
    handleGoBack: () => void;
    title: string;
} 

export function HeaderWithGoBackButton({
    handleGoBack,
    title
}: HeaderWithGoBackButtonProps){
    return (
        <Container>
            <GreenGoBackButton 
                onPress={handleGoBack}
            />

            <Title>
                {title}       
            </Title>

            <Helper />
        </Container>  
    )
}