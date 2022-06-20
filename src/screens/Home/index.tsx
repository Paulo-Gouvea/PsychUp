import React from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,     
    ScrollView,
} from "react-native";
import { 
    Container,
    UserWrapper,
    UserPhoto,
    UserInfo,
    UserName,
    UserEmail,
    SearchInputContainer,
} from "./styles";

import { useAuth } from "../../hooks/auth";

import { SearchInput } from "../../components/SearchInput";
import { DoctorSlider } from "../../components/DoctorSlider";

export function Home(){
    const { user } = useAuth();

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Container>
                        <UserWrapper>
                            <UserPhoto
                                source={{ uri: "https://www.nicepng.com/png/detail/137-1379898_anonymous-headshot-icon-user-png.png" }}
                            />

                            <UserInfo>
                                <UserName>{user.name}</UserName>
                                <UserEmail>{user.email}</UserEmail>
                            </UserInfo>
                        </UserWrapper>

                        <SearchInputContainer>
                            <SearchInput 
                                placeholder="Procure aqui o seu médico"
                            />
                        </SearchInputContainer>

                        <DoctorSlider 
                            title="Mais Procurados"
                        />

                        <DoctorSlider 
                            title="Em Destaque"
                        />
                    </Container>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}