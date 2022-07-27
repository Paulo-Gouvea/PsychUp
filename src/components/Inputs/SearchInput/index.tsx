import React from "react"; 
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
    Container,
    InputWrapper,
    TouchableIconWrapper,
} from "./styles";

import { useTheme } from "styled-components/native";

interface SearchInputProps extends TextInputProps {

}

export function SearchInput({ 
    ...rest
} : SearchInputProps){
    const theme = useTheme();

    return (
        <Container>
            <InputWrapper 
                {...rest}
            />
            <TouchableIconWrapper>
                <Feather 
                    name="search"
                    size={22}
                    color={theme.COLORS.GREY_900}
                />
            </TouchableIconWrapper>
        </Container>
    )
}