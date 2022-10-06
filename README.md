# Usage

Replace the `"INSERT YOUR PRIVATE KEY HERE"` with your **Private Key**
```typescript
// line 6
const sdk = ThirdwebSDK.fromPrivateKey(NETWORK, "INSERT YOUR PRIVATE KEY HERE");
```

Replace the `"INSERT YOUR PUBLIC KEY HERE"` with your **Public Key**

> Note: Feel free to change the values and the properties of your metadata.

```typescript
// line 18 - 22
const nft = await nftCollection.mintTo("INSERT YOUR PUBLIC KEY HERE", {
	name: "My NFT Collection",
	description: "My personal NFT collection.",
	symbol: "MNFT"
});
```
