import React from "react";
import {
    Container,
    Day,
    Times,
    TimeButton,
    TimeButtonTitle,
} from './styles';

export function DateAndTimeContainer(){
    return (
        <Container>
            <Day>6 de Janeiro</Day>

            <Times>
                <TimeButton>
                    <TimeButtonTitle>
                        11:00
                    </TimeButtonTitle>
                </TimeButton>

                <TimeButton>
                    <TimeButtonTitle>
                        11:30
                    </TimeButtonTitle>
                </TimeButton>

                <TimeButton>
                    <TimeButtonTitle>
                        12:30
                    </TimeButtonTitle>
                </TimeButton>

                <TimeButton>
                    <TimeButtonTitle>
                        13:30
                    </TimeButtonTitle>
                </TimeButton>

                <TimeButton>
                    <TimeButtonTitle>
                        15:00
                    </TimeButtonTitle>
                </TimeButton>

                <TimeButton>
                    <TimeButtonTitle>
                        17:00
                    </TimeButtonTitle>
                </TimeButton>
            </Times>
        </Container>
    )
}