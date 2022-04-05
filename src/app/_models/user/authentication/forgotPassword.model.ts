/**
 * Request data to forgotten password.
 */
 export interface ForgotPassword {
    /**
     * User emial.
     */
    email: string;
    
    /**
     * Url to generate password reset link.
     */
    clientURI: string;
}