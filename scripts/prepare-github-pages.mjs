import { copyFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const outputRoot = path.resolve('dist/client');
const entries = await readdir(outputRoot, { recursive: true, withFileTypes: true });

for (const entry of entries) {
  if (!entry.isFile() || !entry.name.endsWith('.html') || entry.name === 'index.html' || entry.name === '404.html') continue;

  const source = path.join(entry.parentPath, entry.name);
  const routeDirectory = source.slice(0, -'.html'.length);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(source, path.join(routeDirectory, 'index.html'));
}
