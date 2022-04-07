/**
 * Request data to forgotten password.
 */
 export interface ForgotPasswordModel {
    /**
     * User emial.
     */
    email: string;
    
    /**
     * Url to generate password reset link.
     */
    clientURI: string;
}