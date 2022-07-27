import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
`;

export const IconWrapper = styled.View`
    width: ${RFValue(36)}px;
    height: ${RFValue(36)}px;
    border-radius: ${RFValue(18)}px;

    align-items: center;
    justify-content: center;

    margin-right: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.COLORS.TEAL_900};
`;

export const OptionText = styled.Text`
    font-size: ${RFValue(14)}px;

    ${({ theme }) => css`
        color: ${theme.COLORS.BLACK_900};
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
    `};
`;
