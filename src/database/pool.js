import fs from 'node:fs';
import path from 'node:path';
import { Pool } from 'pg';

const caCertPath = path.join(process.cwd(), 'supabase-ca.crt');
const caCert = fs.readFileSync(caCertPath, 'utf8');

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL
if (!connectionString) {
	console.error('No database connection string found')
}

export default new Pool({
    connectionString: connectionString,
    ssl: false,
	max: 1
})