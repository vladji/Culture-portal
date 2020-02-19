import React from "react"
import Popup from "reactjs-popup"

import Youtube from "../Youtube/youtube"

const YoutubeModal = ({ videoId }) => {
  return (
    <Popup trigger={<button>Video</button>} modal closeOnDocumentClick>
      <Youtube videoId={videoId} />
    </Popup>
  )
}

export default YoutubeModal
