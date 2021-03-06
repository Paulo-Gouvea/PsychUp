import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface InputStyleProps {
    isFocused: boolean;
}

export const Container = styled.View<InputStyleProps>`
    width: 100%;
    height: ${RFValue(50)}px;

    flex-direction: row;

    margin-bottom: ${RFValue(10)}px;

    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GREY_700};

    ${({ theme, isFocused }) => isFocused && css`
        border-color: ${theme.COLORS.TEAL_900};
    `};
`;

export const IconWrapper = styled.View`
    width: ${RFValue(50)}px;
    height: 100%;

    align-items: center;
    justify-content: center;
    
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

export const InputWrapper = styled(TextInput)`
    flex: 1;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    font-size: ${RFValue(14)}px;
`;