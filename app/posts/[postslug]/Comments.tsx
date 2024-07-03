import React from 'react';
import { getComments, getPosts } from '@/app/utils/api';
import { Typography as T, Divider } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './styles.css'

interface ChildComponentProps {
  postslug: string;
} 

const Comments: React.FC<ChildComponentProps> = async ({ postslug }) => {
  const postData = await getPosts(postslug)
  let commentData = await getComments(postslug)
  const { title, body } = postData[0]
  const {name: commentTitle, body: commentBody} = commentData[0]

  return (
    <div className='comment-card-container'>
      <Card sx={{ width: '100%', height: 250  }}>
        <CardContent>
          <T variant={'h3'}>{title}</T>
          <T className='post-text'>{body}</T>
          <Divider />
          <div className='person-comment'>
            
            <T className='comment'>"{commentBody}"</T>
            <T className='comment'>By: {commentTitle}</T>

          </div>
          
        </CardContent>
        </Card>
      
    </div>
  );
};

export default Comments;
