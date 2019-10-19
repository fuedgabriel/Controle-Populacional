$.ajax({
  type: "POST",
  dataType: "json",
  url: "https://services1.arcgis.com/OlP4dGNtIcnD3RYf/arcgis/rest/services/LimiteRP__enriquecida_2018/FeatureServer/0/query?where=NOME_RP%20%3D%20%27CAMPO%20GRANDE%27&outFields=Shape__Area,Domicilio,Populacao,MALES_CY,FEMALES_CY&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json",
  success: function(data) {
    
    var atributos = data['features'][0];
    atributos = atributos['attributes']
    
    var Domicilio = atributos['Domicilio'];
    var Mulheres = Number(atributos['FEMALES_CY']);
    var Homens =  Number(atributos['MALES_CY']) ;
    var Area_Local = atributos['Shape__Area'];
    var totalpop = Mulheres+Homens;
    var pctF= (Mulheres/totalpop)*100;
    var pctm= (Homens/totalpop)*100;

    document.write('<p>Domicílios : '+ Domicilio + "</p>");
    document.write('<p>Mulheres : '+ Mulheres + "</p>");
    document.write('<p>Homens : '+ Homens + "</p>");
    document.write('<p>Area local : '+ Area_Local.toFixed(0) + " M³</p>");
    document.write('<p>Estatistica de população</p>');
    document.write('<p>Mulheres : '+ pctF.toFixed(0) + "%</p>");
    document.write('<p>Homens : '+ pctm.toFixed(0) + "%</p>");
    document.write('<p>População : '+ totalpop + "</p>");
    

  }
});



