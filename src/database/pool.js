import { Pool } from 'pg'

const connectionString = process.env.DATABASE_PUBLIC_URL
export default new Pool({connectionString: connectionString})