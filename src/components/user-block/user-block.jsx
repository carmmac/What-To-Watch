import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';

const UserBlock = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return <>
    {
      authorizationStatus === AuthorizationStatus.AUTH &&
      <div className="user-block">
        <span className="user-block__link" style={{cursor: `pointer`, marginBottom: `10px`}} onClick={onLogout} >Sign out</span>
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </div>
      ||
      <div className="user-block">
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      </div>
    }
  </>;
};

export default UserBlock;
