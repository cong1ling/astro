import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const routesPath = resolve('dist/_routes.json');
const routes = JSON.parse(readFileSync(routesPath, 'utf-8'));

// Deduplicate exclude paths that are already covered by a wildcard
const wildcards = routes.exclude.filter(r => r.endsWith('/*'));
const cleaned = routes.exclude.filter(r => {
  if (r.endsWith('/*')) return true;
  // Remove specific paths that are already covered by a wildcard
  const segments = r.split('/');
  for (let i = 1; i < segments.length; i++) {
    const prefix = segments.slice(0, i).join('/') + '/*';
    if (wildcards.includes(prefix)) return false;
  }
  return true;
});

routes.exclude = cleaned;
writeFileSync(routesPath, JSON.stringify(routes, null, 2) + '\n');
console.log('✓ Fixed _routes.json — removed overlapping rules');
