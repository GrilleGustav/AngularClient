import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { RoleViewModel } from "../roleView.model";


/**
 * Role settings response.
 */
export interface RolesSettingsResponseModel extends ErrorResponse {
    /**
     * Roles.
     */
    roles: RoleViewModel[]; 
}