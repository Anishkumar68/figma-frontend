const prices = {
	1: 10,
	2: 18,
	3: 24,
};

const radios = document.querySelectorAll('input[name="unit"]');
const totalEl = document.getElementById("total");
const optionsTemplate = document.getElementById("options-template");

radios.forEach((radio) => {
	radio.addEventListener("change", () => {
		const selectedValue = radio.value;
		totalEl.innerText = `$${prices[selectedValue]}.00 USD`;

		document.querySelectorAll(".box").forEach((box) => {
			const input = box.querySelector("input");
			const existingOptions = box.querySelector(".options");

			// Remove previous options if any
			if (existingOptions) {
				existingOptions.remove();
			}

			// Add options only to the selected box
			if (input.value === selectedValue) {
				box.classList.add("expanded");

				const clone = optionsTemplate.cloneNode(true);
				clone.style.display = "block";
				box.appendChild(clone);
			} else {
				box.classList.remove("expanded");
			}
		});
	});
});

// Trigger default selection
document
	.querySelector('input[name="unit"]:checked')
	.dispatchEvent(new Event("change"));
