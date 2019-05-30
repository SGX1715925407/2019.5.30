$(function () {
    $("button").tap(function () {
        // 账户
        var use = $('.user').val();
        // 密码
        console.log(use);
        var passwd = $('.pasword').val();
         if (use!=''&&passwd!='') {
            // 确认密码
            //  var pwsswords = $('.paswords').val();

            //  if (passwd === pwsswords) {
            var user = /^[1][3,5,6,7,8,9][0-9]{9}$/;
            var pws = /^[a-zA-Z0-9]{4,10}$/;
            console.log(user.test(use));
            console.log(pws.test(passwd));
            //  }
            //  else {
            //       $('.TX').text('两次输入的密码不一致');
            //  }
            $.ajax({
                url: "https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5",
                type: "POST",
                data: {
                    phone: use,
                    passwd: passwd
                },
                success: function (a) {
                    console.log(a);

                    if (a.code == 200) {
                        window.location.href = "index.html"
                    }
                    else if (a.code == 202) {
                        if(a.msg=="用户名或者密码错误！"){
                            $(".iphone").text(a.msg);
                            $('.pw').text('');
                        }
                        else if(a.msg=="用户不存在！"){
                            $(".iphone").text("用户不存在");
                            $('.pw').text('');
                            $('.none').css('display', 'inline-block');
                        }
                        

                    }
                }

            })
            $('.none').tap(function () {
                window.location.href = "zhu ce.html";
            })
        }else if(use==''){
            $(".iphone").text("请输入账号");
        }
        else if(passwd==''){
            $(".pw").text("请输入密码");
        }
        // else{
        //     $('.pw').text('未输入密码');
        // }
    })

})