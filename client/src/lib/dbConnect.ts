<<<<<<< HEAD
import { Database } from '../../types/supabase';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
=======
const  createClient  =  require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASEURL || '',
  process.env.SUPABASEKEY || ''
)

export default supabase
>>>>>>> a762264f6ddd8eff158a332a8ca26e2e5c58a702
