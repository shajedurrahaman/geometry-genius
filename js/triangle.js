const triangle = document.getElementById('triangle');
const triangleResult = triangle.addEventListener("click", () => {
	// triangle base calculation
  const triangleBase = document.getElementById("triangleBase");
  const triangleBaseValue = triangleBase.value;
	const triangleBaseValueConvert = parseFloat(triangleBaseValue)

	// triangle height calculation
	const triangleHeight = document.getElementById('triangleHeight')
	const triangleHeightValue = triangleHeight.value 
	const triangleHeightValueConvert = parseFloat(triangleHeightValue)
	// total area calculation
	const TotalValue = 0.5 * triangleBaseValueConvert * triangleHeightValueConvert

})

