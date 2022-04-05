import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { EmailServerViewModel } from "../emailServerView.model";

/**
 * Email server settings response.
 */
export interface EmailServerSettingResponseModel extends ErrorResponse {
    /**
     * Email server.
     */
    emailServer: EmailServerViewModel;
}