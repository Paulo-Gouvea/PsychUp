import React from "react";
import { ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
    Container,
    Header,
    Title,
    Button,
    ButtonTitle,
    ButtonIconWrapper,
    TestWrapper,
    Test
} from "./styles";

import { useTheme } from "styled-components/native";

interface DoctorSliderProps {
    title: string;
}

export function DoctorSlider({
    title
}: DoctorSliderProps){
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Button>
                    <ButtonTitle>
                        Veja mais
                    </ButtonTitle>

                    <ButtonIconWrapper>
                        <Entypo 
                            name="chevron-small-right"
                            size={15}
                            color={theme.COLORS.GREY_900}
                        />
                    </ButtonIconWrapper>
                </Button>
            </Header>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <TestWrapper>
                    <Test />
                    <Test />
                    <Test />
                </TestWrapper>
            </ScrollView>
        </Container>
    )
}