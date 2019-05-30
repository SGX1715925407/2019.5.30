$(function () {
     $("button").tap(function () {
          // 账户
          var use = $('.user').val();
          // 密码
          var passwd = $('.pasword').val();
          // 确认密码
          var pwsswords = $('.paswords').val();

          if (passwd === pwsswords) {
               var user = /^[1][3,5,6,7,8,9][0-9]{9}$/;
               var pws = /^[a-zA-Z0-9]{4,10}$/;
               console.log(user.test(use));
               console.log(pws.test(passwd));
         

          $.ajax({
               url: "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5",
               type: "POST",
               data:{
                    phone:use,
                    passwd:passwd
               },
               success: function (a) {
                    console.log(a);
                    if(a.code==200){
                         // alert("注册成功");
                         $(".TX").text("注册成功");
                         $(".TX").css("font-size","0.2rem");
                         setTimeout(function(){
                         window.location.href="login index.html"
                    },1500)
                    }
                    else if(a.code==202){
                         $(".iphone").text("该手机号已注册");
                         $(".pw").text("");
                    }
               }
          
          })

          }
          else {
               $('.TX').text('两次输入的密码不一致');
               $(".iphone").text("");
               $(".pw").text("");
          }


     })
})