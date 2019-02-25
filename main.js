
SMALL_IMAGE_DIMENSIONS = {"width": 150, "height": 150}
SMALL_IMAGE_PATHS = ["figure_age.png", "figure_donut.png", "figure_ethnicity.png", "figure_radial.png"]
// data


d3.select("body").select(".small_figs")
  .selectAll(".small_fig")
  .data(SMALL_IMAGE_PATHS)
  .enter()
  .append("div")
    .attr("class", "col-lg-3 small_fig")
  .append("svg")
  .attr("width", SMALL_IMAGE_DIMENSIONS["width"])
  .attr("height", SMALL_IMAGE_DIMENSIONS["height"])
  .append("defs")
     .append("pattern")
     .attr("id", function(d){
       return d
     })
     .attr("width", 1)
     .attr("height", 1)
     .attr("viewBox", "0 0 100 100")
     .attr("preserveAspectRatio", "none")
   .append("image")
     .attr("width", 100)
     .attr("height", 100)
     .attr("preserveAspectRatio", "none")
     .attr("xlink:href", function(d){
       return d
     })

d3.select("body").select(".small_figs")
 .selectAll("svg")
  .append("rect")
  .attr("class", "small_figure_preview")
  .attr("fill", function(d){
    return "url(#" + d + ")"})
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", SMALL_IMAGE_DIMENSIONS["width"])
    .attr("height", SMALL_IMAGE_DIMENSIONS["width"])
  .style("stroke", function(d, i){
    if (i === 3) {
      return "red"
    } else {
      return "black"
    }
  })

// MAP SELECTION

d3.select("body").select(".expanded_figs")
  .append("div")
    .attr("class", "col-lg-4")
  .append("svg")
    .attr("class", "selection_map")
    .attr("width", 500)
    .attr("height", 500)

make_pattern(d3.select("body").select(".expanded_figs").select(".selection_map"), "figure_map.png")

  d3.select("body").select(".expanded_figs").select(".selection_map")
  .append("rect")
    .attr("fill", "url(#figure_map.png)")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 400)
    .attr("height", 400)

// SELECTION DISPLAY

d3.select("body").select(".expanded_figs")
  .append("div")
    .attr("class", "col-lg-2")
  .append("p")
    .attr("class", "font-weight-bold")
    .text("District A selection:")
  .append("p")
    .attr("class", "font-weight-normal")
    .text("Amsterdam Noord")
    .style("color", "red")
  .append("p")
    .attr("class", "font-weight-bold")
    .text("District B selection:")
    .style("color", "black")
  .append("p")
    .attr("class", "font-weight-normal")
    .text("Amsterdam Amstel")
    .style("color", "red")

// EXPANDED FIGURE

d3.select("body").select(".expanded_figs")
  .append("div")
    .attr("class", "col-lg-6")
  .append("svg")
    .attr("class", "expanded_figure")
    .attr("width", 500)
    .attr("height", 500)

make_pattern(d3.select("body").select(".expanded_figs").select(".expanded_figure"), "figure_radial.png")

d3.select("body").select(".expanded_figs").select(".expanded_figure")
.append("rect")
  .attr("fill", "url(#figure_radial.png)")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 400)
  .attr("height", 400)
  .style("stroke", "red")





function make_pattern(svg, image_path){
 svg.append("defs")
    .append("pattern")
    .attr("id", image_path)
    .attr("width", 1)
    .attr("height", 1)
    .attr("viewBox", "0 0 100 100")
    .attr("preserveAspectRatio", "none")
  .append("image")
    .attr("width", 100)
    .attr("height", 100)
    .attr("preserveAspectRatio", "none")
    .attr("xlink:href", image_path)
}
