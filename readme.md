# Firebase-Based Leads Capture Web App

A simple real-time web application to capture, save, and manage lead URLs using **Firebase Realtime Database**. It features a clean, responsive UI and updates leads instantly without needing a backend server.

---

## 🚀 Features

- 🔗 Capture and store lead URLs in Firebase  
- 📤 Real-time data syncing with Firebase Realtime Database  
- 🔄 Live display of new leads as they are added  
- 🗑️ Double-click to delete all stored leads  
- 🌐 Responsive and user-friendly interface  
- ☁️ Cloud-based, no backend required

---

## 🛠️ Technologies Used

- **HTML5** – Webpage structure  
- **CSS3** – Styling and responsive design  
- **JavaScript** – DOM manipulation & Firebase logic  
- **Firebase Realtime Database** – Cloud storage  
- **Firebase JS SDK v11.9.0**

---

## 📁 Folder Structure

project-root/  
├── index.html          # Webpage structure  
├── index.css           # Stylesheet  
├── index.js            # JavaScript & Firebase integration  
├── favicon.ico         # App icon  
├── icons/              # Additional app icons for PWA  
├── site.webmanifest    # Web app manifest file  
└── README.md           # Project documentation

---

## 🔧 Setup Instructions

1. Clone or Download the Repository:

git clone https://github.com/Harshith852/Leads_Tracker_app.git

Or download the ZIP from GitHub and extract it locally.

2. Configure Firebase:

- Go to Firebase Console: https://console.firebase.google.com/  
- Create a new Firebase project.  
- Navigate to Build > Realtime Database on the sidebar.  
- Click Create Database and choose a location.  
- Start in test mode (for development only).  
- Set your database rules to public (development only — **do not use in production**):

{  
  "rules": {  
    ".read": true,  
    ".write": true  
  }  
}

- Copy your Realtime Database URL (e.g., https://your-project-id.firebaseio.com/).  
- Open index.js and replace the placeholder in firebaseConfig with your database URL:

const firebaseConfig = {  
    databaseURL: "https://your-project-id.firebaseio.com/"  
};

---

## 💻 How to Use

- Open index.html in your browser.  
- Enter a URL in the input box and click Save to store it.  
- Saved leads appear below as clickable links.  
- Double-click the Delete button to remove all stored leads.

---

## 🧪 Code Overview

- Firebase Initialization:

import { initializeApp } from "firebase-app.js";  
import { getDatabase, ref, push, onValue, remove } from "firebase-database.js";

const firebaseConfig = {  
    databaseURL: "https://your-project-id.firebaseio.com/"  
};

const app = initializeApp(firebaseConfig);  
const db = getDatabase(app);

- Saving Leads:

push(referenceInDB, inputel.value);

- Displaying Leads:

onValue(referenceInDB, (snapshot) => {  
    // Render leads in real-time  
});

- Deleting Leads:

remove(referenceInDB);

---

## ⚠️ Important Notes

- Never keep your Firebase database rules public in production.  
- Use Firebase Authentication and secure database rules to protect your data.

---

## 📬 Contact

For questions or support, open a GitHub Issue or reach out to me(Harshith V) via GitHub.
