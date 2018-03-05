'use strict';

module.exports = function enqueue(queue, add) {
  queue[queue.length] = add;
  queue.length++;
  return queue;
}

 