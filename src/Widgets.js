import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
     <div className="widgets__input">
      <SearchIcon className="widgets__search--icon" />
      <input placeholder='Search Twitter' type="text" />
     </div>

     <div className="widgets__widget--container">
      <h2>what's happening</h2>

      <TwitterTweetEmbed tweetId={"1480916210762067979"} />

      <TwitterTimelineEmbed
      sourceType='profile'
      screenName='zendaya'
      options={{ height: 400 }}
      />

      <TwitterShareButton
      url={'https://facebook.com/zendaya'}
      options={{ text: "good actor", via: "zendaya" }}
      />
     </div>
    </div>
  )
}

export default Widgets