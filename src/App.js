import React, { useEffect, useState } from 'react';
import './assets/tailwind.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        console.log(data.hits);
        setImages(data.hits);
      })
      .catch(err => console.log(err));
  }, [term])

  return (
    <div className="container mx-auto my-7">
      <ImageSearch searchText={text => setTerm(text)} />
      <div className='w-full'>
        {images.length === 0 && <img src='https://cdn.pixabay.com/photo/2016/11/02/05/32/error-1790610_1280.png' />}</div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
