

// Import
const Block = require("./block");
const Blockchain = require("./blockchain");
/***  Test der Block-Funktionalität  */

// const block = new Block("aktuelle Zeit","hash1","hash2","block data");
// console.log(block.toString());
// console.log(Block.genesis().toString());

// console.log(Block.mineBlock().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"teastData");
// console.log(testBlock.toString());

/*** Test der Blockchain-Funktionalität  */


const blockchain = new Blockchain();
blockchain.addBlock("Daten von Block 1")
console.log(blockchain);
blockchain.addBlock("Daten von Block 1");
console.log(blockchain);

