import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
    padding: ${getStatusBarHeight() + 60}px ${RFValue(25)}px ${getBottomSpace() + RFValue(140)}px;
    align-items: flex-start;
`;

export const Title = styled.Text`
    margin: ${RFValue(32)}px 0 ${RFValue(15)}px;
    font-size: ${RFValue(18)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_REGULAR};
        color: ${theme.COLORS.BLACK_700};
    `};
`;