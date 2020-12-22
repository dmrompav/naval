const	HERO = document.querySelector("#hero"),
		ENEMY = document.querySelector("#enemy"),
		DIF = document.querySelector(".dif"),
		LVL = document.querySelectorAll(".dif__lvl"),
		BUTTON = document.querySelector(".restart__button"),
		RESTART = document.querySelector(".restart");

function Jump() {
	if (HERO.classList != "jump") {
		HERO.classList.add("jump");
		HERO.classList.remove("run");
		let a = setTimeout(function () {
			HERO.classList.remove("jump");
			HERO.classList.add("run");
			clearTimeout(a);
		}, 300)
	}
}
function Restart() {
	RESTART.style.top = "-50%";
	DIF.style.top = "50%";
}


document.addEventListener("keydown", function (event) {
	Jump();
})
LVL.forEach((lvl) => lvl.addEventListener("click",
	function () {
		HERO.classList.remove("dead");
		ENEMY.style.left = "550px";
		DIF.style.top = "-50%";
		let b = setTimeout(function () {
			ENEMY.classList.add("move");
			clearTimeout(b);
		}, 500)
		let isAlive = setInterval(function () {
			// get Y position of our hero
			let heroTop = parseInt(window.getComputedStyle(HERO).getPropertyValue("top"));
			// get X position of enemy
			let enemyLeft = parseInt(window.getComputedStyle(ENEMY).getPropertyValue("left"))
			//detect Death
			if (enemyLeft < 100 && enemyLeft > 50 && heroTop >= 105) {
				// Death
				ENEMY.classList.remove("move");
				RESTART.style.top = "50%";
				clearInterval(isAlive);
				ENEMY.style.left = enemyLeft + "px"
				HERO.classList.add("dead");
			}
		}, 10)
	})
)
BUTTON.addEventListener("click", function () {
	Restart();
})