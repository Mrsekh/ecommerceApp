import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utility';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart/cart.Icon';
import CartDropDown from '../card-dropdown/card.dropdown';
// Styled components
import {HeaderContainer,OptionLink,OptionsContainer,LogoContainer} from './header.styled.component'


const Header = ({currentUser,hidden}) => (  
    <HeaderContainer>
        <LogoContainer  to='/'>
             <Logo  className="logo"/>
        </LogoContainer>
       <OptionsContainer>
          <OptionLink to='/shop'>SHOP</OptionLink>
          <OptionLink to='/contact'>CONTACT</OptionLink>
            {currentUser ?
                <div style= {{cursor:"pointer"}} className="option"
                onClick={() => auth.signOut()}>
                SIGNOUT
                </div>
            : <OptionLink  to='/signin'>SIGNIN</OptionLink>}
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropDown/>  
        }
        
    </HeaderContainer>
)
/*When we need to access the reducers state we can use the same functionality 
  by passing the currentUser to the component we want from reducers
*/
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden:selectCartHidden
})
    
export default connect(mapStateToProps)(Header);