# Leaflet Widget Point

A [Geofield] 2x widget that provides a [Leaflet] map widget with the
[Leaflet.widget_point] plugin for capturing a point.

## Features:

- Capture a point.
- Use base layers defined by [Leaflet module].

## Installation tips:

- Download [Leaflet.widget_point] and place it in your libraries directory (see 
  [Libraries API]). E.g: sites/all/libraries
- Requires [Leaflet] to be available. By default the version bundled with
  [Leaflet.widget_point] will be used. However if you have [Leaflet module] installed
  and [Leaflet] located at <path/to/libraries>/leaflet, that version will be
  used.
- This module requires the latest dev release of [GeoPHP] as there are issues 
  with parsing GeoJSON in the latest stable release.

## Requires:

- [Libraries API] (2.x)
- [Geofield] (2.x)

[Leaflet]: http://leaflet.cloudmade.com
[GeoPHP]: http://drupal.org/project/geophp
[Leaflet module]: http://drupal.org/project/leaflet
[Geofield]: http://drupal.org/project/geofield
[Leaflet.widget_point]: add link to gitHub
[Libraries API]: http://drupal.org/project/libraries
