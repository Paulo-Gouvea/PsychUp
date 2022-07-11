import React from "react";
import {
    Container,
    Day,
    Times,
} from './styles';

import { TimeButton } from "../TimeButton";
interface DateAndTImeContainerProps {
    day: string;
    times: string[];
}

export function DateAndTimeContainer({
    day,
    times,
}: DateAndTImeContainerProps){
    return (
        <Container>
            <Day>{day}</Day>

            <Times>
                {
                    times.map(item => (
                        <TimeButton 
                            key={item}
                            title={item}
                        />
                    ))
                }
            </Times>
        </Container>
    )
}