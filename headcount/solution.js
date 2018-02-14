'use strict';

let total = [];

const traverse = engine => {
  total += engine.value;
  if (engine.next) {traverse(engine.next)}
  return total;
};