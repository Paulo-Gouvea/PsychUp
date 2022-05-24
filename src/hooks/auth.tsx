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
    forgotPassword: (email: string) => Promise<void>;
    isLoading: boolean;
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | null;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps){
    const [isLoading, setIsLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    async function signIn(email: string, password: string){
        if(!email || !password){
            return Alert.alert("Login", "Informe o e-mail e a senha");
        }

        setIsLoading(true);

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
            setIsLoading(false);
        });
    }

    async function forgotPassword(email: string){
        if(!email){
            return;
        }

        setIsLoading(true);

        auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            setOpenModal(true);
        })
        .catch(() => {
            Alert.alert("Redefinir senha", "Não foi possível enviar o e-mail para redefinir a senha");
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                forgotPassword,
                isLoading,
                openModal,
                setOpenModal,
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