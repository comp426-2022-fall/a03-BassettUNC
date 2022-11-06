#!/usr/bin/env node

import { roll } from '../lib/roll.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

// Set vars, default if neccecary.
var sides = 0;
if (!args.sides) {
	sides = 6;
} else {
	sides = args.sides;
}
var dice = 0;
if (!args.dice) {
	dice = 2;
} else {
	dice = args.dice;
}
var rolls = 0;
if (!args.rolls) {
	rolls = 1;
} else {
	rolls = args.rolls;
}

// Roll em'
async function process_args() {
  console.log(JSON.stringify(roll(sides, dice, rolls)));
}

// Done
process_args(args);
