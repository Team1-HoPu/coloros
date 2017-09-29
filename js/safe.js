/**
 * Created by Administrator on 2017/9/29.
 */
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