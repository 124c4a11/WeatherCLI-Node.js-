#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';


function InitCLI() {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    return;
  }
}


InitCLI();
