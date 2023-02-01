var info1 = document.getElementById("CppProject1Modal")
var info2 = document.getElementById("CppProject2Modal")

const modal_styles = `
.modal-container {
	background-color: #0008;
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  transition: 0.2s all;
}
.modal {
	min-height: 30vh;
	min-width: 300px;
	background-color: #36393f;
	padding: 15px;
	border-radius: 5px;
  transition: 0.1s all;
}
.modal * {
	color: #fff;
}
.modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
  margin-bottom: 15px;
}
.modal-header h4 {
	margin: 0;
}
.modal-header button {
	background-color: #0000;
	outline: none;
	border: none;
	padding: 5px;
	cursor: pointer;
	transition: all 0.1s;
}
.modal-header button:hover {
	filter: brightness(1.2);
}
.modal-header button:active {
	filter: brightness(0.9);
}
.modal-content * {
	font-size: initial;
}`;
var ms = document.createElement("style");
ms.innerText = modal_styles;
document.head.appendChild(ms);
function createModal(title, body) {
	if (!body) {
		console.error("Modal must have a body! (honestly that's a skill issues)");
		return;
	}
	if (!title) {
		console.warn('Modal title is not specified, "Modal" will be used as the title name instead. (fix ur errors bozo 😂😂)');
	}
	document.querySelector(".modal-container")?.remove();
	var modal = document.createElement("div");
	document.body.appendChild(modal);
	modal.outerHTML = `
  <div class="modal-container" style="opacity: 0">
  	<div class="modal" style="transform: scale(0.2)">
  		<div class="modal-header">
  			<h4 class="modal-title"></h4>
  			<button class="modal-close">
  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="#aaa">
  					<path
  						d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  					/>
  				</svg>
  			</button>
  		</div>
  		<div class="modal-content">
  			
  		</div>
  	</div>
  </div>
  `;
	document.querySelector(".modal-title").innerText = title || "Modal";
	document.querySelector(".modal-content").innerHTML = body;
	setTimeout(() => {
		document.querySelector(".modal-container").style.opacity = "";
		document.querySelector(".modal").style.transform = "";
	});
	document.querySelector(".modal-container").addEventListener("click", () => {
		if (document.querySelector(".modal:hover")) return;
		document.querySelector(".modal-container").style.opacity = 0;
		document.querySelector(".modal").style.transform = "scale(0.2)";
		setTimeout(() => {
			document.querySelector(".modal-container")?.remove();
		}, 350);
	});
	document.querySelector(".modal-close").addEventListener("click", () => {
		document.querySelector(".modal-container").style.opacity = 0;
		document.querySelector(".modal").style.transform = "scale(0.2)";
		setTimeout(() => {
			document.querySelector(".modal-container")?.remove();
		}, 350);
	});
}

info1.addEventListener("click", function() {
    console.log("Clicked!")
    createModal("C++ Math application", "<p>It's very scuffed and does math for you (kind of)</p> <a> download here</a>")
  })

info2.addEventListener("click", function() {
  console.log("Clicked!")
  createModal("title goes here", "<p>body text html</p>")
})