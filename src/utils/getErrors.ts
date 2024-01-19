type ZodErrorType = {
  path: string[];
  message: string;
};

type FlattenedObject = { [key: string]: string };

export default function getErrors<T extends string>(errors: any) {
  if (!isZodError(errors)) return null;

  return errors.reduce((obj: FlattenedObject, error) => {
    const path = error.path.join(".");
    obj[path] = error.message;

    return obj;
  }, {}) as Record<T, string>;
}

function isZodError(data: any): data is ZodErrorType[] {
  if (!isObject(data)) return false;

  return "path" in data && "message" in data;
}

function isObject(value: any): value is object {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}
