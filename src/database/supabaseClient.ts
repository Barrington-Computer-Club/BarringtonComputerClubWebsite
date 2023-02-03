import { createClient } from "@supabase/supabase-js";

import type { Database } from '../../lib/database.types'

// TODO: FIx this
const supabaseurl = "http://localhost:54321"
const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"

export const supabase = createClient<Database>(supabaseurl, supabasekey);





