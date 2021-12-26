#!/usr/bin/env node

import { getArgs } from './helpers/args.js';


function InitCLI() {
  const args = getArgs(process.argv);
  console.log(args);
}


InitCLI();
