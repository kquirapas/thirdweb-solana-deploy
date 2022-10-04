import { ThirdwebSDK } from '@thirdweb-dev/sdk/solana';

async function main() {
  // setup
  const NETWORK = "devnet";
  const sdk = ThirdwebSDK.fromPrivateKey(NETWORK, "INSERT YOUR PRIVATE KEY HERE");

  // deployment
  const deployed = await sdk.deployer.createNftCollection({
    name: "My NFT Collection",
    description: "My personal NFT collection.",
    symbol: "MNFT"
  });

  // minting logic
  const nftCollection = await sdk.getNFTCollection(deployed);

  const nft = await nftCollection.mintTo("INSERT YOUR PUBLIC KEY HERE", {
    name: "My NFT Collection",
    description: "My personal NFT collection.",
    symbol: "MNFT"
  });

  // output
  console.log("Collection deployed to: ", deployed);
  console.log("Minted nft: ", nft);
}

main()
  .then(() => process.exit())
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
