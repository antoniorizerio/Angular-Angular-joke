export let VALUE = 1;

export function getValue(): string {
  let v = VALUE;
  VALUE = VALUE +1;
  return v.toString();
}
