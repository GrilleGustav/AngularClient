import { ErrorResponse } from "src/app/_models/user/errorResponse.model";
import { UserViewModel } from "../UserView.model";

/**
 * User Response.
 */
export interface UserSettingsResponseModel extends ErrorResponse {
  /** 
  * Array of application user.
  */
  users: UserViewModel[];
}