import { useState } from 'react';
import './App.css';
import backgroundImage from '/src/assets/background.jpeg'; 
import hoverGif from '/src/assets/hovergif.gif';
import slingshot from '/src/assets/slingshot.gif';
import {Spotify} from 'react-spotify-embed';

function App() {
  const [buttonStyle, setButtonStyle] = useState({});
  const [showHoverGif, setShowHoverGif] = useState(false);

  const teleportButton = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    

    setButtonStyle({
      position: 'fixed',
      top: randomY + 'px',
      left: randomX + 'px',
    });
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col justify-center h-full">
        
        <div className="pt-20 flex justify-center">
          <h1 className='text-3xl text-white font-bold'>Will you be my valentine?</h1>
        </div>
       
        <div className='flex justify-center pb-10'>
          <img src = {slingshot} alt="slingshot" />
        </div>
       
        <div className='flex justify-center gap-2'>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setShowHoverGif(true)}>
            Yes
          </button>
          <button
            className='bg-red-500 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              teleportButton();
            }}
            style={buttonStyle}
          >
            No
          </button>
          
        </div>


        <div className='pt-20 flex justify-center'>
          <Spotify className='opacity-75 h-30 w-64'  wide link="https://open.spotify.com/track/2IMPPA9UZpqTnnVIy9lDHU?si=e4d54415f9104741" />
        </div>

        {showHoverGif && ( // Conditionally render the hovering GIF
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
            <img src={hoverGif} /> {/* Render the hovering GIF */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
