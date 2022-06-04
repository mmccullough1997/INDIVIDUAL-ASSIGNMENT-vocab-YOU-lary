import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET all vocab cards by uid
const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const cardsProgrammingLanguage = (uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((userCards) => {
      const programCards = userCards.filter((card) => card.tech === 'Language');
      resolve(programCards);
    }).catch((error) => reject(error));
});

const cardsComputing = (uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((userCards) => {
      const computingCards = userCards.filter((card) => card.tech === 'Computing Technology');
      resolve(computingCards);
    }).catch((error) => reject(error));
});

const cardsFintech = (uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((userCards) => {
      const fintechCards = userCards.filter((card) => card.tech === 'FinTech');
      resolve(fintechCards);
    }).catch((error) => reject(error));
});

const cardsPlatform = (uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((userCards) => {
      const platformCards = userCards.filter((card) => card.tech === 'Platform');
      resolve(platformCards);
    }).catch((error) => reject(error));
});

const deleteCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then(() => {
      getCards(uid).then(resolve);
    }).catch((error) => reject(error));
});

const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, cardObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocabulary/${response.data.name}.json`, payload)
        .then(() => {
          getCards(cardObj.uid).then(resolve); // get all cards
        });
    }).catch(reject);
});

export {
  getCards,
  cardsProgrammingLanguage,
  cardsComputing,
  cardsFintech,
  cardsPlatform,
  deleteCard,
  createCard
};
