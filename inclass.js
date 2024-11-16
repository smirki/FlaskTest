const circles = [
    {r:30, cx:100, cy:100, color: "limegreen"},
    {r:40, cx:200, cy:100, color: "red"},
    {r:50, cx:300, cy:100, color: "yellow"},
    {r:60, cx:400, cy:100, color: "grey"},
    {r:70, cx:500, cy:100, color: "lavender"},
    {r:80, cx:600, cy:100, color: "skyblue"},
];

const svg = d3.select('body').selectAll('#d3_playground').append('svg')
    .attr('width', 1000).attr('height', 1200);

svg.selectAll('circle').data(circles).enter().append('circle').attr('r',d=>d.r).attr('fill', d => d.color).attr('cx', d => d.cx).attr('cy', (d,i)  => d.cy+i*100);