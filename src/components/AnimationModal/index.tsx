import React from "react";
import { 
    ModalProps 
} from "react-native";
import AnimatedLottieView, { AnimationObject } from "lottie-react-native";
import {
    Container,
    ModalPosition,
    ModalContent,
    ModalInformationWrapper,
    ModalAnimationWrapper,
    ModalTitle,
    ModalDescription,
} from "./styles";

import { Button } from "../Buttons/Button";

interface AppModalProps extends ModalProps {
    animationSource: string | AnimationObject | { uri: string; };
    title: string;
    description: string;
    onPress: () => void;
}

export function AnimationModal({
    animationSource,
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
                        <AnimatedLottieView 
                            source={animationSource}
                            style={{ height: 200 }}
                            resizeMode='contain'
                            autoPlay
                            loop
                        />
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