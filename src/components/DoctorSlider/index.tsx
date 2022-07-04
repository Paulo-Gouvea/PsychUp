import React from "react";
import { FlatList, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
    Container,
    Header,
    Title,
    Button,
    ButtonTitle,
    ButtonIconWrapper,
    DoctorCard,
    DoctorCardImage,
    DoctorCardInfo,
    DoctorName,
    DoctorSpecialization,
} from "./styles";

import { useTheme } from "styled-components/native";

interface DoctorSliderProps extends TouchableOpacityProps{
    title: string;
    list: readonly any[];
}

export function DoctorSlider({
    title,
    list,
    ...rest
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

            <FlatList
                data={list}
                renderItem={({item}) => (
                    <DoctorCard
                        {...rest}
                    >
                        <DoctorCardImage 
                            source={{ uri: item.photo }}
                        />
                        <DoctorCardInfo>
                            <DoctorName>
                                Dr. {item.name}
                            </DoctorName>

                            <DoctorSpecialization>
                                {item.specialization}
                            </DoctorSpecialization>
                        </DoctorCardInfo>
                    </DoctorCard>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    )
}