#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import {
  printHelp,
  printSuccess,
  printErr,
  printWeather
} from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';


async function saveToken(token) {
  if (!token.length) {
    printErr('Не передан token!');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);

    printSuccess('Токен сохранен!');
  } catch (err) {
    printErr(err.message);
  }
}


async function saveCity(city) {
  if (!city.length) {
    printErr('Не передан city!');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);

    printSuccess('Город сохранен!');
  } catch (err) {
    printErr(err.message);
  }
}


async function getForecast() {
  try {
    const weather = await getWeather();
    const icon = getIcon(weather.weather[0].icon);

    printWeather(weather, icon);
  } catch (err) {
    switch (err?.response?.status) {
      case 404:
        printErr('Неверно указан город!');
        break;

      case 401:
        printErr('Неверно указан токен!');
        break;

      default:
        printErr(err.message);
    }
  }
}


function InitCLI() {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    return;
  }

  if (args.t) {
    saveToken(args.t);
    return;
  }

  if (args.s) {
    saveCity(args.s);
    return;
  }

  getForecast();
}


InitCLI();
