import { validate, ValidationError } from "class-validator";
import { Result } from "./result";

export class ValidationModel {
  valid = async <T>(): Promise<Result<string, T>> => {
    const errors: ValidationError[] = await validate(this, {
      skipMissingProperties: false,
      whitelist: false,
      forbidNonWhitelisted: true,
    });

    if (errors.length !== 0) {
      const message = errors.map((error: ValidationError) => {
        let result = "";
        if (error.children)
          error.children.map((el) => {
            if (el.constraints) {
              result += Object.values(el.constraints).join(", ");
            }
          });
        if (error.constraints)
          result += Object.values(error.constraints).join(", ");
        return result;
      });
      return Result.error(message.join(", \n"));
    } else {
      return Result.ok(this as unknown as T);
    }
  };
}
