import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.TEAL_900};

    align-items: center;
    justify-content: center;
`;