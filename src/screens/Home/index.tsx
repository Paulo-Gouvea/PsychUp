import React from "react";
import { 
    Container 
} from "./styles";

import { useAuth } from "../../hooks/auth";

export function Home(){
    const { user } = useAuth();

    return (
        <Container>
            
        </Container>
    )
}