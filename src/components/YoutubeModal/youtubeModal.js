import React from "react"
import Popup from "reactjs-popup"

import Youtube from "../Youtube/youtube"

const YoutubeModal = ({ videoId }) => {
  return (
    <Popup
      trigger={<button className="btn btn-primary btn-sm">Video</button>}
      modal
      closeOnDocumentClick
    >
      <Youtube videoId={videoId} />
      {/* pass director's video ID */}
    </Popup>
  )
}

export default YoutubeModal
