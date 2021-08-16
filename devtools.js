let animationFrameCount = 0;
let idleCallbackCount = 0;

chrome.devtools.panels.create('idle test', '', 'devtools.html');

const animationFrameCountElement = document.getElementById(
	'animation-frame-count'
);
const idleCallbackCountElement = document.getElementById('idle-callback-count');

// const weirdHack = () => {
// 	requestAnimationFrame(weirdHack);
// };
// weirdHack();

setInterval(() => {
	// requestAnimationFrame(() => {
	// 	animationFrameCount++;
	// 	animationFrameCountElement.innerHTML = `Animation Frames: ${animationFrameCount} `;
	// });
	requestIdleCallback(
		() => {
			idleCallbackCount++;
			idleCallbackCountElement.innerHTML = `Idle Callbacks: ${idleCallbackCount}`;
		},
		// {timeout: 100}
	);
}, 1000);
