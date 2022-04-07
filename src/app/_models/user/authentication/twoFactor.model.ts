/**
 * Two factor request.
 */
 export interface TwoFactorModel {
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