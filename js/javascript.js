//nav

$(function(){
    $("nav .slideBtn").on("click",function(){
        $("nav")
        .toggleClass("active");
    })
})

//home

$(function(){
    $(".demoImg .rowBox").on("click",function(){
        $(this)
        .toggleClass("active");

        $(".demoBox img")
        .toggleClass("active");
    })
})
$(function(){
    $(".demoBox label").on("change",function(){
        $(this)
        .addClass("active")
        .closest("li").siblings().find("label").removeClass("active");

        var n = $(this).closest("li").index();

        $(".demoPlace>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".demo .smallTitle>p:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})