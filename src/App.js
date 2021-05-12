import React from 'react'
import './App.less'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import Content from './Content'
import Footer from './Footer'

firebase.initializeApp({
    apiKey: "AIzaSyB_4jdm5ndooKNOfMzGQbpbbhUPAGD3mN8",
    authDomain: "insurance-recommendation-6e846.firebaseapp.com",
    projectId: "insurance-recommendation-6e846",
    storageBucket: "insurance-recommendation-6e846.appspot.com",
    messagingSenderId: "65848570125",
    appId: "1:65848570125:web:cf14a68b4752154255c044",
    measurementId: "G-GN7RGK6C73"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
    return (
        <div id="app">
            {/** sticky header */}
            <div className="top-header">
                <img alt="煮水" src="./src/water.jpeg" />
                煮水人壽
            </div>
            <div className="header">
                <li className="item">商品總覽</li>
                <li className="item">優惠活動</li>
                <li className="item">客服中心</li>
                <li className="item">最新消息</li>
                <li className="item">熱門保險</li>
            </div>
            <div className="background-image">
                <img alt="family" src="./src/family.jpg" />
            </div>
            {/** insurance content */}
            <Content />
            {/** company information */}
            <Footer />
        </div>
    )
}

export default App
