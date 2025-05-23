export type Ed25519Signature = string;
/**
 * Gets EdDSA(Ed25519) signature for message from private key.
 * @param message 32 byte hexadecimal string
 * @param priv 64 byte hexadecimal string of private key
 * @returns 64 byte hexadecimal string of Ed25519 signature
 */
export declare const signEd25519: (message: string, priv: string) => Ed25519Signature;
/**
 * Checks if the signature from signEd25519 is valid.
 * @param message 32 byte hexadecimal string
 * @param signature 64 byte hexadecimal string of Ed25519 signature
 * @param pub 32 byte hexadecimal string of public key
 * @returns if signature is valid, true. Else false.
 */
export declare const verifyEd25519: (message: string, signature: Ed25519Signature, pub: string) => boolean;
