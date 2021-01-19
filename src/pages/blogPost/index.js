import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const [text, setText] = useState('#Loading...');

  const { slug } = useParams();
  const url = `https://raw.githubusercontent.com/SpanishPear/portfolio/main/src/assets/blogs/${slug}.md`;
  console.log(url);
  fetch(url)
    .then((res) => res.text())
    .then((txt) => setText(txt));

  return <ReactMarkdown source={text} />;
};

export default BlogPost;
