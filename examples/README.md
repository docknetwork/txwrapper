# How to use `txwrapper-dock`

Here's a mini-tutorial on how `txwrapper-dock` can interact with a Substrate chain. We're using a Dock dev chain:

## Get Started

1. Fetch the latest [TODO YOUR CHAINS NAME] node from the above link. Follow instructions to build it, and start a dev chain.

    ```bash

    target/release/dock-node --dev
    ```

2. Run the example script in this folder. It will interact with your local node.

    ```bash
    ./node_modules/.bin/ts-node examples/example.ts
    ```

## Expected Output

Here's a sample output of the above script, using a Dock node. Your payload to sign and signature will of course differ from this example.

```
Alice's SS58-Encoded Address: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
2021-08-02 18:39:44        REGISTRY: Unknown signed extensions OnlyMigrator found, treating them as no-effect
2021-08-02 18:39:44        REGISTRY: Unknown signed extensions OnlyMigrator found, treating them as no-effect

Decoded Transaction
  To: [object Object]
  Amount: 90071992547409910

Payload to Sign: 0xb00200008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4813f6ffffffffff3f01650000001f000000010000009388db55e44f5c438c0a4d3dd4c260e25261b1c79aa47c91bfd39bced0b9cc4cc3706e95451aec9903e5b6dd1fe95d1876a8e31c3556685276c559c1b0ddfe53
2021-08-02 18:39:44        REGISTRY: Unknown signed extensions OnlyMigrator found, treating them as no-effect

Decoded Transaction
  To: [object Object]
  Amount: 90071992547409910
2021-08-02 18:39:44        REGISTRY: Unknown signed extensions OnlyMigrator found, treating them as no-effect

Signature: 0x01ec2e1237ae120e67f2d4a2c0b439ef0c791c5717e9bb94421ea78e31f19ca928ed26f07b657648c61a9adfa5f9cd4414969f4a32579c4e83869b5e51f2e53a89
2021-08-02 18:39:44        REGISTRY: Unknown signed extensions OnlyMigrator found, treating them as no-effect

Transaction to Submit: 0x4d028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01ec2e1237ae120e67f2d4a2c0b439ef0c791c5717e9bb94421ea78e31f19ca928ed26f07b657648c61a9adfa5f9cd4414969f4a32579c4e83869b5e51f2e53a89650000000200008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4813f6ffffffffff3f01

Expected Tx Hash: 0x31f0bc55a1c1277383145960cc5bfaa384dd483f7ff31d4b7c5715626563e67a
Actual Tx Hash: 0x31f0bc55a1c1277383145960cc5bfaa384dd483f7ff31d4b7c5715626563e67a
2021-08-02 18:39:44        REGISTRY: Unknown signed extensions OnlyMigrator found, treating them as no-effect
2021-08-02 18:39:44        REGISTRY: Unknown signed extensions OnlyMigrator found, treating them as no-effect

Decoded Transaction
  To: [object Object]
  Amount: 90071992547409910
```

## Offline vs. Online

In the examples, the `rpcToLocalNode` function is the only function that needs to be called with internet access. Everything else can be performed offline. In particular, this example shows how to perform the following operations offline:

- Generate a tx,
- Create its signing payload,
- Sign the signing payload,
- Calculate the tx hash,
- Decode at various levels of the tx lifecycle.
