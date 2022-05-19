import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GREY_700};

    align-items: center;
    justify-content: center;
`;