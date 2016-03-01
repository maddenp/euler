/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var pm = require('./pm');

const card_value = card => (
  {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, T: 10, J: 11, Q: 12, K: 13, A: 14}[card[0]]
);

const card_suit = card => (
  card[1]
);

const hand_suits = hand => (
  hand.reduce((m, e) => {
    m[e.suit] = m[e.suit] ? m[e.suit] + 1 : 1;
    return m;
  }, {})
);

const four_of_a_kind_8 = hand => {
  return hand;
};

const straight_flush_9 = hand => {
  if (Object.keys(hand.suits).length === 1
      && hand.values[4] === hand.values[0] + 4) {
    return {hand: 9, values: hand.values}
  }
  return four_of_a_kind_8(hand);
};

const royal_flush_10 = hand => {
  hand.values = hand.cards.map(card => card.value).sort();
  if (Object.keys(hand.suits).length === 1
      && pm.array_equal(hand.values, [10, 11, 12, 13, 14])) {
    return {hand: 10, values: hand.values};
  }
  return straight_flush_9(hand);
};

const eval_hand = hand => {
  var cards = hand.map(card => ({value: card_value(card), suit: card_suit(card)}));
  var hand = {
    cards: cards,
    suits: hand_suits(cards)
  };
  return royal_flush_10(hand);
};

// require('fs').readFileSync('054.dat', 'utf8').split('\n').forEach(line => {
require('fs').readFileSync('test', 'utf8').split('\n').forEach(line => {
  var deal = line.split(' ');
  console.log(JSON.stringify(eval_hand(deal.slice(0, 5))));
  console.log(JSON.stringify(eval_hand(deal.slice(5))));
});
