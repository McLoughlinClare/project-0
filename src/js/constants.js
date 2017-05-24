console.log('constants')

let correctCards = 0;
let turnNumber = 1;

const numbersTwo = ['Proton', 'Neutron', 'Positron', '\u03C0+','\u03C0-', 'K+','K-','\u03C0\u2070'];
const numbersThree =['Gravitational', 'Gravitational1', 'weak', 'weak1', 'EM', 'EM1', 'Strong', 'Strong1'];
const numbersOne = ['Proton', 'Neutron', 'Electron', 'Positron', 'Pion+', 'Kaon+', 'kaon-', 'Pion'];

const slotsTwo= ['uud', 'udd','\u203Eu','u-d', '-ud','-ud', '-du', 'u-u'];
const slotsThree = ['affects all particles with mass', 'infinite range', 'affects all particles', 'responsable for beta decay', 'affects all particles with charge', 'infinite range', 'affects hadrons', 'very short range'];
const slotsOne = ['p', 'n','e', 'p-','\u03C0+', 'K+','K-','\u03C0\u2070'];

let shuffledNumbers= [];
let slots =slotsOne;
let numbers = numbersOne;

let correctClassification = 0;
let levelOneStart = '';
let levelOneEnd = '';
let levelOneScore = '';
let levelTwoStart = '';
let levelTwoEnd = '';
let levelTwoScore = '';

//level three constants///
const questions =[
  {
    answer: 'a answer-button',
    question: `Which of the fundamental forces do Lepton's not experience?`,
    options: [`Strong Nuclear Force`, `Weak Interaction`, `Electromagnetic force`]
  },
  {
    answer: 'c answer-button',
    question: `What is the charm quark's anti quark?`,
    options: [`Up`, `Top`, `Strange`]
  },
  {
    answer: 'c answer-button',
    question: `Which particle type consists of quark-antiquark pairs?`,
    options: [`Baryon`, `Lepton`, `Meson`]
  },
  {
    answer: 'a answer-button',
    question: `When is strangeness not conserved?`,
    options: [`weak interaction`, `electromagnetic force`, `gravitational force`]
  },
  {
    answer: 'b answer-button',
    question: `Which of the following is not a Lepton?`,
    options: [`Muon`, `Neutron`, `Tau`]
  }
  ];
