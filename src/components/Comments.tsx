import type { MarkdownInstance } from "astro"
import { AiOutlineCalendar } from "react-icons/ai"
import { BsTrashFill } from "react-icons/bs"
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

  const addComment = async (content: string) => {
    const {data, error} = await supabase.from('comments').insert({
      content: content,
      blog_post: name,
      user_id: '5cec3d82-1d9a-4f1a-9e64-e62a029a2baf',
      date: new Date().toISOString()
    })
    console.log(data)
    console.log(error)
  }


  return (
    <div>
      <AddComments add={async ( content: string) => {
              await addComment(content)
              await getComments()
          }} />
      {comments ? <CommentsDisplay comments={comments} /> : null } 
    </div>
  )
}

function CommentsDisplay(props: {comments: DatabaseComment[]}) {
  const {comments} = props

  const commentsWithIsUser = comments.map((comment) => {
    return {
      ...comment, // TODO:  DO THIS
    }
  })

  return (
    <div className="sm:w-7/12 bg-white rounded-2xl mx-auto p-8 mt-10"> 
      <h1>Comments</h1>
      <div className="flex flex-row flex-wrap gap-10">
        {commentsWithIsUser?.map((d) => (
          <div className="bg-gray-200 rounded-3xl shadow-xl w-fit flex-grow">

            <div className="flex flex-row bg-gray-100 rounded-tl-3xl items-center gap-3 rounded-tr-3xl p-3">
              <h2 className="text-gray-400 text-2xl">Author</h2>
              <div className="flex flex-row bg-white items-center rounded-full px-3 gap-3">
                <AiOutlineCalendar className="fill-black" size={20} />
                <p className="text-sm">{d.date}</p>
              </div>
            </div>

            <p className="pb-3 px-3 text-2xl">{d.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AddComments(props: {add: (content: string) => void}) {
  const {add} = props

  const [content, setContent] = useState('')

  return (
    <div className="sm:w-7/12 mx-auto text-center group p-10 mt-10 transition-all flex flex-row gap-5 justify-center item-center">
      <input className="bg-none group-hover:shadow-lg transition-all active:outline-none rounded-3xl focus:outline-none w-full p-5 text-2xl" type="text" placeholder="Add a comment..." value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="hover:bg-white hover:shadow-lg active:scale-95 px-3 transition-all rounded-full" onClick={() => add(content)}>Add</button>
    </div>
  )
}
      




