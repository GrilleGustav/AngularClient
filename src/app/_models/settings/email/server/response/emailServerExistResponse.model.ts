import { ErrorResponse } from "src/app/_models/user/errorResponse.model";

/**
 * Email server exist response model.
 */
export interface EmailServerExistResponseModel extends ErrorResponse {
    /**
     * Indicates server exist.
     */
    exist: boolean;
}