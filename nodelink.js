const margin = {top:10, right: 30, bottom: 30, left: 40},
width = 930, height = 500;

const svg = d3.select('body').select('#nodelink').append('svg')
.attr('width', width).attr('height', height)
.attr('viewbox', ' 0 0 $(width) $(height)')
.append('g')
.attr('transform', 'translate ( ${margin.left}, ${margin.top} ) ');

d3.json('nodelink_data.json').then(function (data) {


const node = svg.selectAll('circle').data(data.nodes).enter()
.append('circle').attr('r', 40)
.style('fill', function (d){
    return d.color;
})

const link = svg.selectAll('line').data(data.links).enter()
.append('line').style('stroke','#aaa');


const simulation = d3.forceSimulation(data.nodes)
.force('link', d3.forceLink()
.id(function(d) {return d.id}).links(data.links))
.force('charge', d3.forceManyBody().strength(-400))
.force('center', d3.forceCenter(width/2, height/2))
.on('end',ticked);

function ticked() {
    node.attr('cx', d => d.x + 6).attr('cy', d => d.y -6);
    link.attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y)
}

})