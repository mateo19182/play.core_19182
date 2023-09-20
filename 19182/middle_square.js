/**
@author m_19182
@title  middle square
@desc   Use of coord.x and coord.y
*/

const density = '19182'

export function main(coord, context, cursor, buffer) {
	// To generate an output return a single character
	// or an object with a “char” field, for example {char: 'x'}

	// Shortcuts for frame, cols and coord (x, y)
	const {cols, frame } = context
	const {x, y} = coord
	// -1 for even lines, 1 for odd lines
	// sign = y % 2 * 2 - 1
	const index = Math.floor(frame/15) % density.length
    if(x<20||y<10||x>170||y>40){
        return '19182'[y]
    }
    else{
        return density[index]
    }
}
