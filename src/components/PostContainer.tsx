import { create } from 'domain'
import { IPost } from 'models/IPost'
import React, { useEffect, useState } from 'react'
import { postAPI } from 'servicies/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const [limit, setLimit] = useState(15)
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
    // const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000 //analog of web-sockets - allows once a period actualize data
    // })

    const [createPost, { }] = postAPI.useCreatePostMutation()
    const [deletePost,{}]=postAPI.useDeleteMutation()
    const [update,{}]=postAPI.useUpdatePostMutation()

    useEffect(() => {
        //   setTimeout(() => {
        //       setLimit(3)
        //   }, 2000);
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post:IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post:IPost) => {
        update(post)
    }

    return (
        <div>
            <div className="posts__list">
                <button
                    onClick={handleCreate}
                >AddNewPost</button>
                <hr />
                <button
                    onClick={refetch}
                >Refetch DATA</button>
                <hr />
                {isLoading && <h1>Posts are loading....</h1>}
                {error && <h1>Some error happened</h1>}
                {posts && posts.map(post => <PostItem
                    remove={handleRemove}
                    update={handleUpdate}
                    post={post} key={post.id} />)}
            </div>
        </div>
    )
}

export default PostContainer