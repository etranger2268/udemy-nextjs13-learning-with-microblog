import { createClient } from '@supabase/supabase-js';
import { SUPABASE_NOT_FOUND } from '@/constants/constants';
import type { Database } from '@/types/database.types';

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseURL || !supabaseAnonKey) {
  throw new Error(SUPABASE_NOT_FOUND);
}

export const supabase = createClient<Database>(supabaseURL, supabaseAnonKey, {
  auth: { persistSession: false },
});
