export interface ResponseSuccess<T extends unknown> {
  success: boolean;
  error: null;
  body: T;
}
