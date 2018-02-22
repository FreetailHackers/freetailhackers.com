
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

$("#hackathons .main a").tilt({
	perspective: 200,
	maxTilt: 3,
	glare: true,
	maxGlare: .5
});

let leader_videos = $(".leader .headshot video")
leader_videos.on("mouseenter", (e)=>{
	e.target.play();
})

leader_videos.on("mouseleave", (e)=>{
	e.target.pause();
	e.target.currentTime=0;
})

// leader_videos.on("ended", (e)=>{
// 	e.target.currentTime=0;
// })

async function playleaders() {
	while (true) {
		let rand_leader = Math.floor(Math.random()*leader_videos.length)
		leader_videos.eq(rand_leader)[0].play();
		await sleep(8000)
	}
}

playleaders();