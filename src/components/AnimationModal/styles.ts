import styled, { css } from "styled-components/native";
import { Modal } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(Modal)``;

export const ModalPosition = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #00000099;
`;

export const ModalContent = styled.View`
    width: ${RFValue(280)}px;
    height: ${RFValue(430)}px;

    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.WHITE_900};
`;

export const ModalInformationWrapper = styled.View`
    flex: 1;
    align-items: center;

    padding: 0 ${RFValue(22)}px;
`;

export const ModalAnimationWrapper = styled.View`
    width: 100%;
    height: 40%;

    padding-top: ${RFValue(35)}px;

    align-items: center;
    justify-content: center;
`;

export const ModalTitle = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;

    margin: ${RFValue(22)}px 0;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_MEDIUM};
        color: ${theme.COLORS.BLACK_700};
    `};
`;

export const ModalDescription = styled.Text`
    font-size: ${RFValue(15)}px;
    text-align: center;

    margin-bottom: ${RFValue(42)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.BLACK_700};
    `};
`;