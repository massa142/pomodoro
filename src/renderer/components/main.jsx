'use strict';

import React from 'react';
import notifier from 'node-notifier';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      isBreak: false,
      time: this.props.duration
    }
    this.handleStartClicked = ::this.handleStartClicked;
    this.handleResetClicked = ::this.handleResetClicked;
    this.tick = ::this.tick;
  }

  handleStartClicked() {
    if (!this.state.isStart) {
      this.interval = setInterval(this.tick, 1000);
      this.setState({isStart: true});
    } else {
      clearInterval(this.interval);
      this.setState({isStart: false});
    }
  }

  handleResetClicked() {
    this.reset();
  }

  tick() {
    this.setState({time: this.state.time - 1});
    if (this.state.time === 0) {
      this.finishEvent();
    }
  }

  finishEvent() {
    if (this.state.isBreak) {
      this.reset();
      this.notify('Break is over!');
    } else {
      this.break();
      this.notify('Good work!');
    }
  }

  break() {
    this.setState({
      isStart: true,
      isBreak: true,
      time: this.props.breakTime
    });
  }

  reset() {
    clearInterval(this.interval);
    this.setState({
      isStart: false,
      isBreak: false,
      time: this.props.duration
    });
  }

  notify(message) {
    notifier.notify({
      'title': 'Pomodoro Timer',
      'message': message
    });
  }

  converter = {
    s2m(s) {
      let minutes = Math.floor(s / 60);
      let seconds = s % 60;
      return ('0' + minutes.toString()).slice(-2) + ':' + ('0' + seconds.toString()).slice(-2);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron main">
          <h2>Pomodoro Timer</h2>
          <img src={this.state.isBreak ? "../assets/images/electron2.svg" : "../assets/images/electron.svg"} alt="" width="128px"></img>
          <h2>{this.converter.s2m(this.state.time)}</h2>
          <div>
            <button type="button" className="btn btn-primary" onClick={this.handleStartClicked}>
              {this.state.isStart ? "Pause" : "Start"}
            </button>
            <button type="button" className="btn btn-warning" onClick={this.handleResetClicked}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  duration: 1500,
  breakTime: 300
};