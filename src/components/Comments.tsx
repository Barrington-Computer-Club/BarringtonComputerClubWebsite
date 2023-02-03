import type { MarkdownInstance } from "astro"
import { useEffect, useState } from "react"
import type { Database } from "../../lib/database.types"
import { supabase } from "../database/supabaseClient"
import { syncBlogPosts } from "../database/syncBlogPosts"

type DatabaseComment = Database["public"]["Tables"]["comments"]["Row"]

export default function Comments(props: {posts: MarkdownInstance<Record<string, any>>[], name: string}) {
  const [comments, setComments] = useState<DatabaseComment[]>()

  const {posts, name} = props

  useEffect(() => {
    syncBlogPosts(posts)
    getComments()
  }, [])

  const getComments = async () => {
    const {data, error} = await supabase.from('comments').select('*').eq('blog_post', name)

    if (error) {
      console.log(error)
      return;
    }

    if (data === null) {
      console.log("There is no comments for the blog post")
      return;
    }

    setComments(data)

  }

  const addComment = async (title: string, content: string) => {
    const {data, error} = await supabase.from('comments').insert({title: title, content: content, blog_post: name, user_id: '5cec3d82-1d9a-4f1a-9e64-e62a029a2baf'})
    console.log(data)
    console.log(error)
  }


  return (
    <div>
      <CommentsDisplay comments={comments ?? null} />
      <AddComments add={async (title: string, content: string) => {
              await addComment(title, content)
              await getComments()
          }} />
    </div>
  )
}

function CommentsDisplay(props: {comments?: DatabaseComment[] | null}) {
  const {comments} = props

  return (
    <div>
      <h1>Comments</h1>
      {comments?.map((d) => (
        <div>
          <h3>{d.title}</h3>
          <p>{d.content}</p>
        </div>
      ))}
    </div>
  )
}

function AddComments(props: {add: (title: string, content: string) => void}) {
  const {add} = props

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <div>
      <h1>Add Comment</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => add(title, content)}>Add</button>
    </div>
  )
}
      




