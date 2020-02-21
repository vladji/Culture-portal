import React from "react"
import { FaYoutube } from "react-icons/fa"

import "./youtubePreviewBtn.css"

const YoutubePreviewBtn = ({ videoId }) => {
  if (videoId.startsWith("https://")) {
    videoId = videoId.split("=")[1]
  }

  const previewImageUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`

  return (
    <>
      <div
        alt="preview"
        className="preview-image"
        style={{
          backgroundImage: `url(${previewImageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FaYoutube className="youtube-icon" />
      </div>
    </>
  )
}

export default YoutubePreviewBtn
