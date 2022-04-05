import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { EmailMessageViewModel } from "../emailMessageView.model";

/**
 * Email messages response.
 */
export interface EmailMessageResponseModel extends ErrorResponse {
    /**
     * Email messages who system has send.
     */
    emailMessages: EmailMessageViewModel[];
}