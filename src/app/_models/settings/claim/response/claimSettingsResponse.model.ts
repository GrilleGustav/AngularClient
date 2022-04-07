import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { ClaimViewModel } from "../claimView.model";

/**
 * Claims settings response.
 */
export interface ClaimSettingsResponseModel extends ErrorResponse {
    /**
     * CLaims.
     */
    claims: ClaimViewModel[];
}