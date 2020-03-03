import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utility';
import './header.styles.scss';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart/cart.Icon';
import CartDropDown from '../card-dropdown/card.dropdown';

const Header = ({currentUser,hidden}) => (  
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
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropDown/>  
        }
        
    </div>
)
/*When we need to access the reducers state we can use the same functionality 
  by passing the currentUser to the component we want from reducers
*/
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden:selectCartHidden
})
    
export default connect(mapStateToProps)(Header);