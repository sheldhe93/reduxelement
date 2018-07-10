import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from './AboutMain.scss';
import classNames from 'classnames/bind';
import { AboutPart1 } from './AboutPart1';
import { AboutPart3 } from './AboutPart3';
const cx = classNames.bind(styles);

class AboutMain extends Component {
  render() {
    return (
      <div className={cx('about-main')}>
        <AboutPart1
          onOpen2_1={this.props.handleOpen2_1}
          onClose2_1={this.props.handleClose2_1}
          onChangeMeno={this.props.handleChangeMemo}
          onChangeStar={this.props.handleChangeStar}
          onSuccess={this.props.handleSuccess}
          onNonSuccess={this.props.handleNonSuccess}
          part1={this.props.part1}
        />
        <AboutPart1
          onOpen2_1={this.props.handleOpen2_2}
          onClose2_1={this.props.handleClose2_2}
          onChangeMeno={this.props.handleChangeMemo2}
          onChangeStar={this.props.handleChangeStar2}
          onSuccess={this.props.handleSuccess2}
          onNonSuccess={this.props.handleNonSuccess2}
          part1={this.props.part2}
        />
        <AboutPart3
          part3={this.props.part3}
          onOpen2_3={this.props.handleOpen2_3}
          onClose2_3={this.props.handleClose2_3}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    part1: state.about.part1,
    part2: state.about.part2,
    part3: state.about.part3,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleOpen2_1: () => { dispatch(actions.ag2_1open()) },
    handleClose2_1: () => { dispatch(actions.ag2_1close()) },
    handleOpen2_2: () => { dispatch(actions.ag2_2open()) },
    handleClose2_2: () => { dispatch(actions.ag2_2close()) },
    handleOpen2_3: () => { dispatch(actions.ag2_3open()) },
    handleClose2_3: () => { dispatch(actions.ag2_3close()) },
    handleChangeMemo: (memo) => { dispatch(actions.ag2_1memochange(memo)) },
    handleChangeStar: (star) => { dispatch(actions.ag2_1starchange(star)) },
    handleSuccess: (success) => { dispatch(actions.ag2_1success(success)) },
    handleNonSuccess: () => {
      dispatch(actions.ag2_1nonsuccess())
      dispatch(actions.agree2n())
    },
    handleChangeMemo2: (memo) => { dispatch(actions.ag2_2memochange(memo)) },
    handleChangeStar2: (star) => { dispatch(actions.ag2_2starchange(star)) },
    handleSuccess2: () => { dispatch(actions.ag2_2success()) },
    handleNonSuccess2: () => {
      dispatch(actions.ag2_2nonsuccess())
      dispatch(actions.agree2n())
    },

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutMain);