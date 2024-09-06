sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("projetonetflix.controller.projeto_netflix", {
      onInit: function () {
        //definição de lista vazia de resultados
        let resultados = {
          titles: [],
        };
        //definição de modelo - variável especial para mostrar dados na tela
        let resultadosModel = new JSONModel();
        //Atribuição de dados
        resultadosModel.setData(resultados);
        //anexar modelo na tela
        let tela = this.getView();
        tela.setModel(resultadosModel, "APINetflix");
      },
      onInicioLinkPress: function () {
        alert("teste");
      },

      onBuscarDados: function () {
        //Buscar dados na API da Netflix

        let searchField = this.byId("idSearchField");
        let filtro = searchField.getValue();

        const settings = {
          async: true,
          crossDomain: true,
          url:
            "https://netflix54.p.rapidapi.com/search/?query=" +
            filtro +
            "&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "4602c2131bmshb961b668ba4f1eap12a908jsn70c3c2c51a2d",
            "x-rapidapi-host": "netflix54.p.rapidapi.com",
          },
        };

        $.ajax(settings).done(
          function (response) {
            console.log(response);

            //resgatar o modelo e atualizar os dados
            let tela = this.getView();
            let modelo = tela.getModel("APINetflix");
            let dados = modelo.getData();

            //Limpar a lista
            dados.titles = [];
            dados.titles = response.titles;
            modelo.refresh();
          }.bind(this)
        );
      },
    });
  }
);
