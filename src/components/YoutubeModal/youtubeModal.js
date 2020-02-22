import React, { Component } from "react"
// import Popup from "reactjs-popup"

// import Youtube from "../Youtube/youtube"
import YoutubePreviewBtn from "../YoutubePreviewBtn/youtubePreviewBtn"

import ModalVideo from "react-modal-video"
import "./youtubeModal.css"

class YoutubeModal extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  extractIdFromUrl = url => {
    return url.split("=")[1]
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    let { videoId } = this.props
    let correctId

    videoId.startsWith("https://")
      ? (correctId = this.extractIdFromUrl(videoId))
      : (correctId = videoId)

    return (
      <div className="preview-image">
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={correctId}
          onClose={() => this.setState({ isOpen: false })}
          properties={{
            autoplay: 1,
          }}
        />
        <div className="openModal" onClick={this.openModal}>
          <YoutubePreviewBtn videoId={this.props.videoId} />
        </div>
      </div>
    )
  }
}

export default YoutubeModal

// const minStyles = {
//   padding: "0",
//   width: "100%",
//   border: "0",
//   background: "#000",
// }

// const maxStyles = {
//   padding: "0",
//   border: "0",
//   background: "#000",
// }

// const style = function() {
//   if (window.innerWidth < 1000) {
//     return minStyles
//   } else {
//     return maxStyles
//   }
// }

// const YoutubeModal = ({ videoId }) => {
//   return (
//     <Popup
//       trigger={
//         <div
//           style={{ width: "100%", display: "flex", justifyContent: "center" }}
//         >
//           <YoutubePreviewBtn videoId={videoId} />
//         </div>
//       }
//       modal
//       closeOnDocumentClick
//       contentStyle={style()}
//     >
//       <Youtube
//         // pass director's video ID
//         videoId={videoId}
//         className="youtube"
//         style={{ height: "100%" }}
//       />
//     </Popup>
//   )
// }
