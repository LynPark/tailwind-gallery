import { useRef, useState } from "react";
import { PlayFill, PauseFill } from 'react-bootstrap-icons';

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const tags = video.tags.split(', ');

  const handlePlayPause = () => {

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="max-x-sm rounded overflow-hidden shadow-lg w-100">
      <div className="relative w-full"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <video
          ref={videoRef}
          src={video.videos.large.url}
          className='w-full'
          muted
          autoPlay={isPlaying}
          loop />
        {isHovered && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-5xl"
            onClick={handlePlayPause}
          >
            {isPlaying ? <PauseFill /> : <PlayFill />}
          </button>
        )}
      </div>

      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Video by {video.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {video.views}
          </li>
          <li>
            <strong>Downloads: </strong> {video.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {video.likes}
          </li>
        </ul>
      </div>
      <div className='flex flex-wrap gap-y-4 px-6 py-4'>
        {tags.map((tag, idx) => (
          <span key={idx} className="inline-block bg-gray-200 rounded-full px3 py1 text-xs font-semibold text-gray-700 mr-2">#{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default VideoCard;