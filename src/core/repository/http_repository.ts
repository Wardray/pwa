import { Result } from "../helper/result";

export class HttpRepository {
  serverAddress = "http://localhost:4000";
  authJsonRequest = async <T>(
    url: string,
    method: string = "GET",
    requestBody?: any
  ): Promise<Result<void, T>> =>
    this.jsonRequest(url, method, requestBody, {
      auth: localStorage.getItem("auth"),
    });

  jsonRequest = async <T>(
    url: string,
    method: string = "GET",
    requestBody?: any,
    requestHeaders?: any
  ): Promise<Result<void, T>> => {
    try {
      const reqInit = {
        body: JSON.stringify(requestBody),
        method: method,
        headers: Object.assign(
          { "Content-Type": "application/json" },
          requestHeaders
        ),
      };

      const response = await fetch(this.serverAddress + url, reqInit);
      return Result.ok(await response.json());
    } catch (e) {
      return Result.error(undefined);
    }
  };
}
