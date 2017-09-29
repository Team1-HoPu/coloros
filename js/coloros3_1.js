/**
 * Created by Administrator on 2017/9/28.
 * Project ： ColorOS 3.1 Javascript
 * Creator ：Jackzoom
 */
var scrollTop_arr=[735,5455,13895,15365];//配置滚动锚链接滚动条位置

//锚链接事件
$(function () {
    var $coloros_anchor_links=$(".coloros_anchor_links");
    var $coloros_links_a=$coloros_anchor_links.find("a");
    var anchor_defIco=[60,-185,-425,-645];//定义默认锚链接背景图像素水平尺寸
    //点击事件
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
            $(window).scrollTop(scrollTop_arr[0]);
        }
        else if($(this).attr("class")=="coloros_anchor_ease"){
            $(this).css(
                {
                    "color":"#ffa627",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -185px 38px"
                });
            $(window).scrollTop(scrollTop_arr[1]);

        }
        else if($(this).attr("class")=="coloros_anchor_safe"){
            $(this).css(
                {
                    "color":"#48a3ff",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -425px 38px"
                });
            $(window).scrollTop(scrollTop_arr[2]);
        }
        else
        {
            $(this).css(
                {
                    "color":"#b027ff",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -645px 38px"
                });
            $(window).scrollTop(scrollTop_arr[3]);
        }
    });

    //滚动条事件


});

$(window).scroll( function() {


    if(window.scrollY>=835){
        $(".coloros_anchor_links").addClass("coloros_anchor_links_fixed");
        $(".coloros_anchor_links").css("position","fixed");
        var $coloros_links_a=$(".coloros_anchor_links").find("a");
        var anchor_defIco=[60,-185,-425,-645];//定义默认锚链接背景图像素水平尺寸
        $coloros_links_a.css("color","black");
        for(var a=0;a<$coloros_links_a.length;a++)
        {
            var anchor_text=anchor_defIco[a];
            $coloros_links_a.eq(a).css("background","url('../img/coloros3_1_img/s1_nav.png') no-repeat "+anchor_text+"px "+"-65px");

        }
        if(window.scrollY<scrollTop_arr[1]){

            //快模块：对比图动画事件
            if(window.scrollY>=2600){
                var linesscroll = $(".coloros3_1_section_4-lines>div");
                $(linesscroll).removeClass("section_4_div").addClass("line1");
                $(".video").fadeOut(2000);

            }
            $(".coloros_anchor_links").find("a").eq(0).css(
                {
                    "color":"#2cd99e",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat 60px 38px"
                });
        }
        else if(window.scrollY>=scrollTop_arr[1]&&window.scrollY<scrollTop_arr[2]){

            $(".coloros_anchor_links").find("a").eq(1).css(
                {
                    "color":"#ffa627",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -185px 38px"
                });
        }
        else if(window.scrollY>=scrollTop_arr[2]&&window.scrollY<scrollTop_arr[3])
        {
            $(".coloros_anchor_links").find("a").eq(2).css(
                {
                    "color":"#48a3ff",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -425px 38px"
                });
        }
        else
        {
            $(".coloros_anchor_links").find("a").eq(3).css(
                {
                    "color":"#b027ff",
                    "background": "url('../img/coloros3_1_img/s1_nav.png') no-repeat -645px 38px"
                });
        }

    }
    else if(window.scrollY<=735)
    {
        $(".coloros_anchor_links").removeClass("coloros_anchor_links_fixed");
        $(".coloros_anchor_links").css("position","absolute");

    }



    console.log(window.scrollY);
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



window.onload=function(){

    var div1 = document.getElementsByClassName("section");
    var screenH=window.screen.height;


    window.onresize=function(){
        screenH=window.screen.height;
    };
    window.onscroll=function(){
        var arr = [];
//            var elePosY= ele.getBoundingClientRect().top;
        for(var i=0;i<div1.length;i++){
            arr.push(div1[i].getBoundingClientRect().top);
        }
        for(var j=0;j<arr.length;j++){
            (function(n){
                if(arr[n]<screenH-220){
                    div1[n].className =div1[n].className+" section move";
                }
            })(j);
        }

    }
}
