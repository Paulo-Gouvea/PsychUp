import React from "react";
import { Container } from './styles';

import { useNavigation, useRoute } from "@react-navigation/native";
import { DoctorDetailsInfo } from "../../components/DoctorDetailsInfo";
import { DoctorDetailsCard } from "../../components/DoctorDetailsCard";

import { DoctorInterface } from "../../interfaces";
import { HeaderWithGoBackButton } from "../../components/HeaderWithGoBackButton";

export function DoctorDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const doctor = route.params as DoctorInterface;

    console.log(doctor);

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container>
            <HeaderWithGoBackButton 
                handleGoBack={handleGoBack}
                title="Detalhes do Doutor"
            />             

            <DoctorDetailsCard 
                photo={doctor.photo}
                name={`Dr. ${doctor.name}`}
                specialization={doctor.specialization}
                address={doctor.address}
            />

            <DoctorDetailsInfo 
                title="Sobre o Doutor"
                info={doctor.about}
            />

            <DoctorDetailsInfo 
                title="Horário de Consulta"
                info={doctor.work_schedule}
            />
        </Container>
    )
}