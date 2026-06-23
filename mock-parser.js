const methods = [
  'DELETE', 'GET', 'HEAD', 'POST', 'PUT',
  'CONNECT', 'OPTIONS', 'TRACE', 'COPY', 'LOCK', 'MKCOL', 'MOVE', 'PROPFIND',
  'PROPPATCH', 'SEARCH', 'UNLOCK', 'BIND', 'REBIND', 'UNBIND', 'ACL',
  'REPORT', 'MKACTIVITY', 'CHECKOUT', 'MERGE', 'M-SEARCH', 'NOTIFY',
  'SUBSCRIBE', 'UNSUBSCRIBE', 'PATCH', 'PURGE', 'MKCALENDAR', 'LINK',
  'UNLINK', 'SOURCE'
];

function HTTPParser() {}
HTTPParser.methods = methods;
HTTPParser.kOnHeaders = 0;
HTTPParser.kOnHeadersComplete = 1;
HTTPParser.kOnMessageComplete = 2;
HTTPParser.kOnBody = 3;

const mockParser = {
  HTTPParser: HTTPParser,
  methods: methods
};

if (typeof process.binding !== 'function') {
  process.binding = function(name) {
    if (name === 'http_parser') {
      return mockParser;
    }
    throw new Error('No such module: ' + name);
  };
} else {
  const originalBinding = process.binding;
  process.binding = function(name) {
    if (name === 'http_parser') {
      return mockParser;
    }
    return originalBinding.apply(this, arguments);
  };
}
