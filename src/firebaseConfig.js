import firebase from "firebase/app";
import "firebase/firestore";
import { ref, onUnmounted } from 'vue';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDFESQ1GXNgq8GkeAbGkZJgoU0qofxC9ms",
    authDomain: "forsake-8cd3f.firebaseapp.com",
    projectId: "forsake-8cd3f",
    storageBucket: "forsake-8cd3f.appspot.com",
    messagingSenderId: "843093314935",
    appId: "1:843093314935:web:be5b9ec90f921271ae6572",
    measurementId: "G-3XX9C692B5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
export default db;

//#region Feedback

export const sendFeedback = async feedback => {
    return db.collection("Feedback").add(feedback)
}

//#endregion


export const useLoadFeedback = () => {
    const feedbackCollection = db.collection('Feedback');
    const feedback = ref([])
    const close = feedbackCollection.onSnapshot(snapshot => {
        feedback.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close);
    return feedback;
}