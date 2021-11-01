const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Simple and Secure Password Generator");
program
  .option("-l,--length <number>", "length of password", "8")
  .option("-s,--save", "save password to password.txt")
  .option("-nn,--no-numbers", "no numbers in generated password")
  .option("-ns,--no-symbols", "no symbols in generated password")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// PassWord Generator Func Input

const generatedPassword = createPassword(length, numbers, symbols);

// Save to file

if (save) {
  savePassword(generatedPassword);
}

// Copy to Clipboardy
clipboardy.writeSync(generatedPassword);

// PassWord Generator Func Output

log(chalk.blue("Securely Generated Password:") + chalk.bold(generatedPassword));
log(chalk.yellow("Password Copied to Clipboard"));
