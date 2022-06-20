import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 60}px ${RFValue(25)}px ${getBottomSpace()}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_SEMI_BOLD};
        color: ${theme.COLORS.BLACK_900};
    `};
`;

export const ChangeModeWrapper = styled(TouchableOpacity)`
    width: ${RFValue(80)}px;
    height: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.COLORS.TEAL_900};

    border-radius: 6px;
    margin-left: ${RFValue(50)}px;
`;

export const UserInfo = styled.View`
    margin-top: ${RFValue(20)}px;
`;

export const UserPhoto = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;

    border-radius: 6px;
    margin-bottom: ${RFValue(10)}px;

    background-color: red;
`;

export const UserName = styled.Text`
    font-size: ${RFValue(23)}px;

    ${({ theme }) => css`
        color: ${theme.COLORS.BLACK_900};
        font-family: ${theme.FONTS.SOURCE_SERIF_PRO_SEMI_BOLD};
    `};
`;

export const UserEmail = styled.Text`
    margin-top: ${RFValue(6)}px;

    font-size: ${RFValue(14)}px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.ROBOTO_REGULAR};
        color: ${theme.COLORS.GREY_900};
    `};
`;

export const OptionsWrapper = styled.View`
    margin: ${RFValue(36)}px 0 0;

    height: ${RFValue(150)}px;
    justify-content: space-between;
`;

export const LogoutWrapper = styled.View`
    margin-top: ${RFValue(80)}px;;
`;