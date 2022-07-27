import React from "react";
import {
    Container,
    Title,
    Description
} from "./styles";

interface HeaderProps {
    title: string;
    description: string;
}

export function Header({
    title,
    description
}: HeaderProps){
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
}