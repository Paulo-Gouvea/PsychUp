import React from "react";
import { TouchableOpacityProps } from "react-native";
import { 
    Container,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface GoBackButtonProps extends TouchableOpacityProps {}

export function GoBackButton({
    ...rest
}: GoBackButtonProps){
    return (
        <Container
            {...rest}
        >
            <Ionicons 
                name="chevron-back"
                size={35}
            />
        </Container>
    );
}