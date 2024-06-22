import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon("postgresql://Brainstormdb_owner:M4JxZ6iGVXST@ep-silent-tree-a5awz02p.us-east-2.aws.neon.tech/Brainstormdb?sslmode=require");
export const db = drizzle(sql,{schema});

