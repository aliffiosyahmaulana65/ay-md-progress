module.exports = function(value)
{
	let progressWidth = 320


	let lenght = 0
	let color  = null
	let colorCollection = ["#2ecc71","#2980b9","#f39c12","#1abc9c"]
	let colorBg = "#34495e"
	let colorText = "#ecf0f1"

	if(value >= 85)
		color = colorCollection[0]
	else if(value <= 84 && value >= 50)
		color = colorCollection[1]
	else if(value <= 51 && value >= 25)
		color = colorCollection[2]
	else if(value <= 24)
		color = colorCollection[3]

	if(value >= 100){
		length = progressWidth
		value  = 100
	}
	else
		length = ( value / 100 * progressWidth ) 
	
	output = `
	
	<svg width="320" height="30" xmlns="http://www.w3.org/2000/svg">
	 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
	  <g>
		  <title>background</title>
		  <rect fill="#fff" id="canvas_background" height="32" width="322" y="-1" x="-1"/>
		  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
		   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
		  </g>
		 </g>
		 <g>
		  <title>Layer 1</title>
		  <rect id="svg_1" height="35" width="320" y="-0.157893" x="-0.201754" stroke-width="0" stroke="#000" fill="${colorBg}"/>
		  <rect id="svg_2" height="35" width="${length}" y="-0.157893" x="-0.201752" stroke-width="0" stroke="#000" fill="${color}"/>
		  <text transform="matrix(1, 0, 0, 0.899868, 0, 0.321485)" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_3" y="25.342107" x="131.298246" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#ecf0f1">${value} %</text>
		 </g>
		</svg>
	
	`

	return output

}
