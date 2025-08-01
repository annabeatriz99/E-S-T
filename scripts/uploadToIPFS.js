const axios = require("axios");
const fs = require("fs");
require("dotenv").config();


const JWT = process.env.PINATA_JWT;

async function uploadJSON(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath));
  const res = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", data, {
    headers: { Authorization: `Bearer ${JWT}` }
  });

  console.log("✅ Upload completo. CID:", res.data.IpfsHash);
}

uploadJSON("./scripts/assets/asset1.json");
