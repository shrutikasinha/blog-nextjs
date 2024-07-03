import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography as T, Divider } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { getPosts } from '@/app/utils/api'
import PostCard from './PostCard';

interface Posts {
    title: string;
    body: string;
    id: number
}

const Posts: React.FC = async () => {
    const data: Posts[] = await getPosts()
    
  return (
      <div>
          <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {data.map((_, index) => (
      <Grid item xs={2} sm={4} md={4} key={index}>
          <PostCard title={_.title} postBody={_.body} id={_.id} />
    </Grid>
  ))}
</Grid>
          
          
    </div>
  )
}

export default Posts