import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';
import path from 'path';

const dir = process.cwd();
const remoteUrl = 'https://github.com/aashkaa1809-ctrl/jasmine-aroma.git';
const token = process.env.GITHUB_TOKEN;

async function run() {
  console.log('Initializing local git repository...');
  await git.init({ fs, dir });

  // Read .gitignore
  const ignorePatterns = [
    'node_modules',
    '.next',
    '.git',
    '.env',
    '.env.local',
    'package-lock.json.bak'
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
  console.log(`Staging ${files.length} project files...`);

  for (const filepath of files) {
    await git.add({ fs, dir, filepath });
  }

  console.log('Creating commit...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Aashka',
      email: 'aashka@jasminearoma.com',
    },
    message: 'Initial commit: Jasmine Aroma luxury home decor platform'
  });
  console.log('Committed SHA:', sha);

  if (!token) {
    console.log('Repository prepared and committed locally!');
    console.log('To push to remote, please provide GITHUB_TOKEN.');
    return;
  }

  console.log('Ensuring branch is main...');
  try {
    await git.branch({ fs, dir, ref: 'main', checkout: true });
  } catch (e) {
    // ignore if already main
  }

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
    force: true,
    onAuth: () => ({ username: token })
  });

  console.log('Push complete!', pushResult);
}

run().catch((err) => {
  console.error('Error during git operation:', err);
  process.exit(1);
});
