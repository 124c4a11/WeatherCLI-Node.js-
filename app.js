#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printErr } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';


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


async function getForecast() {
  try {
    const weather = await getWeather('moscow');
    console.log(weather);
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

  getForecast();
}


InitCLI();
