import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


const PreviewCollection = ({ title, items }) => {
  return (
    <div className='preview-collection'>
      <h1 className='title'>{ title.toUpperCase() }</h1>
      <div className='preview'>
        {
          items
            .filter((item, i) => i < 4)
            .map(({id, ...OtherItemProps}) => (
            <CollectionItem key={id} {...OtherItemProps}/>
          ))
        }
      </div>
    </div>
  );
}

export default PreviewCollection;