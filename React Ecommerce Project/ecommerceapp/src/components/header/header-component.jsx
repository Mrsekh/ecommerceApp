import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utility';
import './header.styles.scss';

const Header = ({currentUser}) => (  
    <div className="header">
        <Link  className="logo-container"  to='/'>
            <Logo  className="logo"/>
        </Link>
        <div className="options">
          <Link className='option' to='/shop'>SHOP</Link>
          <Link className='option' to='/contact'>CONTACT</Link>
            {currentUser ?
                <div style= {{cursor:"pointer"}} className="option"
                onClick={() => auth.signOut()}>
                SIGNOUT
                </div>
            : <Link className="option" to='/signin'>SIGNIN</Link>}
        </div>
    </div>
)
/*When we need to access the reducers state we can use the same functionality 
  by passing the currentUser to the component we want from reducers
*/
const mapStateToProps = (state) => ({
    currentUser:state.user.currentUser
});
export default connect(mapStateToProps)(Header);