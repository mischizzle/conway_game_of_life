(function(){

  Life = function(seed) {
    this.seed = seed;
    this.height = seed.height;
    this.width = seed[0].lendth;
    this.prevBoard = [];
    this.board = cloneArray(seed);

  };

  Life.prototype =  {
    next: function() {
      this.prevBoard = cloneArray(this.board);
    },

    tostring: function() {
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
console.log(game);


