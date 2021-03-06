import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

class DismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    const newState = this.state;
    newState.isDismissed = true;
    this.setState(newState);
  }

  render() {
    const alertStartTagStr = '<Alert type="success" onDismiss={this.handleDismiss} >';
    const alertEndTagStr = '</Alert>';
    const alertText = 'This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.';
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = <Alert type="success" onDismiss={this.handleDismiss}>{alertText}</Alert>;
    }
    return (
      <div>
        <div dir="ltr">
          <h3>Alert of type success that is dismissible</h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
            &nbsp;&nbsp;
            {alertText}
            <br />
            {alertEndTagStr}
          </code>
        </div>
        <br />
        {alertElem}
      </div>
    );
  }
}

export default DismissibleExample;
