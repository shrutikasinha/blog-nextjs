// pages/index.tsx or app/page.tsx
'use client'
import React from 'react';
import Comments from './Comments';
import { useParams } from 'next/navigation';

const ParentComponent: React.FC = () => {
  const params = useParams()
  const slug = params.postslug

  return (
    <div>
      <Comments postslug={slug} />
    </div>
  );
};

export default ParentComponent