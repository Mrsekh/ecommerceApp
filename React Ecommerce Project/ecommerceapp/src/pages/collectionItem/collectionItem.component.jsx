import React from 'react';
import './collectionItem.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import {collectionItemSelector} from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
const CollectionItemPage = ({ collection }) =>{
    const {title,items} = collection;
    return (
	<div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className='items'>
            { 
              items.map (
                  item =>( <CollectionItem key={items.id} item={item}/>
            ))}
        </div>
	</div>
)};

const mapStateToProps = (state,ownProps) => ({
    collection:collectionItemSelector(ownProps.match.params.collectionItemId)(state)
})
export default connect(mapStateToProps)(CollectionItemPage);
