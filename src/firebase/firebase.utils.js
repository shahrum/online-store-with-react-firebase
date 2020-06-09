import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAk0wOkpoRsmlaa7ZTqhmBu2uL_pkUHsb0",
	authDomain: "react-crown-54350.firebaseapp.com",
	databaseURL: "https://react-crown-54350.firebaseio.com",
	projectId: "react-crown-54350",
	storageBucket: "react-crown-54350.appspot.com",
	messagingSenderId: "627593297620",
	appId: "1:627593297620:web:e671d897ba06f88526c541",
	measurementId: "G-WKP15QNT0C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	console.log("snapShot:", snapShot);
	console.log("userAuth:", userAuth);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error on user creation", error);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
