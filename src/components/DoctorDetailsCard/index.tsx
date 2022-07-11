import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    DoctorSummary,
    DoctorDetailsImage,
    DoctorInfo,
    DoctorName,
    DoctorSpecialization,
    DoctorAddress,
    DoctorCardButton,
    DoctorCardButtonText,
} from "./styles";

interface DoctorDetailsCardProps extends TouchableOpacityProps {
    photo: string;
    name: string;
    specialization: string;
    address: string;
}

export function DoctorDetailsCard({
    photo,
    name,
    specialization,
    address,
    ...rest
}: DoctorDetailsCardProps){
    return (
        <Container>
            <DoctorSummary>
                <DoctorDetailsImage 
                    source={{ uri: photo }}
                />

                <DoctorInfo>
                    <DoctorName>{name}</DoctorName>

                    <DoctorSpecialization>{specialization}</DoctorSpecialization>

                    <DoctorAddress>{address}</DoctorAddress>
                </DoctorInfo>
            </DoctorSummary>

            <DoctorCardButton
                {...rest}
            >
                <DoctorCardButtonText>
                    Agendar Consulta
                </DoctorCardButtonText>
            </DoctorCardButton>
        </Container>
    )
}