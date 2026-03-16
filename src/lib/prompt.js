import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export function canPrompt() {
  return Boolean(input.isTTY && output.isTTY);
}

export function createPrompter() {
  const rl = readline.createInterface({ input, output });

  return {
    async intro(title, lines = []) {
      console.log("");
      console.log(title);
      for (const line of lines) {
        console.log(line);
      }
      console.log("");
    },

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

    async menu(message, items, defaultValue) {
      console.log(message);
      items.forEach((item, index) => {
        const selected = item.value === defaultValue ? " [default]" : "";
        console.log(`  ${index + 1}. ${item.label}${selected}`);
        if (item.description) {
          console.log(`     ${item.description}`);
        }
      });

      while (true) {
        const answer = await rl.question("Choose one option by number or value: ");
        const value = answer.trim();
        const normalized = value || defaultValue;
        const byIndex = Number.parseInt(normalized, 10);

        if (!Number.isNaN(byIndex) && items[byIndex - 1]) {
          return items[byIndex - 1].value;
        }

        const exact = items.find((item) => item.value === normalized);
        if (exact) {
          return exact.value;
        }

        console.log("Invalid selection.");
      }
    },

    async multiChoice(message, items, defaultValues = []) {
      console.log(message);
      items.forEach((item, index) => {
        const selected = defaultValues.includes(item.value) ? " [default]" : "";
        console.log(`  ${index + 1}. ${item.label}${selected}`);
        if (item.description) {
          console.log(`     ${item.description}`);
        }
      });
      console.log("Enter comma-separated numbers or values.");

      while (true) {
        const answer = await rl.question("Choose one or more options: ");
        const rawValues = answer.trim()
          ? answer.split(",").map((value) => value.trim()).filter(Boolean)
          : defaultValues;

        const values = [];
        let valid = true;

        for (const rawValue of rawValues) {
          const byIndex = Number.parseInt(rawValue, 10);
          if (!Number.isNaN(byIndex) && items[byIndex - 1]) {
            values.push(items[byIndex - 1].value);
            continue;
          }

          const exact = items.find((item) => item.value === rawValue);
          if (exact) {
            values.push(exact.value);
            continue;
          }

          valid = false;
          break;
        }

        if (valid && values.length > 0) {
          return [...new Set(values)];
        }

        console.log("Invalid selection.");
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
