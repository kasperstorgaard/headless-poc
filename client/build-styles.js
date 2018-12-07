const postcss = require('postcss');
const chokidar = require('chokidar');
const {promisify} = require('util');
const {readFile, writeFile, exists} = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const atImport = require('postcss-import');
const {argv} = require('yargs');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const existsAsync = promisify(exists);
const mkdirpAsync = promisify(mkdirp);

const processor = postcss().use(atImport());

const watch = argv.watch || argv.w;

const styles = 'src/**/*.css';

if (watch) {
  chokidar.watch(styles)
    .on('add', filePath => processFile(filePath))
    .on('change', filePath => processFile(filePath));
} else {
  styles.map(style => processFile(path.join(__dirname, style)));
}

async function processFile(filePath) {
  const relativePath = filePath.replace(__dirname + '/', '');
  const file = await readFileAsync(filePath, 'utf8');
  const processed = await processor.process(file, {from: relativePath});
  const outPath = relativePath.replace(/^src\//, 'dist/');

  const outDir = path.dirname(outPath);
  if (!(await existsAsync(outDir))) {
    await mkdirpAsync(outDir);
  }

  return writeFileAsync(path.join(__dirname, outPath), processed, 'utf8');
}