import { useQuery } from '@tanstack/react-query';
import SinglePost from './SinglePost';
import { useEffect, useState } from 'react';

const AllPost = () => {
  const [posts, setPosts] = useState([]); // Initialize posts state as an empty array

  const { data, isLoading, error } = useQuery({
    queryKey: ['AllPost'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/allPost');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    },
  });

  // Update posts state when data changes
  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(posts);

  return (
    <div className='bg-[#111827]'>
      {posts.map(post => (
        <SinglePost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default AllPost;
