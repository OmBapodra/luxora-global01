#!/usr/bin/env node
import { existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONFIG_FILE = join(__dirname, 'config.json');

async function main() {
  if (existsSync(CONFIG_FILE)) {
    console.log('config.json already exists, skipping creation.');
    process.exit(0);
  }

  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'changeme123';

  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = await new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (err, key) => {
      if (err) reject(err);
      else resolve(key);
    });
  });
  
  const config = {
    adminUsers: [{
      username,
      passwordHash: derivedKey.toString('hex'),
      salt
    }],
    maxSessions: parseInt(process.env.MAX_SESSIONS || '5', 10)
  };
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
  console.log('config.json created from environment variables.');
}

main().catch(err => {
  console.error('Error generating hash:', err);
  process.exit(1);
});
