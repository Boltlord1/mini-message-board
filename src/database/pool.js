import fs from 'node:fs';
import path from 'node:path';
import { Pool } from 'pg';

const caCertPath = path.join(process.cwd(), 'supabase-ca.crt');
const caCert = fs.readFileSync(caCertPath, 'utf8');

console.log(process.env.POSTGRES_URL)
const connectionString = process.env.POSTGRES_URL
export default new Pool({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false },
	max: 1
})