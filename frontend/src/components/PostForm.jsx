import React, { useState } from 'react';
import PostService from './PostService';

const PostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={e => setContent(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
