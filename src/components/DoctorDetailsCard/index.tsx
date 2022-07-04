import React from "react";
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

interface DoctorDetailsCardProps {
    photo: string;
    name: string;
    specialization: string;
    address: string;
}

export function DoctorDetailsCard({
    photo,
    name,
    specialization,
    address
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

            <DoctorCardButton>
                <DoctorCardButtonText>
                    Agendar Consulta
                </DoctorCardButtonText>
            </DoctorCardButton>
        </Container>
    )
}