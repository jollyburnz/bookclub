export interface MailerLiteSuccessResponse {
    message: string;
  }
  
  export interface MailerLiteErrorResponse {
    message: string;
    error?: any;
  }