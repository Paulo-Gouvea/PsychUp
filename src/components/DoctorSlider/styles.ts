import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(300)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin: ${RFValue(15)}px 0;
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_SEMI_BOLD};
        color: ${theme.COLORS.BLACK_900};
    `};
`;

export const Button = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;

export const ButtonIconWrapper = styled.View`
    margin-top: 3px;
`;

export const TestWrapper = styled.View`
    flex-direction: row;
`;

export const Test = styled.View`
    background-color: red;
    width: ${RFValue(160)}px;
    height: ${RFValue(220)}px;

    border-radius: 6px;

    margin-right: 16px;
`;