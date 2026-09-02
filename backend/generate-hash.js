#!/usr/bin/env node
import crypto from 'crypto';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter admin username: ', (username) => {
  rl.question('Enter admin password: ', (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) {
        console.error('Error:', err);
        rl.close();
        return;
      }
      const passwordHash = derivedKey.toString('hex');
      console.log('\n--- Add this to backend/config.json ---');
      console.log(JSON.stringify({
        adminUsers: [{ username, passwordHash, salt }],
        maxSessions: 5
      }, null, 2));
      console.log('---------------------------------------\n');
      rl.close();
    });
  });
});
