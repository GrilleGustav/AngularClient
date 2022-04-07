/**
 * Request data for password reset.
 */
 export interface ResetPasswordModel {
    /**
     * New Password.
     */
    password: string;

    /**
     * Confirmed password.
     */
    confirmPassword: string;

    /**
     * User email.
     */
    email: string;

    /**
     * Password reset token.
     */
    token: string;
}