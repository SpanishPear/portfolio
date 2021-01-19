import { Box } from '@material-ui/core';
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

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        width="50%"
        border="1px solid black"
        padding="30px"
        background-color="red"
      >
        <ReactMarkdown source={text} />
      </Box>
    </Box>
  );
};

export default BlogPost;
