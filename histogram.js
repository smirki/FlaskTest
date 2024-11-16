const margin = {top: 30, right: 0, bottom: 30, left: 40}, width = 1230, height
= 500 ;
const svg = d3.select('body').select('#histogram').append('svg')
.attr('width', width). attr('height', height)
.attr('viewBox', '0 0 $(width} ${height}')
const data = [
{letter: "A", frequency: 0.08167},
{letter: "B", frequency: 0.01492},
{letter: "C", frequency: 0.02782},
{letter: "D", frequency: 0.04253},
{letter: "E", frequency: 0.12702},
{letter: "F", frequency: 0.02288},
{letter: "G", frequency: 0.02015},
{letter: "H", frequency: 0.06094},
{letter: "I", frequency: 0.06966},
{letter: "J", frequency: 0.00153},
{letter: "K", frequency: 0.00772},
{letter: "L", frequency: 0.04025},
{letter: "M", frequency: 0.02406},
{letter: "N", frequency: 0.06749},
{letter: "O", frequency: 0.07507},
{letter: "P", frequency: 0.01929},
{letter: "Q", frequency: 0.00095},
{letter: "R", frequency: 0.05987},
{letter: "S", frequency: 0.06327},
{letter: "T", frequency: 0.09056},
{letter: "U", frequency: 0.02758},
{letter: "V", frequency: 0.00978},
{letter: "W", frequency: 0.0236},
{letter: "X", frequency: 0.0015},
{letter: "Y", frequency: 0.01974},
{letter: "Z", frequency: 0.00074}
];
const xScale = d3.scaleBand()
.domain(d3.groupSort(data, ([d]) => -d.frequency, d =>
d.letter))
.range([margin.left, width - margin.right])
.padding(0.1);
const yScale = d3.scaleLinear()
.domain([0, d3.max(data, d => d. frequency)])
.range([height - margin.bottom, margin.top]);
const bars = svg.append('g').selectAll('rect').data(data)
.join ('rect')
.attr('x',d => xScale(d.letter))
.attr('y',d => yScale(d.frequency))
.attr('width', d=> xScale.bandwidth())
.attr('height', d => yScale(0) - yScale(d.frequency))
.attr('fill', '#a5b4fc')
.on('mouseover', function (d){
d3.select(this).attr('fill', '#fef9c3');
})
.on('mouseout', function (d){
d3.select(this).attr('fill', '#a5b4fc');
});
const xAxis = svg.append('g')
.attr('transform', 'translate(0, ${height - margin.bottom}) ')
.call (d3. axisBottom(xScale). tickSizeOuter(0));
const yAxis = svg.append('g')
.attr('transform', 'translate(S(margin. left), 0)')
.call(d3.axisLeft(yScale).tickFormat(y => (y *
100).toFixed()));
yAxis. select ('.domain'). remove();
yAxis. append('text').attr('x', margin.left-40).attr('y', 20)
.attr('text-anchor', 'start')
.attr('fill', 'black')
.text('Frequency(%)');