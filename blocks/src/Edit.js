const { InspectorControls, RichText, ColorPalette } = wp.editor;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody, TextControl, ToggleControl } = wp.components;
const { CtaMedia, CtaLayoutSelector } = wp.ctaComponents;
import styleicons from './styleicon';

class Edit extends Component{
	constructor(props) {
		super( props );
		this.toggleTarget     = this.toggleTarget.bind( this )
	}

	componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props;
        const _client = clientId.substr(0, 6);
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }
	}
	
	toggleTarget() {
		const {setAttributes, attributes: { btn_target } } = this.props;
		setAttributes( { btn_target: ! btn_target } );
	}

	render(){
		const {
			attributes: {
				uniqueId,
				layout,
				bgColor,
				bgImage,
				title,
				description,
				btn_label,
				btn_url,
				btn_target
			},
			setAttributes
		} = this.props;

		return(
			<Fragment>
				<InspectorControls key="inspector">
					<PanelBody title={__('Layout')} initialOpen={true}>
						<CtaLayoutSelector value={layout} onChange={val => setAttributes({ layout: val })}
							options={[
								{ value: 1, styleIcon: styleicons.cta_layout_1 },
								{ value: 2, styleIcon: styleicons.cta_layout_2 },
								{ value: 3, styleIcon: styleicons.cta_layout_3 },
								{ value: 4, styleIcon: styleicons.cta_layout_4 }
							]}
						/>
					</PanelBody>
					<PanelBody title={ __( "Button" ) } initialOpen={ false }>
						<TextControl
							label= { __( "Link" ) }
							value= { btn_url }
							onChange={ value => setAttributes( { btn_url: value } ) }
						/>
						<ToggleControl
							label={ __( "Open in new Window" ) }
							checked={ btn_target }
							onChange={ this.toggleTarget }
						/>
					</PanelBody>
					<PanelBody title={ __( "Wrapper" ) } initialOpen={ false }>
						<ColorPalette
							label={ __('Background Color') }
							className="cta-field"
							value={ bgColor }
							onChange={ ( colorValue ) => setAttributes( { bgColor: colorValue } ) }
							allowReset
						/>
						<CtaMedia 
							label={__('Image')} 
							value={bgImage} 
							onChange={val => setAttributes({ bgImage: val })} 
						/>
					</PanelBody>
				</InspectorControls>
				<div 
					className={`call_to_action_${layout} call_to_action_${uniqueId}`}
					style={{
						backgroundImage:`url(${(bgImage.url != undefined) ? bgImage.url : cta_gutenberg_locate.plugin + 'assets/images/cta_1.png'})`
					}}
				>
					<div className="cta_content">
						<RichText
							tagName="h2"
							value={title}
							placeholder="Call to action title"
							onChange={(value) => setAttributes({title: value})}
						/>
						<RichText
							tagName="p"
							value={description}
							placeholder="Call to action description"
							onChange={(value) => setAttributes({description: value})}
						/>
						<RichText
							tagName="a"
							className="ctagb-btn"
							value={btn_label}
							placeholder="Button Label"
							onChange={(value) => setAttributes({btn_label: value})}
						/>
					</div>
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
			</Fragment>
		);
	}
}

export default Edit;