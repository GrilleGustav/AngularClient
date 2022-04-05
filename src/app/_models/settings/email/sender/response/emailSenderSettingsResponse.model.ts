import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { EmailSenderViewModel } from "../emailSenderView.model";

/**
 * Email senders settings response.
 */
export interface EmailSenderSettingsResponseModel extends ErrorResponse {
    /**
     * Email senders.
     */
    emailSenders: EmailSenderViewModel[];
}