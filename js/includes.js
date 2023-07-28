$(document).ready(function () {
   $("#btnRegistrar").click(function () {
      if (window.location.pathname.includes("main.html")) {
         // Guardamos las dimensiones actuales del <main>
         var mainWidth = $("main").width() - 20;
         var mainHeight = $("body").height() - 40;
         $("main").empty();
         var iframe = $('<iframe id="contenidoIframe"></iframe>').attr("src", "registrar.html")
            .width(mainWidth)
            .height(mainHeight);
         $("main").append(iframe);
         $(iframe).on("load", function () {
            if (!this.contentWindow.location.href.includes("registrar.html")) {
               $("main").empty(); // Restauramos el contenido original del main
               window.location.reload(); // Recargamos toda la página
            }
         });
      }
   });
   $("#btnRecuperar").click(function () {
      if (window.location.pathname.includes("main.html")) {
         // Guardamos las dimensiones actuales del <main>
         var mainWidth = $("main").width() - 20;
         var mainHeight = $("body").height() - 40;
         $("main").empty();
         var iframe = $('<iframe id="contenidoIframe"></iframe>').attr("src", "recuperar.html")
            .width(mainWidth)
            .height(mainHeight);
         $("main").append(iframe);
         $(iframe).on("load", function () {
            if (!this.contentWindow.location.href.includes("recuperar.html")) {
               $("main").empty(); // Restauramos el contenido original del main
               window.location.reload(); // Recargamos toda la página
            }
         });
      }
   });
});