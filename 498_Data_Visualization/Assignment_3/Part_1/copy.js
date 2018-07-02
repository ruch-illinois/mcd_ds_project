function updateViz(data)
{
  // Note that global variables width and height are already defined.
  // There are also attributes with the names "width" and "height"
  // which you will set, but those are different values.

  // Given an array of data consisting of integers, use d3.js to do the following.

  // Select the SVG element by its ID.
 
  // Then use the general update pattern:
  // Join the data to any existing rect elements.
  var join = d3.select("#viz").selectAll("rect").data(data);
  // For each added element, append a rect element to the SVG.
  join = join.enter().append("rect").merge(join);

  // For each deleted element, remove the old rect.
  join.exit().remove();

  // Each rect element should have the following properties
  // set as attributes:
  // "width" = 15
  // "height" = 10 * the datum value
  // "x" = index of the datum * 20
  // "y" = (global variable height / 2.0) - (5.0 * the datum value)
  // "tokenid" = (the datum value) * (the index of the datum) * 64
  // "fill" of "steelblue "
  // Note the extra space above! Sorry, this is a temporary bug.
  join.attr("width", 15)
  .attr("height", function(d) {return d * 10;})
  .attr("x", function(d, i) {return i * 20;})
  .attr("y", function(d) {return (height/2.0) - (5.0 * d);})
  .attr("tokenid", function(d, i) {return d * i *64;})
  .attr("fill", "steelblue ");

  // Don't forget to update the existing rect elements!
  // That means you need to implement the general update pattern correctly.

}
