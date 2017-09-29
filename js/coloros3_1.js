/**
 * Created by Administrator on 2017/9/28.
 * Project ： ColorOS 3.1 Javascript
 * Creator ：Jackzoom
 */

//锚链接事件
$(function () {
    var $coloros_anchor_links=$("#coloros_anchor_links");
    var $coloros_links_a=$coloros_anchor_links.find("a");
    var anchor_defIco=[60,-185,-425,-645];//定义默认锚链接背景图像素水平尺寸
    $coloros_links_a.click(function () {

        $coloros_links_a.css("color","black");
        for(var a=0;a<$coloros_links_a.length;a++)
        {
            var anchor_text=anchor_defIco[a];
            $coloros_links_a.eq(a).css("background","url('../img/coloros3_1_img/s1_nav.png') no-repeat "+anchor_text+"px "+"-65px");

        }

        //锚链接跳转事件
        if($(this).attr("class")=="coloros_anchor_quick"){
            $(this).css(
                {
                    "color":"#2cd99e",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat 60px 38px"
                });
        }
        else if($(this).attr("class")=="coloros_anchor_ease"){
            $(this).css(
                {
                    "color":"#ffa627",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -185px 38px"
                });

        }
        else if($(this).attr("class")=="coloros_anchor_safe"){
            $(this).css(
                {
                    "color":"#48a3ff",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -425px 38px"
                });
        }
        else
        {
            $(this).css(
                {
                    "color":"#b027ff",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -645px 38px"
                });
        }


    });
});

//主页底部事件
$(function () {
    //微博微信事件
    $(".footer_ico_weibo").mouseover(function(){
        $(this).find("span").css("background-position","-28px 0");
        $(this).find("a").css("color","#3FBC81");
    }).mouseout(function () {
        $(this).find("span").css("background-position","0 0");
        $(this).find("a").css("color","");
    });

    $(".footer_ico_weixin").mouseover(function(){
        $(this).find("span").css("background-position","-84px 0");
        $(this).find("a").css("color","#3FBC81");
        $(".footer_ico_weixin").find("img").css("display","block");
    }).mouseout(function () {
        $(this).find("span").css("background-position","-56px 0");
        $(this).find("a").css("color","");
        $(".footer_ico_weixin").find("img").css("display","none");
    });
});