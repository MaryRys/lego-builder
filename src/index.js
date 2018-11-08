import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import partsData from 'partsData';
import legoCharacters from './components/LegoCharacter';

const printHeads = () => {
  partsData.getHeads()
  .then((data) => {
    console.log(data);
    legoCharacter.createHeads(data.heads);
    $('#heads').html(legoCharacter.createHeads(data.heads));
  })
  .catch((error) => {
    console.error('Error getting heads', error);
  });
};

const initializeApp = () => {
  printHeads();
};

initializeApp();
