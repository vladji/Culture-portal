import React, { Component } from "react"
import PropTypes from "prop-types"

import YouTube from "react-youtube"

class Youtube extends Component {
  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
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

    const { videoId } = this.props

    return <YouTube videoId={videoId} opts={opts} onReady={this.onReady} />
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
