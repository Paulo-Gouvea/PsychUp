import React from "react";
import { GreenGoBackButton } from "../../components/GreenGoBackButton";
import {
    Container,
    Header,
    Title,
} from './styles';

import { useNavigation } from "@react-navigation/native";
import { DoctorDetailsInfo } from "../../components/DoctorDetailsInfo";
import { DoctorDetailsCard } from "../../components/DoctorDetailsCard";

export function DoctorDetails(){
    const navigation = useNavigation();

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
                photo='http://www.github.com/paulo-gouvea.png'
                name="Dr. Matthew Burke"
                specialization="Cardiologist Specialist"
                address="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />

            <DoctorDetailsInfo 
                title="Sobre o Doutor"
                info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, cumque distinctio! Veritatis consequuntur fugit a doloribus. Quaerat incidunt, ipsa autem dolore animi aut, ab tenetur quos, molestiae sequi sint nemo."
            />

            <DoctorDetailsInfo 
                title="Horário de Consulta"
                info="Seg - Sex, 10:00 AM - 18:00 PM"
            />
        </Container>
    )
}