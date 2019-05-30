        $(function(){
            $.ajax({
                url:"素材/json/index.json",
                success: function (result) {
                var interText = doT.template($("#index").text());
                $(".Housingresources>ol").html(interText(result));
                }
            });
            $(".GZone_a").on("tap",function(){
                $(this).addClass('borde');
                $(this).siblings().removeClass("borde");
                $(".GZolone").show();
                $(".GZoltwo").show();
                $(".GZolthree").hide(); 
                $(".GZolfour").hide(); 
            })
            $(".GZone_b").on("tap",function(){
                $(this).addClass('borde');
                $(this).siblings().removeClass("borde");
                $(".GZolone").hide();
                $(".GZoltwo").hide();
                $(".GZolthree").show();
                $(".GZolfour").show();
            })

        })