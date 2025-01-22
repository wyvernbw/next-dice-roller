import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database(process.env.DB_FILE_NAME!);
export const db = drizzle({ client: sqlite });
migrate(db, { migrationsFolder: './drizzle' });
