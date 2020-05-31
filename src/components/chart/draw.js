import * as d3 from 'd3';

const margin = {top: 10, right: 120, bottom: 40, left: 50};
const width = 960 - margin.left - margin.right;
const height = 900 - margin.top - margin.bottom;

const x = (maxX) => d3.scaleLinear()
    .domain([0, maxX])
    .range([0, width]);

const y = (maxY) => d3.scaleLinear()
    .domain([0, maxY])
    .range([height, 0]);

const selectText = selected => {
        d3.event.stopPropagation();
        d3.selectAll("text").transition()
            .style("opacity", text => text.label === selected.label ? 1 : 0.5)
            .style("stroke", text => text.label === selected.label ? "black" : "none")
}

const clearSelection = () => {
    d3.selectAll("text").transition()
        .style("opacity", 1)
        .style("stroke", "none")
}

const clearCanvas = svg => {
    svg.selectAll("*").remove();
};

const addXAxis = (svg, height, x) => {
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
};

const addYAxis = (svg, y) => {
    svg.append("g")
        .call(d3.axisLeft(y));
};

const addXLabel = (svg, label) => {
    svg.append("text")
        .attr("transform",
            "translate(" + (width/2) + " ," +
            (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("dy", "0.2em")
        .data([{"label":""}])
        .text(label);
}

const addYLabel = (svg, label) => {
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "2em")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .style("text-anchor", "middle")
        .data([{"label":""}])
        .text(label);
}

const addDots = (svg, data, x, y) => {
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", d => d.label)
        .attr("cx", d => x(d.x))
        .attr("cy", d => y(d.y))
        .attr("r", 7.5)
        .style("fill", "#69b3a2")
        .on("click", selectText);
    //other events: .on("mouseover", ...); .on("mouseout", ...);
};

const addDotLabels = (svg, data, x, y) => {
    svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .selectAll("text")
        .data(data)
        .join("text")
        .attr("dy", "0.35em")
        .attr("class", d => d.label)
        .attr("x", d => x(d.x) + 7)
        .attr("y", d => y(d.y))
        .text(d => d.label);
     //   .on("click", selectText);
};

const getMaxX = data => {
    data.sort((a,b) => b.x - a.x);
    return data[0].x;
}

const getMaxY = data => {
    data.sort((a,b) => b.y - a.y);
    return data[0].y;
}

const addLine = (svg, x, y, maxX, maxY) => {
    let x0 = 0.1 * maxX;

    const lineData = [];
    for (let i = x0; i < maxX * 5; i++) {
        const j = x0/i * maxY;
        lineData.push({"x": i, "y": j});
    }

    svg.append("path")
        .datum(lineData)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", d3.line()
            .x(d => x(d.x))
            .y(d => y(d.y)));
};

export const draw = (data, xAxisLabel, yAxisLabel, canvas) => {
    if (!data || data.length === 0) {
        return;
    }

    const svgCanvas = d3.select(canvas);
    clearCanvas(svgCanvas);

    const svg = svgCanvas
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .on("click", clearSelection)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const maxX = getMaxX(data);
    const maxY = getMaxY(data);

    const fx = x(maxX);
    const fy = y(maxY);

    addXAxis(svg, height, fx);
    addXLabel(svg, xAxisLabel);
    addYAxis(svg, fy);
    addYLabel(svg, yAxisLabel);

    addDots(svg, data, fx, fy);
    addDotLabels(svg, data, fx, fy);

    addLine(svg, fx, fy, maxX, maxY);
};