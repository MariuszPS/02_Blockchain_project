

// Import
const Block = require("./block");

/***  Test der Block-Funktionalität  */

// const block = new Block("aktuelle Zeit","hash1","hash2","block data");
// console.log(block.toString());
// console.log(Block.genesis().toString());

// console.log(Block.mineBlock().toString());

const testBlock = Block.mineBlock(Block.genesis(),"teastData");
console.log(testBlock.toString());
