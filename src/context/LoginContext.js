import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, getDisplayNameFromEmail } from "../firebase/config";

const MOCK_USERS = [
  { email: "dj@yo.com", password: "1234" },
];

export const LoginContext = createContext();

const saveUserToFirestore = async (uid, email, displayName, provider = "email") => {
  try {
    await setDoc(
      doc(db, "users", uid),
      {
        email,
        displayName: displayName || getDisplayNameFromEmail(email),
        provider,
        lastLogin: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (e) {
    console.error("Error guardando usuario en Firestore:", e);
  }
};

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
    uid: null,
    logged: false,
    error: null,
  });
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const displayName =
          firebaseUser.displayName || getDisplayNameFromEmail(firebaseUser.email);
        setUser({
          email: firebaseUser.email,
          displayName,
          uid: firebaseUser.uid,
          logged: true,
          error: null,
        });
      } else {
        const mockStored = localStorage.getItem("mockUser");
        if (mockStored) {
          try {
            const { email, displayName } = JSON.parse(mockStored);
            setUser({ email, displayName, uid: "mock", logged: true, error: null });
          } catch {
            setUser({ email: "", displayName: "", uid: null, logged: false, error: null });
          }
        } else {
          setUser({ email: "", displayName: "", uid: null, logged: false, error: null });
        }
      }
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  const login = (values) => {
    const match = MOCK_USERS.find(
      (u) => u.email === values.email && u.password === values.password
    );
    if (match) {
      const displayName = getDisplayNameFromEmail(match.email);
      setUser({
        email: match.email,
        displayName,
        uid: "mock",
        logged: true,
        error: null,
      });
      localStorage.setItem("mockUser", JSON.stringify({ email: match.email, displayName }));
      saveUserToFirestore("mock-" + match.email, match.email, displayName, "email");
    } else {
      setUser({
        email: null,
        displayName: "",
        uid: null,
        logged: false,
        error: "Datos Incorrectos",
      });
    }
  };

  const loginWithGoogle = async () => {
    setUser((prev) => ({ ...prev, error: null }));
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { email, uid, displayName: fbDisplayName } = result.user;
      const displayName = fbDisplayName || getDisplayNameFromEmail(email);
      await saveUserToFirestore(uid, email, displayName, "google");
      setUser({
        email,
        displayName,
        uid,
        logged: true,
        error: null,
      });
    } catch (error) {
      const errorMessage =
        error.code === "auth/popup-closed-by-user"
          ? "Inicio de sesión cancelado"
          : error.message || "Error al iniciar sesión con Google";
      setUser((prev) => ({
        ...prev,
        logged: false,
        error: errorMessage,
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem("mockUser");
    setUser({
      email: "",
      displayName: "",
      uid: null,
      logged: false,
      error: null,
    });
    firebaseSignOut(auth).catch(() => {});
  };

  return (
    <LoginContext.Provider value={{ user, login, loginWithGoogle, logout, authReady }}>
      {children}
    </LoginContext.Provider>
  );
};
