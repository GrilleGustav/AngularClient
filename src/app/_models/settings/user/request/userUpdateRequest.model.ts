import { Language } from "src/app/_enums/language";

/**
 * User detail request.
 */
export interface UserUpdateRequestModel {
    /**
     * Firstname.
     */
    firstname: string;

    /**
     * Lastname.
     */
    lastname: string;

    /**
     * Language.
     */
    language: Language;

    /**
     * User id.
     */
    id: string;

    /**
     * Username.
     */
    userName: string;

    /**
     * Email.
     */
    email: string;

    /**
     * Email confirmed.
     */
    emailConfirmed: boolean;

    /**
     * Cocurrency stamp.
     */
    concurrencyStamp: string;

    /**
     * Phone number.
     */
    phoneNumber: string;

    /**
     * Phone number confirmed.
     */
    phoneNumberConfirmed: boolean;

    /**
     * Two factor enabled.
     */
    twoFactorEnabled: boolean;

    /**
     * Date and time in UTC, when any user lockout ends.
     */
    lockoutEnd: Date;

    /**
     * Flag indicating if the user could be locked out.
     */
    lockoutEnabled: boolean;

    /**
     * Client url, used for link generation like confirm email link.
     */
    clientUrl: string;
}