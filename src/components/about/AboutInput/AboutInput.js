import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import styles from './AboutInput.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class AboutInput extends Component {
  handleGo = (selectedOption2) => {
    this.props.changeGO(selectedOption2);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.part3.floor !== this.props.part3.floor) {
      nextProps.part3.floor === "" ? this.props.onNonSuccess() : this.props.onSuccess();
    }
    return true;
  }
  render() {
    const { selectedOption2, subOn } = this.props;
    return (
      <div>
        <input
          name="form-field-name2"
          type="text"
          placeholder="층선택"
          value={selectedOption2.value}
          onChange={this.handleGo}
          disabled={subOn}
          maxLength="10"
          className={cx('inputcss')}
        />
      </div>
    );
  }
}

export default AboutInput;