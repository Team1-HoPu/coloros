/**
 * Created by Administrator on 2017/9/26.
 * Project ： CloudService Javascript
 * Creator ：Jackzoom
 */

$(function () {
    var $cloud_login=$(".cloud_login");//登录按钮
    var $cloud_cap=$(".cloud_cap_img");//验证码图片
    var capImg_random="";//验证码随机数
    console.log($cloud_cap);
    var capArr=[
        "../img/cloudservice_img/codeImage_01.jpg",
        "../img/cloudservice_img/codeImage_02.jpg",
        "../img/cloudservice_img/codeImage_03.jpg",
        "../img/cloudservice_img/codeImage_04.jpg",
        "../img/cloudservice_img/codeImage_05.jpg"
    ];
    $cloud_login.click(function(){
        if(!$(".cloud_userInput").val()||!$(".cloud_pwdInput").val()){
            alert("用户名或密码为空！");
            return false;
        }
        else
        {
            if(!$(".cloud_captchaInput").val()){
                alert("验证码为空！");
            }
            else
            {
                window.location.href="http://oppo.com";
            }
        }
    });
    $cloud_cap.click(function () {
        capImg_random=capArr[parseInt(Math.random()*5)];
        $cloud_cap.attr("src",capImg_random);
    });


});