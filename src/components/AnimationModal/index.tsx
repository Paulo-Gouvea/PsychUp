import React from "react";
import { 
    ModalProps 
} from "react-native";
import {
    Container,
    ModalPosition,
    ModalContent,
    ModalInformationWrapper,
    ModalAnimationWrapper,
    ModalTitle,
    ModalDescription,
} from "./styles";

import { Button } from "../Button";

interface AppModalProps extends ModalProps {
    title: string;
    description: string;
    onPress: () => void;
}

export function AnimationModal({
    title,
    description,
    onPress,
    ...rest
}: AppModalProps){
    return (
        <Container
            {...rest}
        >
            <ModalPosition>
                <ModalContent>
                    <ModalAnimationWrapper>

                    </ModalAnimationWrapper>

                    <ModalInformationWrapper>
                        <ModalTitle>
                            {title}
                        </ModalTitle>

                        <ModalDescription>
                            {description}
                        </ModalDescription>

                        <Button 
                            title="Ok"
                            onPress={onPress}
                        />
                    </ModalInformationWrapper>
                </ModalContent>
            </ModalPosition>
        </Container>
    );
}