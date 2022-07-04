import React from "react";
import {
    InfoContainer,
    InfoTitle,
    Info
} from './styles';

interface DoctorDetailsInfoProps {
    title: string;
    info: string;
}

export function DoctorDetailsInfo({
    title,
    info
}: DoctorDetailsInfoProps){
    return (
        <InfoContainer>
            <InfoTitle>
                {title}
            </InfoTitle>

            <Info>
                {info}
            </Info>
        </InfoContainer>
    )
}