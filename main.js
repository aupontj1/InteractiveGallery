function showImg(src){
    let spotlightImg = document.getElementById("spotlight");
    let galleryImg = document.getElementById("gallery-img");
    spotlightImg.style.display = "flex";
    galleryImg.src = src;
}

function closeImg(){
    let spotlightImg = document.getElementById("spotlight");
    spotlightImg.style.display = "none";
}


// $(document).ready(function(){
//     $("img").click(function(){
//         $("#spotlight").css({"display": flex});
//     });
// });

// $(document).ready(function(){
//     $("img").click(function(){
//         $("#spotlight").css({"display": none});
//     });
// });
