// authentication에 관련된 일을 하는 클래스
import firebase from "firebase";
import firebaseApp from "./fireabase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
