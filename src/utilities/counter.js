import {
  doc,
  getDoc,
  setDoc,
  increment
} from "firebase/firestore";

import { db } from "../firestore/firebase";

export async function updateVisitorCount() {
  const ref = doc(db, "visitors", "total");

  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    await setDoc(
      ref,
      { count: increment(1) },
      { merge: true }
    );
  } else {
    await setDoc(ref, { count: 1 });
  }

  const updated = await getDoc(ref);

  return updated.data().count;
}