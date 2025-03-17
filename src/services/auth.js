import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIj1k07A-2RVqSgfnRgsWe3rOeVYvwjeE",
  authDomain: "e-learning-a0b3f.firebaseapp.com",
  projectId: "e-learning-a0b3f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  await signOut(auth);
};
