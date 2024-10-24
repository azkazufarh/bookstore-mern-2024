import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
}

const googleProvider = new GoogleAuthProvider();

// authProvider
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    // manage user
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3313003373.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if (user) {
                const {email, displayName, photoURL} = user;
                const currentUser = {
                    email,
                    username: displayName,
                    photo: photoURL
                }
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const value = {currentUser, loading, registerUser, loginUser, signInWithGoogle, logout};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

