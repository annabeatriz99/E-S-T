const { expect } = require("chai");

describe("TokenEmpresa", function () {
  let Token, token, admin, minter, user;

  beforeEach(async function () {
    [admin, minter, user] = await ethers.getSigners();
    Token = await ethers.getContractFactory("TokenEmpresa");
    token = await Token.deploy();
    await token.deployed();
  });

  it("admin deve conseguir adicionar à whitelist", async () => {
    await token.connect(admin).addToWhitelist(user.address);
    expect(await token.whitelist(user.address)).to.equal(true);
  });

 
});
