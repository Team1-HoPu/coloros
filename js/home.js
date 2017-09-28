/**
 * Created by Administrator on 2017/9/28.
 * Project ： Home Javascript
 * Creator ：Jackzoom
 */
var $car_group_left;//轮播left偏移值
//主页轮播图
$(function () {
    var $home_car_group=$(".home_car_group");//轮播容器
    var $home_car_ico=$(".home_car_ico").find("span");//轮播按钮
    var car_ico_index=0;
    var car_imgArr=[0,-1920,-3840];
    var timer_car=false;

    $home_car_ico.click(function () {
        clearInterval(timer_car);
        car_ico_index=$(this).index();
        for(var a=0;a<$home_car_ico.length;a++){
            $home_car_ico.eq(a).removeClass("home_car_active");
        }
        $(this).addClass("home_car_active");
        if(parseInt($home_car_group.css("left"))<-1920){
            $home_car_group.css("left",car_imgArr[car_ico_index]+"px");
        }
        else
        {
            $car_group_left=parseInt($home_car_group.css("left"))-1920;
            $home_car_group.css("left",car_imgArr[++car_ico_index]+"px");
        }
    });
    timer_car=setInterval(function () {
        for(var a=0;a<$home_car_ico.length;a++){
            $home_car_ico.eq(a).removeClass("home_car_active");
        }
        $home_car_ico.eq(car_ico_index).addClass("home_car_active");
        if(parseInt($home_car_group.css("left"))<-1920){
            car_ico_index=0;
            $home_car_group.css("left",car_imgArr[car_ico_index]+"px");
        }
        else
        {

            $car_group_left=parseInt($home_car_group.css("left"))-1920;
            $home_car_group.css("left",car_imgArr[++car_ico_index]+"px");
        }

        console.log(car_ico_index);
    },2000);



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
       setTimeout(function () {
           $(".footer_ico_weixin").find("img").css("display","block");
        },400);
    }).mouseout(function () {
        $(this).find("span").css("background-position","-56px 0");
        $(this).find("a").css("color","");
        $(this).find("img").css("display","none");
    });
});


