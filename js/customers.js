import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOQx6wMeSQ4IJQdg0Ex1LZOfJaNgdV28Q",
  authDomain: "sheen-accounts.firebaseapp.com",
  projectId: "sheen-accounts",
  storageBucket: "sheen-accounts.firebasestorage.app",
  messagingSenderId: "674397953304",
  appId: "1:674397953304:web:cbf1292d1d56091101126d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.saveCustomer = async function () {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;

  if (!name || !phone || !city) {
    alert("Please fill all fields");
    return;
  }

  await addDoc(collection(db, "customers"), {
    name,
    phone,
    city,
    createdAt: new Date()
  });

  alert("Customer saved successfully!");

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("city").value = "";

  loadCustomers();
};

async function loadCustomers() {
  const tbody = document.getElementById("customerTable");
  tbody.innerHTML = "";

  const snapshot = await getDocs(collection(db, "customers"));

  snapshot.forEach((doc) => {
    const c = doc.data();

    tbody.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.phone}</td>
        <td>${c.city}</td>
      </tr>
    `;
  });
}

loadCustomers();
