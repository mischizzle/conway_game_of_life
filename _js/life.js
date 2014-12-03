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

      for(y = 0; y < this.height; y++) {
        for(x = 0; x < this.width; x++) {
          neighbors = this.aliveNeighbors(this.prevBoard, x, y);
          console.log(y, x, ':', neighbors);
        }
      }
    },

    aliveNeighbors: function(array, x, y) {
      var sum = 0;
      var prevRow = array[y-1] || [];
      var nextRow = array[y+1] || [];

      var neighbors = [
        prevRow[x-1], prevRow[x], prevRow[x+1],
        array[y][x-1], array[y][x+1],
        nextRow[x-1], nextRow[x], nextRow[x+1]
      ].forEach( function(a) {
        // +undefined = NAN
        // !!undefined = false
        // +!!undefined = 0
        sum += +!!a;
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



