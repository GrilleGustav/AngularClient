import { ErrorResponse } from "../errorResponse.model";

/**
 * Email exist response.
 */
export interface EmailExistResponseModel extends ErrorResponse {
    /**
     * Flag indicating if user with email already exist.
     */
    exist: boolean;
}