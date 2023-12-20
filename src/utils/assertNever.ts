export default function assertNever(x: never): never {
  throw new Error("Variable must be type of never!");
}
