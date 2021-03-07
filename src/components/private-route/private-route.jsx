import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router';
import {AppRoute, AuthorizationStatus} from '../../const';

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routerProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routerProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
