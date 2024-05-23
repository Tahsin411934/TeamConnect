import { useQuery } from '@tanstack/react-query';
import SinglePost from './SinglePost';
import { useEffect } from 'react';

const AllPost = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['AllPost'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/allPost');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 1000); // Set auto-refresh interval to 1 second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-[#111827]'>
      {data.map(post => (
        <SinglePost key={post._id} post={post} refetch={refetch} />
      ))}
    </div>
  );
};

export default AllPost;
