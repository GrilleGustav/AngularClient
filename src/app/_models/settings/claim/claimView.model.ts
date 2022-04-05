/**
 * Application claim.
 */
 export interface ClaimViewModel {
    /**
     * Claim ussuer.
     */
    issuer: string;

    /**
     * Original issuer.
     */
    originalIssuer: string;

    /**
     * The claim type.
     */
    type: string;

    /**
     * The claim value.
     */
    value: string;

    /**
     * The claim value type.
     */
    valueType: string;
}