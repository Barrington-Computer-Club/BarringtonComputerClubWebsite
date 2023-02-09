import { supabase } from "../database/supabaseClient";


export default function LoginModal() {
  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
    })

    console.log(data, error)
  }

  async function logout() {
    supabase.auth.signOut()
  }


  return (
    <div>
      <button onClick={signInWithDiscord}>Login with Discord</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
