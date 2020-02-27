import React, { Component } from "react"
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
        <div className="openModal" onKeyDown={this.openModal} onClick={this.openModal} role='button' tabIndex={0}>
          <YoutubePreviewBtn videoId={this.props.videoId} />
        </div>
      </div>
    )
  }
}

export default YoutubeModal
