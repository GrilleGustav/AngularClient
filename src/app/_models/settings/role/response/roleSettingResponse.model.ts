import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { RoleViewModel } from "../roleView.model";

/**
 * Role settings response.
 */
export interface RoleSettingsResponse extends ErrorResponse {
    /**
     * Role.
     */
    role: RoleViewModel;
}