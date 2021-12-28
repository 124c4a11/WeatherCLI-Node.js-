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


export function printWeather(data, icon) {
  console.log(
   dedent`

   ${chalk.bgCyan(' WEATHER ')} Погода в городе ${data.name}
   ${icon}  ${data.weather[0].description}
   Температура: ${data.main.temp} (ощущается как: ${data.main.feels_like})
   Влажность: ${data.main.humidity}%
   Скорость ветра: ${data.wind.speed}
   `
 );
}
