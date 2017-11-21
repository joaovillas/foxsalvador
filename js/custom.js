      $(document).ready(function(){
        var userFeed = new Instafeed({
          get: 'user',
          userId:'5543573833',
          limit:12,
          resolution:'standard_resolution',
          sortBy:'most-recent',
          accessToken:'5543573833.1677ed0.d1240e7604cc4d0b9cae1ffa73bf0166',
          template :'<div class ="col-sm-3" style="padding:25px"> <a href="{{link}}"> <img class="img-thumbnail" height="500" width="500" src="{{image}}"/ </a><h6 class="text-center" style="color: black">Data de postagem: <br>{{model.created_time}} {{model.tagsFormatted}}<h6> </div>',
          filter: function(image) {
            
                var date = new Date(image.created_time*1000);
            
                m = date.getMonth();
                d = date.getDate();
                y = date.getFullYear();
            
                var month_names = new Array ( );
                month_names[month_names.length] = "Janeiro";
                month_names[month_names.length] = "Fevereiro";
                month_names[month_names.length] = "Março";
                month_names[month_names.length] = "Abril";
                month_names[month_names.length] = "Maio";
                month_names[month_names.length] = "Junho";
                month_names[month_names.length] = "Julho";
                month_names[month_names.length] = "Agosto";
                month_names[month_names.length] = "Setembro";
                month_names[month_names.length] = "Outubro";
                month_names[month_names.length] = "Novembro";
                month_names[month_names.length] = "Dezembro";
            
                var thetime = d + ' ' + month_names[m] + ' ' + y;
            
                image.created_time = thetime;
            
                return true;
              }
        });
        userFeed.run();
      });
 
      