import './index.scss';

import legoCharacter from './components/LegoCharacter/legoCharacter';

const initializeApp = () => {
  legoCharacter.printHeads();
  legoCharacter.printTorsos();
  legoCharacter.printLegs();
};

initializeApp();
