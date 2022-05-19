import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: ${RFValue(52)}px;
    background-color: ${({ theme }) => theme.COLORS.TEAL_900};

    align-items: center;
    justify-content: center;

    border-radius: 6px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.WHITE_900};
    `};
`;