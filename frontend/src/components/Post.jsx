import React from 'react';
import PostService from './PostService';

const Post = ({ post }) => {
  const handleDelete = () => {
    PostService.deletePost(post.id).then(() => {
      window.location.reload(); // Refresh the page to update the list of posts
    });
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
