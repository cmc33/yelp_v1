const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
// alternatively, we can use process.argv[1]
// const isDev = (process.argv[1] || '')
//                .indexOf('hjs-dev-server') !== -1;

// ...
var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
})