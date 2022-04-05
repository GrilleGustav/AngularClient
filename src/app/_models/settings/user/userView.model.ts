import { Language } from "src/app/_enums/language";

/**
 * Application user.
 */
export interface UserViewModel {
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
     * Created on.
     */
    createdOn: Date;

    /**
     * Last accessed on.
     */
    lastAccessedOn: Date;

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
     * Concurrency stamp.
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
     * Access failed count.
     */
    accessFailedCount: number;
}