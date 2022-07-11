import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface TimeButtonStyleProps {
    isPressed: boolean;
}

export const Container = styled(TouchableOpacity)<TimeButtonStyleProps>`
    width: ${RFValue(85)}px;
    height: ${RFValue(40)}px;

    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GREY_700};
    margin-bottom: ${RFValue(10)}px;

    align-items: center;
    justify-content: center;

    ${({ isPressed, theme }) => isPressed && css`
        background-color: ${theme.COLORS.TEAL_900};
        border-width: 0;
    `};
`;

export const Title = styled.Text<TimeButtonStyleProps>`
    font-size: ${RFValue(15)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};

    ${({ isPressed, theme }) => isPressed && css`
        color: ${theme.COLORS.WHITE_900};
    `};
`;