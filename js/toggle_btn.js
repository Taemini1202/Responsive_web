$(function(){
    $(".menu_toggle_btn").click(function(){
        $(".menu").stop().slideToggle("fast");
    })/* click */

    $(".search_select_box span").hover(function(){
        $(this).next().stop().slideDown();
        // $(".sear_select_list").stop().slideDown();
    }, function(){
        $(this).next().stop().slideUp();
        // $(".sear_select_list").stop().slideUp();
    })
})/* jQ ends */