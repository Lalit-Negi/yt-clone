import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8",
	authDomain: "clone28.firebaseapp.com",
	projectId: "youtubeclone28",
	storageBucket: "youtubeclone28.appspot.com",
	messagingSenderId: "3134687068",
	appId: "1:3134687068:web:4797a99fbf94eb7a3ba399"
  };

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

