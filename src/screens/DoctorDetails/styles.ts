import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
    padding: ${getStatusBarHeight() + 60}px ${RFValue(25)}px ${getBottomSpace()}px;
    align-items: flex-start;
`;