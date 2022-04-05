import { ErrorResponse } from "../errorResponse.model";

/**
 * Email exist response.
 */
export interface EmailExistResponse extends ErrorResponse {
    /**
     * Flag indicating if user with email already exist.
     */
    exist: boolean;
}