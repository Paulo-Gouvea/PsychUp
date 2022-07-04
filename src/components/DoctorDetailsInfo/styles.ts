import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const InfoContainer = styled.View`
    margin-top: ${RFValue(24)}px;
`;

export const InfoTitle = styled.Text`
    font-size: ${RFValue(20)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_REGULAR};
        color: ${theme.COLORS.BLACK_900};
    `};

    margin-bottom: ${RFValue(8)}px;
`;

export const Info = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(22)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;