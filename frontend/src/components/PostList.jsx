import React, { useState, useEffect } from 'react';
import PostService from '../PostService';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
