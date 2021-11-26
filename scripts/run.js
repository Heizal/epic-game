const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Jujutsu", "Harry", "Spongebob"],       // Names
        ["https://i.pinimg.com/564x/6d/ea/8c/6dea8c0979a962dd3d66edf00daea766.jpg", // Images
        "https://i.pinimg.com/564x/a3/e4/51/a3e451a4102acd94b49e540aa70f90de.jpg", 
        "https://i.pinimg.com/564x/79/1a/0b/791a0bff7ecf2c377f160b19c2db5047.jpg"],
        [1000, 2000, 3000],                    // HP values
        [150, 100, 50],                      // Attack damage values
        "Lizzo", // boss name
        "https://i.pinimg.com/236x/59/74/43/5974436126d1493e08c634c867b1550e.jpg", // Boss image
        10000, //boss hp
        30 // Boss attack damage

    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2); //minting 3rd character to attack lizzo
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // let txn;
    // // We only have three characters.
    // // an NFT w/ the character at index 2 of our array.
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();

    // // Get the value of the NFT's URI.
    // let returnedTokenUri = await gameContract.tokenURI(1); //basically saying go get me the data inside the nft with a tkenid of 1
    // console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();