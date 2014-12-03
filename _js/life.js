'use strict';

// Conway game of life rules:
// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overcrowding.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

var Life;

(function(){

  Life = function(seed) {
    this.seed = seed;
    this.height = seed.length;
    this.width = seed[0].length;
    this.prevBoard = [];
    this.board = cloneArray(seed);
  };

  Life.prototype =  {
    next: function() {
      var neighbors, y, x;
      this.prevBoard = cloneArray(this.board);

      for(var y = 0; y < this.height; y++) {
        for(var x = 0; x < this.width; x++) {
          var neighbors = this.aliveNeighbors(this.prevBoard, x, y);
        }
      }
    },

    aliveNeighbors: function(array, x, y) {
      var sum;

      var neighbors = [
        array[y-1][x-1], array[y-1][x], array[y-1][x+1],
        array[y][x-1], array[y][x+1],
        array[y+1][x-1], array[y+1][x], array[y+1][x+1]
      ].forEach( function(a) {
        sum += +!!a;
        console.log(sum);
      });

      return sum;
    },

    toString: function() {
      return this.board.map(function(row) {
        return row.join(' ');
      }).join('\n');
    }
  };

  //helpers
  function cloneArray(array) {
    return array.slice().map(function(row) {
      return row.slice();
    });
  }
})();

var game = new Life([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]);

console.log(game + '');

game.next();

console.log(game + '');



