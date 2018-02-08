import '../css/main.scss';
import '../users.html';
import { RandomGenerator } from "./random-generator";

const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.text(RandomGenerator.randomRange(480, 500));
};

const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = jQuery('#randomRange');

buttonRndInt.click(outputRandomInt);
buttonRndRange.click(outputRandomRange);
