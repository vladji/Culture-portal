import React, { Component } from "react"

import ModalVideo from "react-modal-video"
import YoutubePreviewBtn from "../YoutubePreviewBtn/youtubePreviewBtn"

import "./youtubeModal.css"

class YoutubeComponent extends Component {
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

export default YoutubeComponent
