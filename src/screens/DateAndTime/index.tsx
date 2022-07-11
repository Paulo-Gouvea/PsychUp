import React from "react";
import { 
    Container,
    Title,
} from './styles';

import { useNavigation, useRoute } from "@react-navigation/native";

// import { DoctorInterface } from "../../interfaces";

import { HeaderWithGoBackButton } from "../../components/HeaderWithGoBackButton";
import { DateAndTimeContainer } from "../../components/DateAndTimeContainer";

export function DateAndTime(){
    const navigation = useNavigation();
    const route = useRoute();
    // const doctor = route.params as DoctorInterface;

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container>
            <HeaderWithGoBackButton 
                handleGoBack={handleGoBack}
                title="Data e Hora"
            />             

            <Title>Selecione o horário desejado:</Title>

            <DateAndTimeContainer />
        </Container>
    )
}