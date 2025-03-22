export function greeting(name: string = 'world') {
  const greeting = `hello ${name}!`;
  console.log(greeting);
  return greeting;
}
