import React from "react";
import { Container } from './styles';

import { useNavigation, useRoute } from "@react-navigation/native";
import { DoctorDetailsInfo } from "../../components/DoctorDetails/DoctorDetailsInfo";
import { DoctorDetailsCard } from "../../components/DoctorDetails/DoctorDetailsCard";

import { DoctorInterface } from "../../interfaces";
import { HeaderWithGoBackButton } from "../../components/Headers/HeaderWithGoBackButton";

export function DoctorDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const doctor = route.params as DoctorInterface;

    function handleGoBack(){
        navigation.goBack();
    }

    function handleGoTimeAndDateScreen(){
        navigation.navigate('dateandtime');
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
                onPress={handleGoTimeAndDateScreen}
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