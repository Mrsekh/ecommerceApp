import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component'; 
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {directorySelector} from '../../redux/directory/directory-selector';
import './directory.styles.scss';
const Directory = ({sections}) =>  (
            <div className="directory-menu">
                {
                    sections.map(({id,...otherSectionProps}) => (   
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )

const mapStateToProps = () => createStructuredSelector({
   sections:directorySelector
})
  
   

export default connect(mapStateToProps)(Directory);