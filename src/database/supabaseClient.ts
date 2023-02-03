import { createClient } from "@supabase/supabase-js";

import type { Database } from '../../lib/database.types'

const supabaseurl = import.meta.env.PUBLIC_SUPABASE_URL
const supabasekey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseurl, supabasekey);





