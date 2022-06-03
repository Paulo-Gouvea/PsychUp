import React from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,     
    Platform,
} from "react-native";
import { 
    Container,
    UserWrapper,
    UserPhoto,
    UserInfo,
    UserName,
    UserEmail,
} from "./styles";

import { useAuth } from "../../hooks/auth";

export function Home(){
    const { user } = useAuth();

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <UserWrapper>
                        <UserPhoto>

                        </UserPhoto>

                        <UserInfo>
                            <UserName>{user.name}</UserName>
                            <UserEmail>{user.email}</UserEmail>
                        </UserInfo>
                    </UserWrapper>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}