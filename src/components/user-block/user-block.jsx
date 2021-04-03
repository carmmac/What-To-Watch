import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus, ComponentStyle} from '../../const';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {UserBlockStyle} from './user-block-style';

const UserBlock = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return <>
    {
      authorizationStatus === AuthorizationStatus.AUTH &&
      <div className="user-block">
        <span className="user-block__link" style={UserBlockStyle.LINK} onClick={onLogout} >Sign out</span>
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src="img/avatar.jpg" alt="User avatar" style={ComponentStyle.USER_AVATAR} />
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
