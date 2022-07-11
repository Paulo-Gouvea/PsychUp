import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    height: 150px;
    width: 100%;
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

export const TimeButton = styled(TouchableOpacity)`
    width: ${RFValue(85)}px;
    height: ${RFValue(40)}px;

    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GREY_700};

    align-items: center;
    justify-content: center;
`;

export const TimeButtonTitle = styled.Text`
    font-size: ${RFValue(15)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;
