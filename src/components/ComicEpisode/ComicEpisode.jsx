import React, { PropTypes } from 'react'

import FlatButton from '../FlatButton'

export default class ComicEpisode extends React.Component {

  static propTypes = {
    episode: PropTypes.object.isRequired,
    onEpisodeTap: PropTypes.func
  }

  onEpisodeTap = () => {
    this.props.onEpisodeTap && this.props.onEpisodeTap(this.props.episode)
  }

  render() {

    return (
      <FlatButton
        title={ this.props.episode.title }
        onTap={ this.onEpisodeTap }
      />
    )
  }

}