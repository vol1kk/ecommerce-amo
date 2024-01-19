export type ZodErrorType = {
  path: string[];
  message: string;
};

type FlattenedObject = { [key: string]: string };

export default function getZodErrors(errors: ZodErrorType[]) {
  if (!errors) {
    return null;
  }

  return errors.reduce((obj: FlattenedObject, error) => {
    const path = error.path.join(".");
    obj[path] = error.message;

    return obj;
  }, {});
}
