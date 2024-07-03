'use client'

import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import Divider from '@mui/material/Divider';
import './styles.css'
import Link from 'next/link';

interface PostDetails {
    title: string;
    postBody: string;
    id: number
}

const PostCard: React.FC<PostDetails> = ({ title, postBody, id }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);
    const [clickedCard, setClickedCard] = useState()

    const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleMouseOut = () => {
        setOpen(false)
    };

    return (
        <div className='card-container'>
            <Link href={`/posts/${id}`}>
            <Card sx={{ height: 300 }}>
                <CardContent >
                    <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
                        <Typography  variant="h5" gutterBottom className='ellipsis'>
                            {title}
                        </Typography>
                    </div>
                    <Divider />
                    <Typography className='post-body'>
{postBody}
                    </Typography>
                </CardContent>
                </Card>
                </Link>
            <Popper open={open} anchorEl={anchorEl} placement="bottom">
                <div className='title-popper'>
                    {title}
                </div>
            </Popper>
        </div>
    );
};

export default PostCard;
