import React, { 
    createContext, 
    ReactNode,
    useContext,
    useState
} from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}

interface AuthContextData {
    signIn: (email: string, password: string) => Promise<void>;
    isLogging: boolean;
    user: User | null;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps){
    const [isLogging, setIsLogging] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    async function signIn(email: string, password: string){
        if(!email || !password){
            return Alert.alert("Login", "Informe o e-mail e a senha");
        }

        setIsLogging(true);

        auth()
        .signInWithEmailAndPassword(email, password)
        .then(account => {
            firestore()
            .collection("users")
            .doc(account.user.uid)
            .get()
            .then(async(profile) => {
                const { name, email, phoneNumber } = profile.data() as User;

                if(profile.exists){
                    const userData = {
                        id: account.user.uid,
                        name,
                        email,
                        phoneNumber 
                    };
                    setUser(userData);
                }
            })
            .catch((error) => {
                Alert.alert("Login", "Não foi possivel buscar os dados de perfil do usuário.");
                console.log(error);
            })
        })
        .catch(error => {
            const { code } = error;

            if(code === "auth/user-not-found" || code === "auth/wrong-password") {
                return Alert.alert("Login", "E-mail e/ou senha inválida.");
            } else {
                return Alert.alert("Login", "Não foi possível realizar o login.");
            }
        })
        .finally(() => {
            setIsLogging(false);
        });
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                isLogging,
                user,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };