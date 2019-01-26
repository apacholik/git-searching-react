import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.timeoutFingerprint = null;
    this.inputRef = new React.createRef();
  }

  delayForWriteEnd() {
    clearInterval(this.timeoutFingerprint);
    this.timeoutFingerprint = setTimeout(() => {
      clearInterval(this.timeoutFingerprint);
      if (!this.props.onChange)
        throw new ReferenceError('Not add props onChange');
      this.props.onChange(this.inputRef.current.value);
    }, 1500);
  }

  render = () => (
    <div className="control has-icons-right">
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={() => this.delayForWriteEnd()}
        ref={this.inputRef}
      />
      <span className="icon is-small is-right">
        <i className="fas fa-search" />
      </span>
    </div>
  );
}
