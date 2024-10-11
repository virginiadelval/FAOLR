
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
        "<div id='Estilo1'><h3>Sitios para Modelos </h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.id + "<br>" +
        // "<b> Habitantes (Censo 2010): </b>" + feature.properties.HABITANTES + "<br>" +
        // "<b> Tipo de asentamiento: </b>" + feature.properties.tipo_asent + "<br>" +
        // "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(SitiosSeleccionados)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}


var sitios = 
{
    "type": "FeatureCollection",
    "name": "sitios_seleccionados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 1, "data": "Puesto El Tala - Paraje Angel Diaz" }, "geometry": { "type": "Point", "coordinates": [ -66.74701970645603, -29.292139639095431 ] } },
    { "type": "Feature", "properties": { "id": 2, "data": "Patquia" }, "geometry": { "type": "Point", "coordinates": [ -66.897256738101035, -30.038237634567697 ] } },
    { "type": "Feature", "properties": { "id": 3, "data": "Aguango" }, "geometry": { "type": "Point", "coordinates": [ -67.359134829820434, -30.444810713032691 ] } },
    { "type": "Feature", "properties": { "id": 4, "data": "Comunidad Guandacol" }, "geometry": { "type": "Point", "coordinates": [ -68.460860856054481, -29.506187293898943 ] } }
    ]
    }
    
