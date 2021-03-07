import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';

const UserBlock = ({authorizationStatus, onLogout}) => {
  return <>
    {
      authorizationStatus === AuthorizationStatus.AUTH &&
      <div className="user-block">
        <span className="user-block__link" onClick={onLogout} >Sign out</span>
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
      ||
      <div className="user-block">
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      </div>
    }
  </>;
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  }
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
