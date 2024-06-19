function Gallery() {

  return (<><div className='w-full'>
    {videos.length === 0 && <img src='https://cdn.pixabay.com/photo/2016/11/02/05/32/error-1790610_1280.png' />}</div>
    <div className='gallery'>
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div></>)
}

export default Gallery;