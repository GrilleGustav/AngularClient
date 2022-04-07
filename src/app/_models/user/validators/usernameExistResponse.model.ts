import { ErrorResponse } from "../errorResponse.model";

/**
 * Username exist response.
 */
export interface UsernameExistResponseModel extends ErrorResponse {
    /**
     * Flag indicating if user name already exist.
     */
    exist: boolean;
}