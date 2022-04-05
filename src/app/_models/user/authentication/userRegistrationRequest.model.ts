import { Language } from "src/app/_enums/language";


/**
 * User registration request.
 */
export interface UserRegistrationRequest {
    /**
     * Firstname.
     */
    firstname: string;

    /**
     * Lastname.
     */
    lastname: string;

    /**
     * Email.
     */
    email: string;

    /**
     * Password.
     */
    password: string;

    /**
     * Confirmed password.
     */
    confirmPassword: string;

    /**
     * Used to generate email confirm link.
     */
    clientURI: string;

    /**
     * User language.
     */
    language: Language;
}