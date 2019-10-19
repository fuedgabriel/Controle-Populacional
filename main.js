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

// var retorno = axios.get('https://services1.arcgis.com/OlP4dGNtIcnD3RYf/arcgis/rest/services/LimiteRP__enriquecida_2018/FeatureServer/0/query?where=NOME_RP%20%3D%20%27CAMPO%20GRANDE%27&outFields=Shape__Area,Domicilio,Populacao,MALES_CY,FEMALES_CY&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json')
//   .then(function(response){
//   return response.data.features;
// })
//   .catch(function(error){
//   console.warn(error);
// });
// console.log(retorno);







// var minhaPromise = function() {
//   return new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://services1.arcgis.com/OlP4dGNtIcnD3RYf/arcgis/rest/services/LimiteRP__enriquecida_2018/FeatureServer/0/query?where=NOME_RP%20%3D%20%27CAMPO%20GRANDE%27&outFields=Shape__Area,Domicilio,Populacao,MALES_CY,FEMALES_CY&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
//     xhr.send(null);

//     xhr.onreadystatechange = function(){
//       if (xhr.onreadystatechange === 4){
//         if(xhr.status === 200){
//           resolve(JSON.parse(xhr.responseText));
//         }else{
//           reject('Erro na requisição');
//         }

//       }
//     }


//   });
// }

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://services1.arcgis.com/OlP4dGNtIcnD3RYf/arcgis/rest/services/LimiteRP__enriquecida_2018/FeatureServer/0/query?where=NOME_RP%20%3D%20%27CAMPO%20GRANDE%27&outFields=Shape__Area,Domicilio,Populacao,MALES_CY,FEMALES_CY&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
// xhr.send(null);

// xhr.onreadystatechange = function(){
//   if (xhr.readyState === 4){
//     console.log(JSON.parse(xhr.responseText));
//   }
// }

