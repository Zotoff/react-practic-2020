import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../store/actions/user_actions';


export default function Logout(props) {
    const logout = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logoutUser());
    },[dispatch]);

    useEffect(()=>{
        if(logout.auth === null){
            setTimeout(()=>{
                props.history.push('/')
            }, 2000)
        }
    },[logout.props])

    return (
        <div className="logout_conteiner">
            <h1>Goodbye</h1>
        </div>
    )
}
