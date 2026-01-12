import { Pool } from 'pg'

const connectionString = Postgres.DATABASE_URL
export default new Pool({connectionString: connectionString})
// Postgres.DATABASE_URL