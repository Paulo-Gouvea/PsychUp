import styled from "styled-components/native";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${getStatusBarHeight() + 40}px ${RFValue(25)}px ${getBottomSpace()}px;
`;

export const Logo = styled.View`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;

    margin: ${RFValue(25)}px 0;
`;

export const InputWrapper = styled.View`
    margin: ${RFValue(25)}px 0 ${RFValue(10)}px;
`;