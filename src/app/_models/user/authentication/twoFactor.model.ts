/**
 * Two factor request.
 */
 export interface TwoFactor {
    /**
     * User email.
     */
    email: string;

    /**
     * Provider name.
     */
    provider: string;

    /**
     * Token.
     */
    token: string;
}