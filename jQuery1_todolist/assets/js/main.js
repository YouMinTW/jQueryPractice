// We use "on" rather than "click" because we want to cature future add in <li> item
// on() will add listeners for all potential future elements
// click() only adds listeners for existing elements
// we choose ul rather than li because we want to add listeners to future <li> items
// check off the list
$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
});


//Del list
$("ul").on("click","span", function(e){
    //$(this) equals to span 
    //$(this).parent() equals to li
    $(this).parent().fadeOut(500, function(){
        // $(this) equals to li
        $(this).remove();
    });
    // prevent bubbling
    e.stopPropagation();
});

// create list
$("input[type='text']").keypress(function(e){
    // event.which === 13 means  hit enter
    if (event.which === 13){
        // grab todo from input
        let toDo = $(this).val();
        // clean input
        $(this).val("");
        // add on list
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDo + "</li>");
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});
