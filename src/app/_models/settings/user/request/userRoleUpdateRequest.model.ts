import { RoleViewModel } from "../../role/roleView.model";


/**
 * User role update request.
 */
export interface UserRoleUpdateRequestModel {
    /**
     * User id.
     */
    userId: string;

    /**
     * Roles.
     */
    roles: RoleViewModel[];
}