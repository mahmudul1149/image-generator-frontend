import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useMainStore } from "../store/index";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAJe3QVsrYyWQEEiS7RxuhzFpwIAp3hGlU",
    authDomain: "image-generate-7e5ed.firebaseapp.com",
    projectId: "image-generate-7e5ed",
    storageBucket: "image-generate-7e5ed.appspot.com",
    messagingSenderId: "739487862995",
    appId: "1:739487862995:web:4209163b07b482ee4c8426",
    measurementId: "G-7TZ62QVKSH"
  };
  const { $axios } = useNuxtApp();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const store = useMainStore();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const idToken = await auth.currentUser.getIdToken();
      $axios.defaults.headers.common["Authorization"] = `Bearer ${idToken}`;
      store.setUser(user);
    } else {
      store.setUser(null);
    }
  });
});
