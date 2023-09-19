/**
[header]
@author 19182
@title  try print
@desc   10 PRINT CHR$(205.5+RND(1)); : GOTO 10
See also:
https://10print.org
*/


export function main() {
    //move timeout value and probability at beat?
    setTimeout(1000);
	return Math.random() < 0.001 ? '19182' : '╲'
}
