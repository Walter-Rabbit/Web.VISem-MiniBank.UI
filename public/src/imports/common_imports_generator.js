// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readdir } = require('fs').promises;

async function* getFiles(dir) {
  const dirs = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirs) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('fs').writeFileSync('common_imports.js', '');

async function packJsFiles() {
  for await (const f of getFiles('../blocks')) {
    if (f.endsWith('.js')) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      let data = require('fs').readFileSync(f);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('fs').appendFileSync('common_imports.js', data + '\n');
    }
  }
}
