import React, { Component } from "react"
import PropTypes from "prop-types"

import YouTube from "react-youtube"

import "./youtube.css"

class Youtube extends Component {
  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.stopVideo()
  }

  extractIdFromUrl = url => {
    return url.split("=")[1]
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

    let { videoId } = this.props
    let correctId

    videoId.startsWith("https://")
      ? (correctId = this.extractIdFromUrl(videoId))
      : (correctId = videoId)

    return (
      <YouTube
        className="youtube-video"
        videoId={correctId}
        opts={opts}
        onReady={this.onReady}
      />
    )
  }
}

Youtube.propTypes = {
  videoId: PropTypes.string.isRequired,
  onReady: PropTypes.func,
  opts: PropTypes.object,
}

Youtube.defaultProps = {
  videoId: "",
  onReady: () => {},
  opts: {},
}

export default Youtube
