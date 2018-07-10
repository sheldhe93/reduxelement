import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Redirect } from 'react-router-dom';
import { DetailResidence } from 'components/detail/DetailResidence';
import { DetailSex } from 'components/detail/DetailSex';
import { DetailState } from 'components/detail/DetailState';
import { DetailAge } from 'components/detail/DetailAge';
import { DetailTime } from 'components/detail/DetailTime';
import { DetailValue } from 'components/detail/DetailValue';

class Detail extends Component {
  render() {
    const { agree,part4 } = this.props;
    const agreeCheckTotal = agree === "Y" ? true : false;
    const part4CheckTotal = part4.success === "" ? true : false;
    return (
      <div>
        {
          !agreeCheckTotal && <Redirect to="/about" />
        }
        {
          !part4CheckTotal && <Redirect to="/result" />
        }
        <DetailResidence onRes={this.props.handleResid} part4={this.props.part4} />
        <DetailTime onRes={this.props.handleTime} part4={this.props.part4} />
        <DetailAge onRes={this.props.handleAge} part4={this.props.part4} />
        <DetailSex onRes={this.props.handleSex} part4={this.props.part4} />
        <DetailState onRes={this.props.handleState} part4={this.props.part4} />
        <DetailValue part1={this.props.part1} part2={this.props.part2} part4={this.props.part4} onRes={this.props.handleSuccess} history={this.props.history} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    agree: state.about.agree,
    part1: state.about.part1,
    part2: state.about.part2,
    part4: state.about.part4,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleResid: (residence) => { dispatch(actions.ag3_resid(residence)) },
    handleTime: (time) => { dispatch(actions.ag3_time(time)) },
    handleAge: (age) => { dispatch(actions.ag3_age(age)) },
    handleSex: (sex) => { dispatch(actions.ag3_sex(sex)) },
    handleState: (dState) => { dispatch(actions.ag3_state(dState)) },
    handleSuccess: (success) => { dispatch(actions.ag3_success(success)) },
    handleNonSuccess: () => { dispatch(actions.ag3_nonsuccess()) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);