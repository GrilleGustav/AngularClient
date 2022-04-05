import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { EmailServerViewModel } from "../emailServerView.model";

/**
 * Emial server settings response.
 */
export interface EmailServerSettingsResponse extends ErrorResponse  {
    /**
     * Email servers.
     */
    emailServers: EmailServerViewModel[];

}