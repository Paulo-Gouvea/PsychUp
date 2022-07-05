import React from "react";
import { GreenGoBackButton } from "../../components/GreenGoBackButton";
import {
    Container,
    Header,
    Title,
} from './styles';

import { useNavigation, useRoute } from "@react-navigation/native";
import { DoctorDetailsInfo } from "../../components/DoctorDetailsInfo";
import { DoctorDetailsCard } from "../../components/DoctorDetailsCard";

import { DoctorInterface } from "../../interfaces";

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
            <Header>
                <GreenGoBackButton 
                    onPress={handleGoBack}
                />
                <Title>
                    Detalhes do Doutor
                </Title>
            </Header>   

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