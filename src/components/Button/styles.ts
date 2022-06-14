import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonStyleprops {
    isLoading?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonStyleprops>`
    width: 100%;
    height: ${RFValue(52)}px;
    background-color: ${({ theme, isLoading }) => isLoading ?
    theme.COLORS.TEAL_500 : theme.COLORS.TEAL_900};

    align-items: center;
    justify-content: center;

    border-radius: 6px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_MEDIUM};
        color: ${theme.COLORS.WHITE_900};
    `};
`;