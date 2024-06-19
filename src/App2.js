import React, { useEffect, useState } from 'react';
import './assets/tailwind.css';
import VideoCard from './components/VideoCard';
import VideoSearch from './components/VideoSearch';
import TotalSearch from './components/TotalSearch';

function App2() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&video_type=all`)
      .then(res => res.json())
      .then(data => {
        console.log(data.hits);
        setVideos(data.hits);
      })
      .catch(err => console.log(err));
  }, [term])

  return (
    <div className="container mx-auto my-7">
      <TotalSearch searchText={text => setTerm(text)} />
      <div className='w-full'>
        {videos.length === 0 && <img src='https://cdn.pixabay.com/photo/2016/11/02/05/32/error-1790610_1280.png' />}</div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default App2;
