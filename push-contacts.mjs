import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';
import path from 'path';

const dir = process.cwd();
const remoteUrl = 'https://github.com/aashkaa1809-ctrl/jasmine-aroma.git';
const token = process.env.GITHUB_TOKEN;

async function run() {
  const ignorePatterns = [
    'node_modules',
    '.next',
    '.git',
    '.env',
    '.env.local'
  ];

  function shouldIgnore(relPath) {
    const parts = relPath.split(path.sep);
    return parts.some(p => ignorePatterns.includes(p));
  }

  function getAllFiles(currentDir, baseDir = currentDir) {
    let results = [];
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(baseDir, fullPath);
      if (shouldIgnore(relPath)) continue;

      if (entry.isDirectory()) {
        results = results.concat(getAllFiles(fullPath, baseDir));
      } else {
        results.push(relPath.replace(/\\/g, '/'));
      }
    }
    return results;
  }

  const files = getAllFiles(dir);
  console.log(`Staging ${files.length} files...`);

  for (const filepath of files) {
    await git.add({ fs, dir, filepath });
  }

  console.log('Committing changes...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Aashka',
      email: 'contact@jasminearoma.in',
    },
    message: 'Update official contact details: phone 8307369611, email contact@jasminearoma.in, and instagram @jasmine.aroma_'
  });
  console.log('Committed SHA:', sha);

  const currentBranch = await git.currentBranch({ fs, dir }) || 'main';
  console.log(`Current branch: ${currentBranch}`);

  console.log(`Pushing to ${remoteUrl}...`);
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    url: remoteUrl,
    ref: currentBranch,
    force: false,
    onAuth: () => ({ username: token })
  });

  console.log('Push complete to GitHub!', pushResult);
}

run().catch((err) => {
  console.error('Push error:', err);
  process.exit(1);
});
