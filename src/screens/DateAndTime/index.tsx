import React from "react";
import { View } from "react-native";
import { 
    Container,
    Title,
    CalendarWrapper,
} from './styles';

import { useNavigation, useRoute } from "@react-navigation/native";

// import { DoctorInterface } from "../../interfaces";

import { HeaderWithGoBackButton } from "../../components/Headers/HeaderWithGoBackButton";
import { Calendar } from "../../components/Calendar";
// import { Button } from "../../components/Button";

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

            <Title>Selecione a data desejada:</Title>

            <CalendarWrapper >
                <Calendar />
            </CalendarWrapper>
        </Container>
    )
}