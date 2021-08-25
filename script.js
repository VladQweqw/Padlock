
$(() => {
    let pin = "";
    const correctPin = "1234";

    $(".numbers").click(function(e) {
        let number = e.target.id;
        if(Number(number) || number == 0 ) {
            pin += number;
            $(".display").text(pin)
        }
        if(number == "delete") {
            pin = Math.floor(pin/10);
            if(pin == 0) {pin = ""}
            $(".display").text(pin)
        }
        if(number == "enter") {
            if(pin == correctPin) {
                $(".display").css({"border-bottom":"2px solid rgba(57, 255, 7, 0.5)"})
            }else {
                $(".display").css({"border-bottom":"2px solid rgb(240,0,0)"})
            }
        }
    })

})

