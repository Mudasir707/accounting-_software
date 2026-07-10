import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { app } from "./firebase.js";

const db = getFirestore(app);

async function loadDashboard() {
    const customers = await getDocs(collection(db, "customers"));

    document.getElementById("customerCount").innerText = customers.size;
}

loadDashboard();
