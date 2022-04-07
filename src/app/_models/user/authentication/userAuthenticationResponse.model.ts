/**
 * User authentication response.
 */
 export interface UserAuthenticationResponseModel {
    /**
     * Flag indicating if authentication is successfully completet.
     */
    isAuthSuccessful: boolean;

    /**
     * Error message.
     */
    errorMessage: string;

    /**
     * Access token.
     */
    token: string;

    /**
     * Refresh token.
     */
    refreshToken: string;

    /**
     * Flag indicating if two step verification is required.
     */
    is2StepVerificationRequired: boolean;

    /**
     * Authentification provider.
     */
    provider: string;
}