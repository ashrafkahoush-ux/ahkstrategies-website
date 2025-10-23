#!/usr/bin/env node

const cron = require('node-cron');
const { execSync } = require('child_process');

console.log('⏰ Cron scheduler started. Daily snapshots at 23:00 local time.');

cron.schedule('0 23 * * *', () => {
  console.log('Running scheduled snapshot and diff...');
  execSync('node scripts/snapshot.js && node scripts/diff.js', { stdio: 'inherit' });
});
