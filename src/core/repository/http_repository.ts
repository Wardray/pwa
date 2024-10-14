import { Result } from "../helper/result";

export class HttpRepository {
  serverAddress = "http://localhost:8080";
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
      console.log(JSON.stringify(requestBody));
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
      console.log(e);
      return Result.error(undefined);
    }
  };
  getContacts = () =>
    this.jsonRequest<[string]>("/user/get/contacts", "POST", {
      id: localStorage.getItem("authUserName"),
    });
}
