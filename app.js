#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printErr } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';


async function saveToken(token) {
  if (!token.length) {
    printErr('Не передан token!');
    return;
  }

  try {
    await saveKeyValue('token', token);

    printSuccess('Токен сохранен!');
  } catch (err) {
    printErr(err.message);
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
}


InitCLI();
