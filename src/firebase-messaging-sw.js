// importScripts('http://lab.ejci.net/favico.js/favico.min.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '440830124743' // troque pelo seu sender id
});
const messaging = firebase.messaging();
// messaging.usePublicVapidKey("BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu");
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});
