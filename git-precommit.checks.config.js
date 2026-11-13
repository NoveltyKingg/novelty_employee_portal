module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      message: 'You’ve got conflict markers laying around',
      regex: /^[<>|=]{4,}/m,
    },
    {
      message: 'Sure looks like you left a "if - (true)" somewhere',
      regex: /if\s+\(?(?:.\|\|\s)?true\)?/,
    },
    {
      filter: /\.js$/,
      message: '🤔 Hu.  There are "console.log(…)" call in there.',
      regex: /^\s*console\.log/,
    },
    {
      message: 'You have unfinished devs',
      nonBlocking: 'true',
      regex: '(?:FIXME|TODO)',
    },
  ],
};
