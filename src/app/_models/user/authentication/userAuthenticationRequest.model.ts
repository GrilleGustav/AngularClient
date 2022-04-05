/**
 *  User authentication request.
 */
 export interface UserAuthenticationRequest {
    /**
     * User email.
     */
    email: string;

    /**
     * User password.
     */
    password: string;

    /**
     * Flag indicates user stay logged in permanently.
     */
    stayLoggedIn: boolean;

    /**
     * Url to generate some links.
     */
    clientURI: string;
}