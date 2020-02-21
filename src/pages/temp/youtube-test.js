import React from "react"
import { Link } from "gatsby"

import YoutubeModal from "../../components/YoutubeModal/youtubeModal"

const shortUrl_1 = "8Lzi80kxo4E"
const shortUrl_2 = "Z_gRBoITbnU"
const fullUrl = "https://www.youtube.com/watch?v=kcrOAF473LM"

const YoutubeTestPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "1rem",
      }}
    >
      <h3>Youtube component testing page</h3>
      <div
        style={{
          marginTop: "3rem",
          marginBottom: "1rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <YoutubeModal videoId={shortUrl_1} />
        <YoutubeModal videoId={fullUrl} />
        <YoutubeModal videoId={shortUrl_2} />
      </div>
      <Link to="/">Back to homepage</Link>
    </div>
  )
}
export default YoutubeTestPage
