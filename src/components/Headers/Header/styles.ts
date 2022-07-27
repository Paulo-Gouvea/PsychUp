import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    margin-bottom: ${RFValue(6)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_BOLD};
        color: ${theme.COLORS.BLACK_700};
    `};
`;

export const Description = styled.Text`
    font-size: ${RFValue(16)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;