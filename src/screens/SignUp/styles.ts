import styled from "styled-components/native";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
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