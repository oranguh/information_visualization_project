function population_pyramid(){

  var data = [
					  [//District A
            {axis:"0-3",value:56},
            {axis:"4-12",value:78},
            {axis:"13-17",value:131},
            {axis:"18-22",value:452},
            {axis:"23-24",value:342},
            {axis:"25-49",value:423},
            {axis:"50-64",value:241},
            {axis:"65+",value:123}
          ],[//District B
            {axis:"0-3",value:45},
            {axis:"4-12",value:47},
            {axis:"13-17",value:123},
            {axis:"18-22",value:467},
            {axis:"23-24",value:367},
            {axis:"25-49",value:432},
            {axis:"50-64",value:234},
            {axis:"65+",value:145}]]

  var cfg = {
	 w: 350,				//Width of the circle
	 h: 350,				//Height of the circle
	 margin: {top: 80, right: 80, bottom: 80, left: 80}, //The margins of the SVG
 	};

  id = ".expanded_figure"
  d3.select(id).select("svg").remove();

d3.select(id).append("svg")
    .attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
    .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
    .attr("class", "pyramid"+id)
  .append( 'g' )
    .attr( "transform", "translate(" + cfg.margin.left+ "," + cfg.margin.top + ")" );

  var svg = d3.select(id).select("svg")

}
