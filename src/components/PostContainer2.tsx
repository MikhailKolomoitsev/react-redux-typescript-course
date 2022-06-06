import React from 'react'
import { postAPI } from 'servicies/PostService'
import PostItem from './PostItem'

const PostContainer2 = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(15)
    return (
        <div>
            <div className="posts__list">
                {isLoading && <h1>Posts are loading....</h1>}
                {error && <h1>Some error happened</h1>}
                {/* {posts && posts.map(post => <PostItem post={post} key={post.id} />)} */}
            </div>
        </div>
    )
}

export default PostContainer2