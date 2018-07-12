function updateViz(data)
{
  // Note that global variables width and height are already defined.

  // Given an array of data consisting of objects with numerical
  // properties x, y, r, use d3.js to do the following.

  // Select the SVG element by its ID.
  var join = d3.select("#viz").selectAll("circle").data(data);

  // Then use the general update pattern:
  // Join the data to any existing circle elements.
  // For each added element, append a circle element to the SVG.
  join = join.enter().append("circle").merge(join);

  // For each deleted element, remove the old circle.
  join.exit().remove();

  // Note that each datum is an object with properties x, y, r.
  // Each circle element should have the following properties
  // set as attributes:
  // "cx" = (global variable width / 2) + (the datum value of x)
  // "cy" = (global variable height / 2) + (the datum value of y)
  // "r" = (the datum value of r / 2)
  // "fill" of "green"
  join.attr("cx", function(d) { return (width/2) + d.x; })
  .attr("cy", function(d) { return (height/2) + d.y; })
  .attr("r", function(d) { return d.r/2; })
  .attr("fill", "green");

  // Don't forget to update the existing circle elements!
  // That means you need to implement the general update pattern correctly.

}

