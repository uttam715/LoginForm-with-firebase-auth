import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No user data found!");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Phone: {userData.phone}</p>
          <p>Email: {userData.email}</p>
          <p>Signup Date: {new Date(userData.createdAt.seconds * 1000).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}
