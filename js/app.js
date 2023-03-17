$(document).ready(function(){

    $(".page_b").click(function(){
        var goal = $(this).data("js-page");
		$(".page").removeClass("active");
		$(".page[data-page='"+goal+"']").addClass("active");

        $(".img_container").removeClass("expanded")
        $(".img_container").removeClass("closed")
        $(".img_container").removeClass("entry_bkgd")

        $(".img_container:not([data-page='" +goal+"'])>img").removeClass("expanded_img")

        $(".separator").removeClass("hide_sep")

        
        if (goal !== "entry"){
            $(".img_container[data-page='" +goal+"']").addClass("expanded")
            $(".img_container[data-page='" +goal+"']>img").addClass("expanded_img")
    
            $(".img_container:not([data-page='" +goal+"'])").addClass("closed")
            $(".separator").addClass("hide_sep")
        }

        console.log(goal)
    })


    $("#explore_b").click(function(){
        $("#explore_b").css("display", "none")
        $("#explore_opt").css("display", "flex")

        $(".bkg_img").click(function(){
            $("#explore_b").css("display", "block")
            $("#explore_opt").css("display", "none") 
        })

        $("#gov_back_b").click(function(){
            $("#explore_b").css("display", "block")
            $("#explore_opt").css("display", "none")
        })
    })


    
})