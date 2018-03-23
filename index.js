
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
// leader_videos.on("mouseenter", (e)=>{
// 	e.target.play();
// })

// leader_videos.on("mouseleave", (e)=>{
// 	e.target.pause();
// 	e.target.currentTime=0;
// })



var leader_played = []
var num_not_played = leader_videos.length
for (let i = 0; i < leader_videos.length; i++)
	leader_played.push(false);


function get_random_leader() {
	let chance = num_not_played;
	for (let entry of leader_played.entries()) {
		idx = entry[0]
		leader = entry[1]
		if (!leader) {
			if (Math.random() <= 1.0/chance) {
				num_not_played -= 1;
				leader_played[idx] = true;
				return idx
			}
			else {
				chance -= 1;
			}
		}
	}
	console.log("should never get to this point")
	return -1
}

async function playleaders() {
	if (num_not_played != 0) {
		rand_lead = get_random_leader()
		leader_videos.eq(rand_lead)[0].play();
	}
}

var in_view = false;
$(window).scroll(() => {
	if ($("#leadership-vids").visible() && !in_view) {
		in_view = true
		playleaders()
	}
	else if(!$("#leadership-vids").visible() && in_view) {
		in_view = false;
		num_not_played = leader_videos.length
		leader_played = leader_played.map(()=>false)
		leader_videos.each((idx, video) => {
			video.pause()
			video.currentTime = 0;
		})
	}
})
leader_videos.on("ended", (e)=>{
	playleaders()
})
