import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { ApplicationClaimViewModel } from "../applicationClaimView.model";

/**
 * Application claims response.
 */
export interface ApplicationClaimsResponseModel extends ErrorResponse {
    /**
     * Application claims.
     */
    applicationClaims: Map<string, ApplicationClaimViewModel[]>;
}