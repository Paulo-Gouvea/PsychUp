import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 95%;
    height: ${RFValue(164)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE_900};

    border-radius: 8px;

    margin-top: ${RFValue(23)}px;
    padding: ${RFValue(12)}px;

    align-items: center;
    justify-content: space-between;
`;

export const DoctorSummary = styled.View`
    flex-direction: row;
`;

export const DoctorDetailsImage = styled.Image`
    width: ${RFValue(78)}px;
    height: ${RFValue(78)}px;
    border-radius: 8px;
`;

export const DoctorInfo = styled.View`
    margin-left: ${RFValue(10)}px;
    flex: 1;
    justify-content: space-between;
`;

export const DoctorName = styled.Text`
    font-size: ${RFValue(19)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_REGULAR};
        color: ${theme.COLORS.BLACK_700};
    `};
`;

export const DoctorSpecialization = styled.Text`
    font-size: ${RFValue(12)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;

export const DoctorAddress = styled.Text`
    font-size: ${RFValue(12)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;

export const DoctorCardButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.TEAL_900};
    width: 60%;
    height: 25%;

    border-radius: 8px;

    align-items: center;
    justify-content: center;
`;

export const DoctorCardButtonText = styled.Text`
    font-size: ${RFValue(14)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_BOLD};
        color: ${theme.COLORS.WHITE_900};
    `};
`;
