const { ethers } = require("hardhat");

async function main() {

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    console.log("Counter address:", counter.address);
}

main();