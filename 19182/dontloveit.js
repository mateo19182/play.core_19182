/**
@author m_19182
@title  dont love it
@desc   jack harlow bootleg music video
*/

const density = 'they dont love it'

export function main(coord, context, cursor, buffer) {
	const {cols,rows, frame } = context
	const {x, y} = coord
	const a = Math.floor(context.frame * 2) 

	return density[(x-(a%cols))]
}



/*It's like
I've been smooth for so long, I'm tryna get rough
Fuck buffing my nails, dawg, I'm tryna get buff
Fuck shaping my beard up, I'm liking the scruff
And fuck the hills 'cause I'm living my life in the cut
Can't imagine that I'm gon' meet my wife in the club
We gon' see though, I feel like she more of a CEO
Or maybe she doing volunteer work in Rio
It's not like I need her but I would love to meet her
Another day, another dollar, another phone with another feature
I don't play goalie but I'm my brother's keeper
Surrounded by family, I'm not with other people
They say I got my pop's demeanor and mother's features
The garden still private as ever, the gang thriving together
Your boy's striving to be the most dominant ever
The hardest white boy since the one who rapped about vomit and sweaters
And hold the comments 'cause I promise you
I'm honestly better than whoever came to ya head right then
They ain't cut from the same thread like him
They don't study, doing work to get ahead like him
They don't toss and turn in the fucking bed like him
'Cause they don't love it, they don't love it
They don't love it, they don't love it
They don't love it, they don't love it
They don't love it, they don't love it
I been laid back so long, I'm tryna get turnt
Fuck searching my name, dawg, that's how you get hurt
Fuck being likable, I'm tryna be unbreakable
I just realized that this whole game is takeable if I want it
And I do, yes, I want
I don't care how you feel about it, I do what I wanna
I used to look up to the people that I'm moving in front of
It's not that crazy anymore, my city used to a come up
Bryson, Jack, Gee, James is up next
The rest is up to me, these lames is upset
My peers get upstaged, the fans are obsessed
My city is upcoming, its people are oppressed
And I'm gon' change things
I'm up at Carmichael's tryna get on the same page
I heard about the rapper that you claim was a mainstay
They had a nice run but they never gon' maintain because
They don't love it, they don't love it
They don't love it, they don't love it
They don't love it, they don't love it
They don't love it, they don't love it
*/