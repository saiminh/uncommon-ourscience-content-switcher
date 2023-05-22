import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  let activeItem, setActiveItem, toggled, setToggled;
  [activeItem, setActiveItem] = useState(0);
  [toggled, setToggled] = useState(true);

	return (
		<div { ...useBlockProps() }>
			<div className={`uncommon-ourscience-nav uncommon-ourscience-nav-edit ${toggled ? 'toggled' : 'hidden'}`}>
      { attributes.navItems.map((item, index) => {
        return (
          <>
            <TextControl
              key={index}
              label={__('Nav Item Button Text', 'uncommon-ourscience')}
              value={item.linktext}
              onChange={(value) => {
                const newItems = [...attributes.navItems];
                newItems[index].linktext = value;
                setAttributes({ navItems: newItems });
              }}
            />
            <a 
              className='uncommon-ourscience-nav-item' 
              key={index} 
              rel='noopener noreferrer'
              onClick={() => { 
                activeItem === index + 1 ? 
                setActiveItem(0) :
                setActiveItem(index + 1) 
              }}
            > 
              {index + 1 == activeItem ? 'Close' : 'Edit'}: <small>{item.linktext}</small>
            </a>
          </>
        );
      }) }
        <div className='nav-toggler' onClick={()=>setToggled(!toggled)}>{toggled ? 'Minimise' : 'Show Nav'}</div>
      </div>
      <div className={`uncommon-ourscience-content-display showing-${activeItem}`} data-showing={activeItem}>
        <InnerBlocks
          allowedBlocks={['create-block/uncommon-ourscience-content']}
          template={[
            ['create-block/uncommon-ourscience-content'],
            ['create-block/uncommon-ourscience-content'],
            ['create-block/uncommon-ourscience-content'],
            ['create-block/uncommon-ourscience-content']
          ]}
        />
      </div>
		</div>
	);
}
