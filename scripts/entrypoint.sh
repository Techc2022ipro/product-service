#!/bin/bash
echo "initalize environment file"

echo "Running npm install ..."
npm install --prefer-offline --no-audit

echo "Initalizing libraries modules"
npm --prefix /app/src/libraries/ install

echo "Creating database tables"
npx prisma db push

echo "Running seeder"
npx ts-node tagSeed.ts

echo "Running npm run ..."
npm run serve
