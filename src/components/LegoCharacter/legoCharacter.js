import './legoCharater.scss';

const createHeads = (data) => {
  const domString = `
  <div class="lego-card">
    <div class="img-holder">
      <img class= "${data.imageUrl}"
    </div>
    <h3 class="head-name"${data.name}</h3>
  </div>
  `;
  return domString;
};

const createTorsos = (data) => {
  const domString = `
  <div class="lego-card">
    <div class="img-holder">
      <img class= "${data.imageUrl}"
    </div>
    <h3 class="head-name"${data.name}</h3>
  </div>
  `;
  return domString;
};

const createLegs = (data) => {
  const domString = `
  <div class="lego-card">
    <div class="img-holder">
      <img class= "${data.imageUrl}"
    </div>
    <h3 class="head-name"${data.name}</h3>
  </div>
  `;
  return domString;
};

export default {
  createHeads,
  createTorsos,
  createLegs,
};
