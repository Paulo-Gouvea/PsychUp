import React, { 
    createContext, 
    ReactNode,
    useContext,
    useState
} from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

interface User {
    id?: string;
    name: string;
    email: string;
    phoneNumber: string;
}

interface AuthContextData {
    signIn: (email: string, password: string) => Promise<void>;
    createUser: (email: string, password: string, name: string, phoneNumber: string) => void;
    forgotPassword: (email: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoading: boolean;
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    errorMessageTitle: string;
    setErrorMessageTitle: React.Dispatch<React.SetStateAction<string>>;
    errorMessageDescription: string;
    setErrorMessageDescription: React.Dispatch<React.SetStateAction<string>>;
    user: User | null;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps){
    const [isLoading, setIsLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [errorMessageTitle, setErrorMessageTitle] = useState("");
    const [errorMessageDescription, setErrorMessageDescription] = useState("");
    const [user, setUser] = useState<User>({} as User);

    async function signIn(email: string, password: string){
        if(!email || !password){
            return;
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
            .catch(() => {
                setErrorMessageTitle("Erro ao realizar o login");
                setErrorMessageDescription("Não foi possivel buscar os dados de perfil do usuário");
                setOpenModal(true);
            })
        })
        .catch(error => {
            const { code } = error;

            if(code === "auth/user-not-found" || code === "auth/wrong-password") {
                setErrorMessageTitle("Erro de login");
                setErrorMessageDescription("Verifique se o e-mail e a senha estão corretos.");
                setOpenModal(true);
            } else {
                setErrorMessageTitle("Erro de login");
                setErrorMessageDescription("No momento não foi possível realizar o login.");
                setOpenModal(true);
            }
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    async function createUser(email: string, password: string, name: string, phoneNumber: string) {
        await auth()
        .createUserWithEmailAndPassword(email, password)
        .then( account  => {
            firestore()
            .collection("users")
            .doc(account.user.uid)
            .set({
                name,
                email,
                phoneNumber
            })
            .catch( () => {
                setErrorMessageTitle("Erro na criação da conta");
                setErrorMessageDescription("Erro ao adicionar o usuario no nosso sistema no momento.");
                setOpenModal(true);
            })
        })
        .catch(error => {
            if(error.code === 'auth/email-already-in-use'){
                setErrorMessageTitle("Erro na criação da conta");
                setErrorMessageDescription("O e-mail digitado já está em uso.");
                setOpenModal(true);
                return;
            }
        })
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
        .catch((error) => {
            const { code } = error;
            if(code === "auth/user-not-found"){
                setErrorMessageTitle("Erro para encontrar o usuário");
                setErrorMessageDescription("O e-mail digitado não foi encontrado em nosso sistema");
                setOpenModal(true);
            } else {
                setErrorMessageTitle("Erro de redefinição de senha");
                setErrorMessageDescription("Não foi possível enviar o e-mail para redefinir a senha");
                setOpenModal(true);
            }
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    async function signOut(){
        await auth()
        .signOut()
        .then(() => {
            setUser({} as User);
        }    
        )
        .catch((e) => {
            console.log(e)   
        });
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                createUser,
                forgotPassword,
                signOut,
                isLoading,
                openModal,
                setOpenModal,
                errorMessageTitle,
                setErrorMessageTitle,
                errorMessageDescription,
                setErrorMessageDescription,
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