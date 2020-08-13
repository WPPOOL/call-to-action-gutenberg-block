const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button } = wp.components;
import { ClickIcon } from './blockicon';
import './cta-component';

import attributes from './attributes';
import Edit from './Edit';

import './style.scss';
import './editor.scss';

registerBlockType('cta-gutenberg/cta', {
  title: __('Call to action', 'cta-gutenberg'),
  icon: ClickIcon,
  category: 'common',
  keywords: [
		__( 'call to action', 'cta-gutenberg' ),
		__( 'wppool', 'cta-gutenberg' )
	],
  attributes,
  supports: {
    align: true
  },
  edit: Edit,
  save: function( props ) {

		const {
			uniqueId,
			layout,
			bgColor,
			bgImage,
			title,
			description,
			btn_label,
			btn_url,
			btn_target
		} = props.attributes;

		return (
				<div 
					className={`call_to_action_${layout} call_to_action_${uniqueId}`}
					style={{
						backgroundImage:`url(${(bgImage.url != undefined) ? bgImage.url : cta_gutenberg_locate.plugin + 'assets/images/cta_1.png'})`
					}}
				>
					<div className="cta_content">
						<h2>{title}</h2>
						<p>{description}</p>
						<a className="ctagb-btn" target={btn_target ? '_blank': ''} rel="noopener noreferrer" href={btn_url}>{btn_label}</a>
					</div>
					{layout == 1 &&
						<style>
						{`
						.call_to_action_${uniqueId}:after{
							background-color: ${bgColor}
						}
						`}
						</style>
					}
				</div>
		);
	}
});
