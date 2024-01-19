type ZodErrorType = {
  path: string[];
  message: string;
};

export default function getErrors<T extends string>(data: any) {
  if (!hasErrors(data) || !data.errors.every(e => isZodError(e))) return null;

  return data.errors.reduce(
    (obj, error) => {
      const path = error.path.join(".");
      obj[path] = error.message;

      return obj;
    },
    {} as Record<string, string>,
  ) as Record<T, string>;
}

function isZodError(data: any[]): data is ZodErrorType[] {
  if (!isObject(data)) return false;

  return "path" in data && "message" in data;
}

function hasErrors(data: any): data is { errors: any[] } {
  return isObject(data) && "errors" in data && Array.isArray(data.errors);
}

function isObject(value: any): value is object {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}
