import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() }>
      <div className='uncommon-ourscience-nav'>
			{ attributes.navItems.map((item, index) => {
        return (
            <a
              className='uncommon-ourscience-nav-item'
              key={index}
              rel="noopener noreferrer"
              href={item.linktext.replace(/\s+/g, '-').replace(/'/g, '').toLowerCase()}
            >
              {item.linktext}
            </a>
        );
      }) }
      </div>
      <InnerBlocks.Content />
		</div>
	);
}
