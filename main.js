
SMALL_IMAGE_DIMENSIONS = {"width": 200, "height": 200}
SMALL_IMAGE_PATHS = ["figure_age.png", "figure_donut.png", "figure_ethnicity.png", "figure_radial.png"]
FIGURE_FUNCTIONS = [population_pyramid(), "figure_donut.png", "figure_ethnicity.png", radar_chart()]
var selection = 3


d3.select("body").select(".small_figs")
  .selectAll(".small_fig")
  .data(SMALL_IMAGE_PATHS)
  .enter()
  .append("div")
    .attr("class", "col-lg-3 col-md-3 col-sm-3 col-xs-3 justify-content-center")
  .append("svg")
  .attr("class", "small_fig")
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
    .attr("width", SMALL_IMAGE_DIMENSIONS["width"])
    .attr("height", SMALL_IMAGE_DIMENSIONS["width"])
  .style("stroke", function(d, i){
    if (i === selection) {
      return "red"
    } else {
      return "black"}})
  .on("click", function(d, i){
    selection = i
    if (selection === 3){
      radar_chart()
    } else {
      remake_expanded_figure(d)
    }


    })


// MAP SELECTION

d3.select("body").select(".expanded_figs")
  .append("div")
    .attr("class", "col-lg-4 col-md-4 col-sm-4 col-xs-4 justify-content-center")
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
    .attr("class", "col-lg-2 col-md-2 col-sm-2 col-xs-2 justify-content-center")
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
    .attr("class", "col-lg-6 col-sm-6 col-xs-6 justify-content-center expanded_figure")
  .append("svg")
    .attr("width", 500)
    .attr("height", 500)

make_pattern(d3.select("body").select(".expanded_figure").select("svg"), "figure_radial.png")

d3.select("body").select(".expanded_figure").select("svg")
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

function remake_expanded_figure(new_image){
  d3.select("body").select(".expanded_figure").select("svg").remove()

  d3.select("body").select(".expanded_figure")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)
    .append("pattern")
      .attr("id", new_image)

  d3.select("body").select(".expanded_figure").select("svg")
    .append("image")
    .transition()
    .attr("xlink:href", new_image)

  d3.select("body").select(".expanded_figure").select("svg")
  .append("rect")
    .attr("fill", "url(#" + new_image + ")")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 400)
    .attr("height", 400)
    .style("stroke", "red")
}

// remake_expanded_figure("figure_ethnicity.png")
