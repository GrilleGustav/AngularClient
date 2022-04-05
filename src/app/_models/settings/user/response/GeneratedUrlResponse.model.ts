import { ErrorResponse } from "src/app/_models/user/errorResponse.model";

/**
 * Generated url response.
 */
export interface GeneratedUrlResponseModel extends ErrorResponse {
    /**
     * Generated url.
     */
    url: string;
}