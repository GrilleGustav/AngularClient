import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { EmailSenderViewModel } from "../emailSenderView.model";

/**
 * Email sender setting response.
 */
export interface EmailSenderSettingResponseModel extends ErrorResponse {
    /**
     * Email sender.
     */
    emailSender: EmailSenderViewModel;
}