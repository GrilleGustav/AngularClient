import { ErrorResponse } from "../errorResponse.model";

/**
 * Username exist response.
 */
export interface UsernameExistResponse extends ErrorResponse {
    /**
     * Flag indicating if user name already exist.
     */
    exist: boolean;
}