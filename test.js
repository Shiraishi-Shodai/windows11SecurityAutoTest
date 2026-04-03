const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promiseで包む
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  console.log("Hello");

  const answer = await ask("名前を入力してください: ");
  console.log(answer);

  console.log("finish");

  rl.close();
}

main();