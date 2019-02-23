# City of Amsterdam dataset

There are four seperate datafiles, each containing information on the city at a different scale.

All geographic coordinates in the dataset are projected in the WGS84 coordinate system (also referred to as EPSG:4326). 
For some more info on the coordinate system, see: http://lyzidiamond.com/posts/4326-vs-3857.

## ams_panoramic_imgs_plus_GIS_objects_20m.csv

This file contains information on GIS objects (trees, trash containers, traffic lights, metro/tram stops, metro/tram lines, public toilets, parks, and buildings) linked to panoramic street view images. Hereby are the objects, falling within a 50 meter radius of the point where a panorama was taken, linked to that panorama. This data can be linked to ams_safety_index_districts.csv and ams_stats_districts.csv via the district column. It can be linked with ams_stats_neighbourhoods.csv via the neighbourhood column.

For further insight into this data, see these links:
* https://data.amsterdam.nl/data/panorama/TMX7316010203-000719_pano_0000_000950/?center=52.3734173%2C4.8935939&heading=-134&lagen=pano%3A1&locatie=52.3734172850645%2C4.8935938669686&page-ref=home
* https://maps.amsterdam.nl/bomen/?LANG=en
* https://kaart.amsterdam.nl/#13/52.3793/4.9028/topo/8861,8862,8863,8864/244/
* https://maps.amsterdam.nl/verkeerslichten/?LANG=en
* https://maps.amsterdam.nl/trammetro/?LANG=en
* https://maps.amsterdam.nl/openbare_toiletten/?LANG=en
* https://maps.amsterdam.nl/stadsparken/?LANG=en
* https://maps.amsterdam.nl/functiekaart/?LANG=en
* https://maps.amsterdam.nl/bouwjaar/?LANG=en
* https://maps.amsterdam.nl/monumenten/?LANG=en
* https://maps.amsterdam.nl/afwc/?LANG=en

## ams_safety_index_districts.csv

This datafile contains safety indicators, which have been calculated by the police of Amsterdam. Crime is not the only factor of influence. For instance, nuisance by drunk people in the street also influences the safety index. Another factor of influence is how safe people feel they are in the area. The average score for the whole of Amsterdam in 2014 (benchmark year) is set to 100 for each index. Thus, a score above 100 is relatively unsafe, while a score below 100 is relatively safe.

For more insight into this data, see this visualisation by the municipality of Amsterdam:
* https://www.ois.amsterdam.nl/visualisaties?url=%2Fvisualisatie%2Fveiligheidsindex.html&name=Veiligheidsindex

## Some further visualisations by the municipality

See links below for some more visualisations made the municipality:
* https://gebiedinbeeld.amsterdam.nl/#/dashboard?gebied=DX01&wijk&buurt&thema=Gebied%20in%20het%20kort
* https://www.ois.amsterdam.nl/visualisatie/dashboard_kerncijfers.html

