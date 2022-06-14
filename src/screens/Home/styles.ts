import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
    padding: ${getStatusBarHeight() + 60}px ${RFValue(25)}px ${getBottomSpace()}px;
`;

export const UserWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserPhoto = styled.View`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 8px;
    background-color: red;
    
    margin-right: 12px;
`;

export const UserInfo = styled.View`

`;

export const UserName = styled.Text`
    font-size: ${RFValue(20)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_BOLD};
        color: ${theme.COLORS.BLACK_700};
    `};
`;

export const UserEmail = styled.Text`
    font-size: ${RFValue(12)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.BLACK_700};
    `};
`;

export const SearchInputContainer = styled.View`
    margin-top: ${RFValue(60)}px;
`;