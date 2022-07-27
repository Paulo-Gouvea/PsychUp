import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.COLORS.GREY_500};

    border-radius: 6px;

    flex-direction: row;
`;

export const InputWrapper = styled(TextInput)`
    flex: 1;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    padding-left: ${RFValue(25)}px;

    font-size: ${RFValue(14)}px;
`;

export const TouchableIconWrapper = styled.TouchableOpacity`
    width: ${RFValue(50)}px;
    height: 100%;

    align-items: center;
    justify-content: center;
    
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;