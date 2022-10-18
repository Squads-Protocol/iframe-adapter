## Squads Apps Iframe Adapter
The Squads `iframe-adapter` package is an easy way to get your app functioning within the Squads Apps ecosystem on Solana. It creates a bridge between your app and Squads
so that any transaction from within your app is created as a Squads Multisig transaction on behalf of a multisig vault or authority.

### Requirements
The `iframe-adapter` operates very similar to a normal wallet, but will need the following in order to properly bridge your app to Squads
1. The `@sqds/iframe-adapter` npm package.
2. The app will need the proper Content Security Policy (CSP Header) for frame-ancestor: `Content-Security-Policy: frame-ancestors https://v3.squads.so`
3. A small snippet of code (which may depend on your apps wallet configuration)

### Installation
1. Add the package to your project:\
`npm install @sqds/iframe-adapter`\
or\
`yarn add @sqds/iframe-adapter`

2. Add the proper CSP header:\
`Content-Security-Policy: frame-ancestors https://v3.squads.so;`

3. Add the following code where your wallet adapter context is initialized
   ```
   import {detectEmbeddedInSquadsIframe, SquadsEmbeddedWalletAdapter} from @sqds/iframe-adapter
   ...
   // then add the following conditional (or similar) where your supported wallets are loaded

   let wallets = detectEmbeddedInSquadsIframe() ? [new SquadsEmbeddedWalletAdapter()] : [ new PhantomWalletAdapter(), new ExodusWalletAdapter()];
   // the rest of your code
   return (
    <WalletProvider wallets={wallets} autoConnect>
   // etc
   ```