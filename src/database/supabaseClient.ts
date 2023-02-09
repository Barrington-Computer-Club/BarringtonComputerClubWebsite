import { createClient } from "@supabase/supabase-js";

import cookie from "cookie"

import type { Database } from '../../lib/database.types'

const supabaseurl = import.meta.env.PUBLIC_SUPABASE_URL
const supabasekey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseurl, supabasekey);

export async function getUser(req: Request) {
  const c = cookie.parse(req.headers.get('cookie') ?? "");
  if (!c.sbat) {
    return null
  }

  const { data: { user } } = await supabase.auth.getUser(c.sbat);

  if (!user || user.role !== "authenticated") {
    return null
  }
  return user
}





