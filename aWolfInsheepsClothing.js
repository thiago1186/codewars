function warnTheSheep(queue) {
  let index = queue.indexOf("wolf");
  return queue[index + 1] ? `Oi! Sheep number ${queue.length - (index + 1)}! You are about to be eaten by a wolf!` : `Pls go away and stop eating my sheep`;
}
