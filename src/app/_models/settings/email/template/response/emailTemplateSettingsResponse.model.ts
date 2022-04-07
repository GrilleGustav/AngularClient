import { EmailTemplateViewModel } from "../emailTemplateView.model";
import { ErrorResponse } from "src/app/_models/user/errorResponse.model";

/**
 * Email templates response.
 */
export interface EmailTemplateSettingsResponseModel extends ErrorResponse {
    /**
     * Email templates.
     */
    emailTemplate: EmailTemplateViewModel[];
}