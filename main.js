let counter = 0;

$("#pls").on("click", function () {

counter++
    $("#item").text(counter)
})

$("#mns").on("click", function () {
counter--

    $("#item").text(counter)
})



$("#rst").on("click", function () {

    counter = 0
    $("#item").text(counter)
})

