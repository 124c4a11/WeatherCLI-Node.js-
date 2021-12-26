function getArgs(args) {
  const [executor, file, ...rest] = args;
  const res = {};

  rest.forEach((arg, ndx, arr) => {
    if (arg.charAt(0) === '-') {
      if (ndx === arr.length - 1) {
        res[arg.substring(1)] = true;
        return;
      }

      const nextArg = arr[ndx + 1];

      if (nextArg.charAt(0) !== '-') {
        res[arg.substring(1)] = nextArg;
      } else {
        res[arg.substring(1)] = true;
      }
    }
  });

  return res;
}


export { getArgs };
