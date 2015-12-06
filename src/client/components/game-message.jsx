GameMessage = React.createClass({
  messages: {
    0: ' ',
    10: 'Wow!',
    20: 'Great!',
    50: 'Keep it up!',
    65: 'That\'s what I call button pushing!',
    80: 'Alright, this is getting old',
    100: 'You should probably go do something',
    150: 'Stahp',
    160: 'Seriously, stahp',
    200: 'Roses are red',
    220: 'Violets are blue',
    240: 'Even the creator stopped clicking',
    260: 'How about you?',
    280: 'You know what? I\'m just going to start ignoring you',
    300: ' ',
    320: '...',
    340: ' ',
    350: 'Okay, obviously you are pretty resiliant',
    360: 'Or just really that bored'
  },
  getInitialState() {
    return {
      message: ' '
    }
  },
  getInitialProps() {
    return {
      clickCount: 0
    };
  },
  componentWillReceiveProps(newProps) {
    if (newProps.clickCount != this.props.clickCount) {
      this.triggerChange(newProps.clickCount);
    }
  },
  triggerChange(score) {
    if (this.messages[score]) {
      this.setState({
        message: this.messages[score]
      });
    }
  },
  render() {
    return (
      <div className="game-message">
        <p>{this.state.message}</p>
      </div>
    );
  }
});
