import {supabase} from './supabaseClient'

import type {MarkdownInstance} from 'astro'

export async function syncBlogPosts(posts: MarkdownInstance<Record<string, any>>[]) {
  const postDatabaseType = posts.map(m => {return{file_name: m.file, title: m.frontmatter.title}})

  const {data, error} = await supabase
    .from('blog_posts')
    .upsert(
      postDatabaseType
    )

  console.log(data, error)
}
