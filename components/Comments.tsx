'use client'

import Giscus from '@giscus/react'
import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }

  return (
    <>
      <Giscus
        id="comments"
        repo="p314dO/Offensive-Mobile"
        repoId="R_kgDOMS5-NQ"
        category="General"
        categoryId="DIC_kwDOMS5-Nc4Cgtak"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </>
  )
}
