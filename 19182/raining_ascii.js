/**
@author m_19182
@title  falling letters
@desc   its raining ASCII!
*/

// falta que vuelva
export const settings = {
	backgroundColor : 'black',
	color           : 'white',
	fontSize        : '3em',
	fontWeight      : 'lighter' // or 100
}


export function main(coord, context, cursor, buffer) {
	const a = Math.floor(context.frame * 1) 
    const {x, y} = coord
    const i = y + Math.floor(x*10)
	return '19182'[(i-a)]
}
