import React from 'react';
import YouTube from 'react-youtube';

const Ads = () => {
    const opts = {
        height: '340',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const optssmall = {
        height: '180',
        width: '340',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div className='mb-5 bg-slate-700 p-8'>
            <div>
                <h2 className='text-center text-orange-600 text-3xl mb-6'>Here is  my latest covered song -</h2>
            </div>

            <div style={{width: '640px', height: '340px'}} className='mx-auto hidden md:block'>
            <YouTube className='' videoId="QKzBkYpne9w" opts={opts}/>
            </div>

            <div style={{width: '340px', height: '180px'}} className='mx-auto md:hidden'>
            <YouTube className='' videoId="QKzBkYpne9w" opts={optssmall}/>
            </div>
        </div>
    );
};

export default Ads;