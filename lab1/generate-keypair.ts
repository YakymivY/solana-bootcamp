import * as dotenv from 'dotenv';
import { Keypair } from "@solana/web3.js";
dotenv.config();

const jsonString = process.env.SECRET_KEY;
if (jsonString) {
    let secretKey = Uint8Array.from(JSON.parse(jsonString));
    const keypair = Keypair.fromSecretKey(secretKey);
    console.log('Public key:', keypair.publicKey.toBase58());
} else {
    console.log('Could not get key from .env!')
}

let newKeypair: Keypair = Keypair.generate();
let counter: number = 1;
while(newKeypair.publicKey.toBase58()[0] !== 'Y') {
    newKeypair = Keypair.generate();
    counter++;
}
console.log("Needed key is found:", newKeypair.publicKey.toBase58());
console.log(counter, "steps used");