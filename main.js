$.ajax({
  type: "POST",
  dataType: "json",
  url: "https://services1.arcgis.com/OlP4dGNtIcnD3RYf/arcgis/rest/services/LimiteRP__enriquecida_2018/FeatureServer/0/query?where=NOME_RP%20%3D%20%27CAMPO%20GRANDE%27&outFields=Shape__Area,Domicilio,Populacao,MALES_CY,FEMALES_CY&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json",
  success: function(data) {
    
    var atributos = data['features'][0];
    atributos = atributos['attributes']
    
    var Domicilio = atributos['Domicilio'];
    var Mulheres = atributos['FEMALES_CY'];
    var Homens = atributos['MALES_CY'];
    var População = atributos['Populacao'];
    var Area_Local = atributos['Shape__Area'];
    

    document.writeln('<p>Domicílios : '+ Domicilio + "</p>");
    document.writeln('<p>Mulheres : '+ Mulheres + "</p>");
    document.write('<p>Homens : '+ Homens + "</p>");
    document.write('<p>População : '+ População + "</p>");
    document.write('<p>Area Local : '+ Area_Local + "</p>");

    

  }
});



