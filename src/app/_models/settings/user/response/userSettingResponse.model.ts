import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { UserViewModel } from "../UserView.model";

/**
 * User response.
 */
export interface UserSettingResponseModel extends ErrorResponse {
    /**
     * Application user.
     */
    user: UserViewModel;
}