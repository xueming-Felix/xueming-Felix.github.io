var ctx = document.getElementById("Skills");
var data = {
labels: "Motivation, C++, C, Matlab, Java, Python".split(","),
datasets: [{
	label: "Ability",
	backgroundColor: "rgba(179,181,198,0.2)",
	borderColor: "#3385FF",
	pointBackgroundColor: "#3385FF",
	pointBorderColor: "#fff",
	pointHoverBackgroundColor: "#3385FF",
	pointHoverBorderColor: "#3385FF",
	data: [10, 9, 7, 8, 7, 9]
	}]
};
var myRadarChart = new Chart(ctx, {
type: 'radar',
data: data,
options: {
	scale: {
		responsive: true,
		ticks: {min: 0, max: 10},
		lineArc: false,
		pointLabels: {fontSize: 14},
	},
	scaleFontSize: 0,
	legend: {display: false},
}
});