      function pontoDeOrvalho(jTemperatura, jHumidade){
        console.log("corujas");
         var a = 17.271;
         var b = 237.7;
         var temp = (a * jTemperatura) / (b + jTemperatura) + Math.log(jHumidade/100);
         var jPontoDeOrvalho = (b * temp) / (a - temp);
         //return jPontoDeOrvalho;
         $("#pontodeorvalho span").html(jPontoDeOrvalho);
         console.log("Orvalho" + jPontoDeOrvalho);
     }
      function drawGaugeUmidade(jHumidade) {
        var jUmid = new JustGage({
                  id: "gauge-umidade",
                  value: jHumidade,
                  min: 0,
                  max: 1000,
                  title: "Umidade"
                  });
      }

      function drawGaugeTemperatura(jTemperatura) {
        var jTemp = new JustGage({
                  id: "gauge-temperatura",
                  value: jTemperatura,
                  min: 0,
                  max: 50,
                  title: "Temperatura"
                  });
      }

    function imprimir(data){
        data2 = JSON.stringify(data);
        var formato = data2.split(":");
        console.log(formato);
        printAll(data);
	}

    function printAll(data){
         //teste
        for (var i = 0; i < 50; i++){
            console.log("entrou no for");
            var jHora = data.data[i].st;
            jHora = jHora.slice(11, 19);
            $("#hora span").html(jHora);
            console.log(data.data[i].st);

            if (data.data[i].ms.p == "temperature"){
                var jTemperatura = data.data[i].ms.v;
                $("#temperatura span").html(jTemperatura);
                console.log("Temperatura:" + " " + data.data[i].ms.v);
            }
            else if (data.data[i].ms.p == "luminousIntensity"){
                var jLuminosidade = data.data[i].ms.v;
                $("#luminosidade span").html(jLuminosidade);
            }
            else if (data.data[i].ms.p == "amount"){
                var jContato = data.data[i].ms.v;
                $("#contato span").html(jContato);
            }
            else if (data.data[i].ms.p == "relativeHumidity"){
                var jHumidade = data.data[i].ms.v;
                 $("#humidade span").html(jHumidade);
            }
            else if (data.data[i].ms.p == "sound"){
                var jRuido = data.data[i].ms.v;
                $("#ruido span").html(jRuido);
            }

        }
         drawGaugeLuminosidade(jLuminosidade);
         drawGaugeTemperatura(jTemperatura);
         drawGaugeUmidade(jTemperatura);
        pontoDeOrvalho(jTemperatura, jHumidade)
    }

    $.getJSON("http://dca.telefonicabeta.com/m2m/v2/services/qbjxcuwlsg5h/assets/qbjxcuwlsg5h/data/?limit=60&offset=0&sortBy=!samplingTime", imprimir);


