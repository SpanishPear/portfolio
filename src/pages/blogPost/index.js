import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../components';

const BlogPost = () => {
  const [text, setText] = useState('# Loading...');

  const { slug } = useParams();
  const url = `https://raw.githubusercontent.com/SpanishPear/portfolio/main/src/assets/blogs/${slug}.md`;
  console.log(url);
  fetch(url)
    .then((res) => res.text())
    .then((txt) => setText(txt));

  return (
    <Box>
      <NavBar active="Blog" />
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
          <ReactMarkdownWithHtml source={text} allowDangerousHtml />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
