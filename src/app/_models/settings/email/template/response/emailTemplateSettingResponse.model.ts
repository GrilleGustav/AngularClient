import { EmailTemplateViewModel } from "../emailTemplateView.model";
import { ErrorResponse } from "src/app/_models/user/errorResponse.model";

/**
 * Email template response.
 */
export interface EmailTemplateSettingResponse extends ErrorResponse {
    /**
     * Email template.
     */
    emailTemplate: EmailTemplateViewModel;
}