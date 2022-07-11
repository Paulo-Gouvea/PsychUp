import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    height: ${RFValue(120)}px;
    width: 100%;
    margin-bottom: ${RFValue(32)}px;;
`;

export const Day = styled.Text`
    margin-bottom: ${RFValue(15)}px;
    font-size: ${RFValue(18)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_REGULAR};
        color: ${theme.COLORS.BLACK_700};
    `};
`;

export const Times = styled.View`
    flex: 1;

    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
`;