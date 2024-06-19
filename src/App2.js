import React, { useEffect, useState } from 'react';
import './assets/tailwind.css';
import VideoCard from './components/VideoCard';
import VideoSearch from './components/VideoSearch';
import TotalSearch from './components/TotalSearch';
import Gallery from './components/Gallery';

function App() {
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
      <Gallery />

    </div >
  );
}

export default App;
