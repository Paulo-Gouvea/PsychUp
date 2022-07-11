import React from "react";
import { 
    Container,
    Title,
} from './styles';

import { useNavigation, useRoute } from "@react-navigation/native";

// import { DoctorInterface } from "../../interfaces";

import { HeaderWithGoBackButton } from "../../components/HeaderWithGoBackButton";
import { DateAndTimeContainer } from "../../components/DateAndTimeContainer";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";

export function DateAndTime(){
    const navigation = useNavigation();
    const route = useRoute();
    // const doctor = route.params as DoctorInterface;

    function handleGoBack(){
        navigation.goBack();
    }

    const TESTE = [
        {
            day: "6 de Janeiro",
            times: [
                "11:00",
                "11:30",
                "12:30",
                "13:30",
                "15:00",
                "17:00"
            ]
        },
        {
            day: "7 de Janeiro",
            times: [
                "11:00",
                "12:30",
                "13:30",
                "14:30",
                "15:00",
                "16:00"
            ]
        },
        {
            day: "8 de Janeiro",
            times: [
                "11:00",
                "12:30",
                "13:30",
                "14:30",
                "15:00",
                "16:00"
            ]
        },
        {
            day: "9 de Janeiro",
            times: [
                "11:00",
                "12:30",
                "13:30",
                "14:30",
                "15:00",
                "16:00"
            ]
        },
        {
            day: "10 de Janeiro",
            times: [
                "11:00",
                "12:30",
                "13:30",
                "14:30",
                "15:00",
                "16:00"
            ]
        },
        {
            day: "11 de Janeiro",
            times: [
                "11:00",
                "12:30",
                "13:30",
                "14:30",
                "15:00",
                "16:00"
            ]
        },
    ]

    return (
        <Container>
            <HeaderWithGoBackButton 
                handleGoBack={handleGoBack}
                title="Data e Hora"
            />             

            <Title>Selecione o horário desejado:</Title>

            <FlatList
                data={TESTE}
                keyExtractor={(item) => item.day}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <DateAndTimeContainer 
                        day={item.day}
                        times={item.times}
                    />
                )}
            />

            <Button 
                title="Próximo"
            />
        </Container>
    )
}