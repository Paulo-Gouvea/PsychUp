import React, { useState, useEffect } from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,     
    ScrollView,
    ActivityIndicator,
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

import firestore from "@react-native-firebase/firestore";

import { useAuth } from "../../hooks/auth";

import { SearchInput } from "../../components/SearchInput";
import { DoctorSlider } from "../../components/DoctorSlider";

import { DoctorInterface } from "../../interfaces";

export function Home(){
    const [loading, setLoading] = useState(true);
    const [doctors, setDoctors] = useState<DoctorInterface[]>([]);

    const { user } = useAuth();

    useEffect(() => {
        const subscriber = firestore()
            .collection('doctors')
            .onSnapshot(querySnapshot => {
                const doctors = [];

                querySnapshot.forEach(documentSnapshot => {
                    doctors.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setDoctors(doctors);
                setLoading(false);
            })

            return () => subscriber();
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    } else {
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
                                list={doctors}
                            />

                            <DoctorSlider 
                                title="Em Destaque"
                                list={doctors}
                            />
                        </Container>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}