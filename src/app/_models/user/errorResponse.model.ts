import { Error } from "../error.model";


/**
 * Error response.
 */
export interface ErrorResponse {
    /**
     * Flag indicating if the operation was successfully completed.
     */
    isSuccess: boolean;

    /**
     * If operation not was successfully completed, contains one or more errors.
     */
    errors: Error[];

    /**
     * Flag indicating if current user need refresh his token. 
     * For example, user roles have changed and the access token needs to be updated with the new rights.
     */
    tokenNeedsRefresh: boolean;
}