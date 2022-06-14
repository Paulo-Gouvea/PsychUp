import styled, { css } from "styled-components/native";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    padding: ${getStatusBarHeight() + 80}px ${RFValue(25)}px ${getBottomSpace()}px;
`;

export const Logo = styled.View`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;

    margin-bottom: ${RFValue(15)}px;
`;

export const InputWrapper = styled.View`
    margin: ${RFValue(25)}px 0 ${RFValue(10)}px;
`;

export const ForgetPasswordWrapper = styled.View`
    width: 100%;
    margin: ${RFValue(20)}px 0 0;

    align-items: center;
    justify-content: center;
`;

export const ForgetPasswordButton = styled(TouchableOpacity)`

`;

export const ForgetPasswordButtonTitle = styled.Text`
    font-size: ${RFValue(14)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_BOLD};
        color: ${theme.COLORS.BLACK_700};
    `};
`;

export const SocialAccountWrapper = styled.View`
    width: 100%;
    margin-top: ${RFValue(40)}px;

    align-items: center;
`;

export const SocialAccountTitle = styled.Text`
    font-size: ${RFValue(14)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;

export const SocialAccountButtonWrapper = styled.View`
    margin-top: ${RFValue(14)}px;
    flex-direction: row;
`;

export const SignUpWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: ${RFValue(30)}px 0 ${getBottomSpace()}px;
`;

export const SignUpQuestion = styled.Text`
    font-size: ${RFValue(14)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;

export const SignUpButton = styled(TouchableOpacity)``;

export const SignUpButtonTitle = styled.Text`
    font-size: ${RFValue(14)}px;

    margin-left: ${RFValue(6)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_BOLD};
        color: ${theme.COLORS.BLACK_700};
    `};
`;