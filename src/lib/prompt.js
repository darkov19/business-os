import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export function canPrompt() {
  return Boolean(input.isTTY && output.isTTY);
}

export function createPrompter() {
  const rl = readline.createInterface({ input, output });

  return {
    async text(message, defaultValue) {
      const suffix = defaultValue ? ` [${defaultValue}]` : "";
      const answer = await rl.question(`${message}${suffix}: `);
      return answer.trim() || defaultValue;
    },

    async choice(message, choices, defaultValue) {
      const display = choices
        .map((choice) => (choice === defaultValue ? `${choice}*` : choice))
        .join(", ");

      while (true) {
        const answer = await rl.question(`${message} (${display}): `);
        const value = answer.trim() || defaultValue;

        if (choices.includes(value)) {
          return value;
        }

        console.log(`Invalid choice '${value}'. Expected one of: ${choices.join(", ")}`);
      }
    },

    async yesNo(message, defaultValue = true) {
      const hint = defaultValue ? "[Y/n]" : "[y/N]";

      while (true) {
        const answer = (await rl.question(`${message} ${hint}: `)).trim().toLowerCase();

        if (!answer) {
          return defaultValue;
        }

        if (["y", "yes"].includes(answer)) {
          return true;
        }

        if (["n", "no"].includes(answer)) {
          return false;
        }

        console.log("Please answer yes or no.");
      }
    },

    close() {
      rl.close();
    }
  };
}
