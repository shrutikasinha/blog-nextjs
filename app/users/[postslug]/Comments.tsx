'use client'

import { useParams } from 'next/navigation';

const SlugPage = () => {
  const params = useParams();
  const slug = params.userslug;

  return (
    <div>
      <h1>Dynamic Route: {slug}</h1>
      {/* Render your content based on the slug */}
    </div>
  );
};

export default SlugPage;
