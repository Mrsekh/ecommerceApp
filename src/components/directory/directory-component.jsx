import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component'; 
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {directorySelector} from '../../redux/directory/directory-selector';
import {DirectoryContainer} from './directory.styles';
const Directory = ({sections}) =>  (
            <DirectoryContainer>
                {
                    sections.map(({id,...otherSectionProps}) => (   
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </DirectoryContainer>
        )

const mapStateToProps = () => createStructuredSelector({
   sections:directorySelector
})
  
   

export default connect(mapStateToProps)(Directory);