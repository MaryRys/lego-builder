import $ from 'jquery';

import './legoCharater.scss';
import partsData from '../../data/partsData';

// heads

const createHeads = (heads) => {
  let domString = '';
  heads.forEach((head) => {
    domString += `
      <div class="lego-card">
          <img class= "card" src="${head.imageUrl}" width="250px">
      </div>
      `;
  });
  $('#heads').html(domString);
};

const printHeads = () => {
  partsData.getHeads()
    .then((data) => {
      (createHeads(data.data));
    })
    .catch((error) => {
      console.error('Error getting heads', error);
    });
};

// torsos

const createTorsos = (torsos) => {
  let domString = '';
  torsos.forEach((torso) => {
    domString += `
      <div class="lego-card">
          <img class= "card" src="${torso.imageUrl}" width="250px">
      </div>
      `;
  });
  $('#torsos').html(domString);
};

const printTorsos = () => {
  partsData.getTorsos()
    .then((data) => {
      (createTorsos(data.data));
    })
    .catch((error) => {
      console.error('Error getting torsos', error);
    });
};

// legs

const createLegs = (legs) => {
  let domString = '';
  legs.forEach((leg) => {
    domString += `
      <div class="lego-card">
          <img class= "card" src="${leg.imageUrl}" width="250px">
      </div>
      `;
  });
  $('#legs').html(domString);
};

const printLegs = () => {
  partsData.getLegs()
    .then((data) => {
      (createLegs(data.data));
    })
    .catch((error) => {
      console.error('Error getting legs', error);
    });
};

export default {
  createHeads,
  createTorsos,
  createLegs,
  printHeads,
  printTorsos,
  printLegs,
};
