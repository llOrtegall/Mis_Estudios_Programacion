const promisedString = Promise.resolve("Hello World");

type ResolvedString = Awaited<typeof promisedString>; 

async function printString(str: ResolvedString){
  console.log(str);
}

