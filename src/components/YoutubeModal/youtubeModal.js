import React from "react"
import Popup from "reactjs-popup"

import Youtube from "../Youtube/youtube"
import YoutubePreviewBtn from "../YoutubePreviewBtn/youtubePreviewBtn"

const minStyles = {
  padding: "0",
  width: "100%",
  border: "0",
  background: "#000",
}

const maxStyles = {
  padding: "0",
  border: "0",
  background: "#000",
}

const style = function() {
  if (window.innerWidth < 1000) {
    return minStyles
  } else {
    return maxStyles
  }
}

const YoutubeModal = ({ videoId }) => {
  return (
    <Popup
      trigger={
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <YoutubePreviewBtn videoId={videoId} />
        </div>
      }
      modal
      closeOnDocumentClick
      contentStyle={style()}
    >
      <Youtube
        // pass director's video ID
        videoId={videoId}
        className="youtube"
        style={{ height: "100%" }}
      />
    </Popup>
  )
}

export default YoutubeModal
