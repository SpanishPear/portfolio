import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const content = `# ${slug}`;

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default BlogPost;
