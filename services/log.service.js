import chalk from 'chalk';
import dedent from 'dedent-js';


export function printErr(err) {
  console.log(`${chalk.bgRed(' ERROR ')} ${err}`);
}


export function printSuccess(msg) {
  console.log(`${chalk.bgGreen(' SUCCESS ')} ${msg}`);
}


export function printHelp() {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
  );
}
