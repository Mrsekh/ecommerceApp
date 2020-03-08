import React from 'react';
import './collectionoverview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionItemSelectorForPreview } from '../../redux/shop/shop.selector';
import PreviewCollection from '../preview-collection/preview-collection.component';

const Collectionoverview = ({collections}) => (
    
	<div className="collection-overview">
    {collections.map(({ id, ...otherPreviewItems }) => <PreviewCollection key={id} {...otherPreviewItems} />)}
    </div>
);

const mapStateToProps = () =>
	createStructuredSelector({
		collections: collectionItemSelectorForPreview
	});

export default connect(mapStateToProps)(Collectionoverview);
