import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
    padding: ${getStatusBarHeight() + 60}px ${RFValue(25)}px ${getBottomSpace()}px;
    align-items: flex-start;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    margin-left: ${RFValue(26)}px;

    font-size: ${RFValue(23)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_REGULAR};
        color: ${theme.COLORS.BLACK_700};
    `};
`;