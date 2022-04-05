/**
 * Request data for password reset.
 */
 export interface ResetPassword {
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