import React from "react"
import Popup from "reactjs-popup"

import Youtube from "../Youtube/youtube"
import YoutubePreviewBtn from "../YoutubePreviewBtn/youtubePreviewBtn"

const YoutubeModal = ({ videoId }) => {
  return (
    <Popup
      trigger={
        <div>
          <YoutubePreviewBtn videoId={videoId} />
        </div>
      }
      modal
      closeOnDocumentClick
    >
      <Youtube videoId={videoId} />
      {/* pass director's video ID */}
    </Popup>
  )
}

export default YoutubeModal
