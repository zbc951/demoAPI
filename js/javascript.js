//nav

$(function(){
    $("nav .slideBtn").on("click",function(){
        $("nav")
        .toggleClass("active");
    })
})
$(function(){
    $(".viewMode").on("click",function(){
        $(".viewMode,body,article")
        .toggleClass("darkMode");
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
    $(".demoBox ol:first-child label").on("change",function(){
        $(".demoBox label")
        .removeClass("active");
        $(this)
        .addClass("active");

        $(".demoPlace .marqueeBox")
        .addClass("display");

        var n = $(this).closest("li").index();

        $(".demoPlace .marqueeBox>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".demo .marqueeBox p:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".demo .standardBox p,.demoPlace .standardBox")
        .removeClass("display");
    })

    $(".demoBox ol:last-child label").on("change",function(){
        $(".demoBox label")
        .removeClass("active");
        $(this)
        .addClass("active");

        $(".demoPlace .standardBox")
        .addClass("display");

        var n = $(this).closest("li").index();

        $(".demoPlace .standardBox>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".demo .standardBox p:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".demo .marqueeBox p,.demoPlace .marqueeBox")
        .removeClass("display");
    })
})