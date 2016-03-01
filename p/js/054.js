/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

var pm = require('./pm');

const hand_name = hand_value => {
  return {
    0: 'high card',
    1: 'one pair',
    2: 'two pairs',
    3: 'three of a kind',
    4: 'straight',
    5: 'flush',
    6: 'full house',
    7: 'four of a kind',
    8: 'straight flush',
    9: 'royal flush'
  }[hand_value];
};

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

const high_card_0 = hand => {
  return {hand: 0, values: hand.values};
}

const one_pair_1 = hand => {
  var pair = Object.keys(hand.counts).reduce((m, e) => m || (hand.counts[e] === 2 ? e : false), false);
  if (pair) {
    return {hand: 1, values: Object.keys(hand.counts).filter(x => x !== pair).concat(pair).map(x => parseInt(x))};
  }
  return high_card_0(hand);
};

const two_pairs_2 = hand => {
  var pairs = Object.keys(hand.counts).reduce((m, e) => m.concat(hand.counts[e] === 2 ? e : []), []);
  if (pairs.length === 2) {
    return {hand: 2, values: Object.keys(hand.counts).filter(x => pairs.indexOf(x) === -1).concat(pm.array_n_sort(pairs)).map(x => parseInt(x))};
  }
  return one_pair_1(hand);
};

const three_of_a_kind_3 = hand => {
  var triple = Object.keys(hand.counts).reduce((m, e) => m || (hand.counts[e] === 3 ? e : false), false);
  if (triple) return {hand: 3, values: [parseInt(triple)]};
  return two_pairs_2(hand);
};

const straight_4 = hand => {
  if (pm.array_equal(hand.values.map(x => x - hand.values[0]), [0, 1, 2, 3, 4])) {
    return {hand: 4, values: hand.values};
  }
  return three_of_a_kind_3(hand);
};

const flush_5 = hand => {
  if (Object.keys(hand.suits).length === 1) {
    return {hand: 5, values: hand.values};
  }
  return straight_4(hand);
};

const full_house_6 = hand => {
  hand.counts = hand.values.reduce((m, e) => Object.assign(m, {[e]: (m[e] ? m[e] + 1 : 1)}), {});
  var pair = false, triple = false;
  Object.keys(hand.counts).forEach(value => {
    if (hand.counts[value] === 2) pair = value;
    if (hand.counts[value] === 3) triple = value;
  });
  if (pair && triple) return {hand: 6, values: [parseInt(triple)]};
  return flush_5(hand);
};

const four_of_a_kind_7 = hand => {
  if (hand.values[0] === hand.values[3]
      || hand.values[1] === hand.values[4]) {
    return {hand: 7, values: hand.values};
  }
  return full_house_6(hand);
};

const straight_flush_8 = hand => {
  if (Object.keys(hand.suits).length === 1) {
    if (pm.array_equal(hand.values.map(x => x - hand.values[0]), [0, 1, 2, 3, 4])) {
      return {hand: 8, values: hand.values};
    }
  }
  return four_of_a_kind_7(hand);
};

const royal_flush_9 = hand => {
  hand.values = pm.array_n_sort(hand.cards.map(card => card.value));
  if (Object.keys(hand.suits).length === 1
      && pm.array_equal(hand.values, [10, 11, 12, 13, 14])) {
    return {hand: 9, values: hand.values};
  }
  return straight_flush_8(hand);
};

const eval_hand = hand => {
  var cards = hand.map(card => ({value: card_value(card), suit: card_suit(card)}));
  var hand = {
    cards: cards,
    suits: hand_suits(cards)
  };
  return royal_flush_9(hand);
};

const showdown = (p1, p2) => {
  if (p1.hand > p2.hand) return 1;
  if (p2.hand > p1.hand) return 2;
  if (p1.values.length !== p2.values.length) throw "lengths of values do not match";
  while (p1.values.length > 0) {
    var v1 = p1.values.pop();
    var v2 = p2.values.pop();
    if (v1 > v2) return 1;
    if (v2 > v1) return 2;
  }
  return undefined;
}

var p1_wins = 0;

require('fs').readFileSync('054.dat', 'utf8').split('\n').forEach(line => {
  var deal = line.split(' ');
  var deal1 = deal.slice(0, 5);
  var deal2 = deal.slice(5);
  var p1 = eval_hand(deal1);
  var p2 = eval_hand(deal2);
//   console.log('p1: ' + JSON.stringify(deal1) + ' -> ' + hand_name(p1.hand) + ' (' + p1.hand + ') '+ ' (values ' + JSON.stringify(p1.values) + ')');
//   console.log('p2: ' + JSON.stringify(deal2) + ' -> ' + hand_name(p2.hand) + ' (' + p2.hand + ') '+ ' (values ' + JSON.stringify(p2.values) + ')');
  var winner = showdown(p1, p2);
//   console.log('winner: ' + winner);
  if (winner === undefined) console.log(JSON.stringify(deal));
  if (winner === 1) ++p1_wins;
});

console.log(p1_wins);
