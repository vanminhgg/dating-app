export class ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
  
    constructor(success: boolean, options?: { data?: T; message?: string; error?: string }) {
      this.success = success;
      if (options?.data) this.data = options.data;
      if (options?.message) this.message = options.message;
      if (options?.error) this.error = options.error;
    }
  }