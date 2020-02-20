import React from "react"
import { Link } from "gatsby"

import YoutubeModal from "../../components/YoutubeModal/youtubeModal"

const shortUrl = "8Lzi80kxo4E"
const fullUrl = "https://www.youtube.com/watch?v=kcrOAF473LM"

const YoutubeTestPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>Youtube component testing page</h3>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          width: "10%",
          height: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <YoutubeModal videoId={shortUrl} />
        <YoutubeModal videoId={fullUrl} />
      </div>
      <Link to="/">Back to homepage</Link>
    </div>
  )
}
export default YoutubeTestPage
