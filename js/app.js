console.log(`sanity check`)

// //**  */  Declare deck variables
let wizard1, wizard2
let winner, battlefield, cardStack, wand, tieBattle, endGame
// tieWandClick  ??


//** */ Cached element references
let deckBF1 = []
let deckBF2 = []
// let wiz1cards = []
// let wiz1cards = []
// let deck-start1 = []
// let deck-start2 = []


let battleCard1 = document.getElementById('deckBF1')
let battleCard2 = document.getElementById('deckBF22')

let wiz1cards = document.getElementById('deck-start1')
let  wiz2cards= document.getElementById('deck-start2')
let wandW1 = document.getElementById(btnW1)
let wandW2 = document.getElementById(btnW2)



//** */  Event listeners


document.getElementById('btnW1').addEventListener('click', ()=> console.log('clicked'))

document.getElementById('btnW2').addEventListener('click', ()=> console.log('clicked'))

// handleClickWand (play card to battlefield), 
// handleClickReplay(reset button)
// handleClickCollect
// handleclickStart (choose wizard?)

//** */ Functions

// Init()

function init() {
  ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}

function handleClick1(){
// to prevent error on click when no cards are left
if (deckBF1.length > 0){
  let randIdx = Math.floor(Math.random()*deckBF1.length)
  let cardPicked1 = deckBF1.splice(randIdx, 1)
  battleCard1.push(cardPicked1)
  render(cardPicked1)
} 
}

function handleClick2(){
  // to prevent error on click when no cards are left
  if (deckBF2.length > 0){
    let randIdx = Math.floor(Math.random()*deckBF1.length)
    let cardPicked2 = deckBF2.splice(randIdx, 1)
    battleCard2.push(cardPicked2)
    render(cardPicked2)
  } 
  }


function cardPicked1(){
  // randomly select from card in their own pile
  renderCompare() 
  //assign card with random index to a variable
  //add card picked to battleCard area
  //pass card to renderCompare function to display
}
function cardPicked2(){
  // randomly select from card in their own pile
  renderCompare() 
  //assign card with random index to a variable
  //add card picked to battleCard area
  //pass card to renderCompare function to display
}


function renderCompare() {
  //cards picked by 1 & 2 compaired
  if (cardPicked2 > cardPicked1){
    let (cardToRemove = cardPicked1 && cardPicked2)
    render wiz2Cards.push(cardToRemove)
  }else if (cardPicked1 > cardPicked2){
    let (cardToRemove = cardPicked1 && cardPicked2)
    render wiz2Cards.push(cardToRemove)
  }else if (cardPicked1 === cardPicked2) {
    render tiePlay()
  }
  // if > wins, return message, pull cards to winners pile
  // else if tie, return tie message, render tiePlay function
  // lose(,,,? probably cue victory function)
  // render (init) OR gameState ? might be card picked...
}


function tiePlay(){
// render tie message
// wiz play 3 cards each, render compare last card
// 
}

function victory(){
// if (wiz1cards === 0 && battleCard1 ===0) {
//   console.log(`${wizard2} is the victor! ${wizard1} died bravely in battle.`)
// }else if (wiz2cards === 0 && battleCard2 ===0 {
//   console.log(`${wizard1} has defeated Voldemort! ${wizard2} died bravely in battleCard1.`)
//   }
// }

// function cardToRemove()

//// function init()
// function gameState
// function checkCardsValue()
// function render()
// function winner()
//// function compare()
// //function Tie
// //function Victory
