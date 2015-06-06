function solveTowers(numDiscs) {
  'use strict';

  var rods = [];

  var rod1 = [], rod2 = [], rod3 = [];

  for (var i = numDiscs; i > 0; i--) {
    rod1.push({
	size: i
    });
  }

  rods.push(rod1);
  rods.push(rod2);
  rods.push(rod3);
  console.log('rods', rods);

}

solveTowers(3);
/*

Tower of Hanoi

- start with all stacks empty but
  - if odd # of discs, put all on right
  - if even # of discs, put all on left
  - order from largest to smallest

- take a turn
  - get current pole
  - if none then start left or right (even or odd)
  - grab disc from current stack
  - move right/left
  - is disc larger than disc on current stack?
  - no? add. Yes? move right/left
  - do same until we can place
  - move right/left
    