$(document).ready(function () {
    var lastEq = $(".d-stamp-stickers .d-stamp-sticker").length - 1;
    var stickerEq = -1;
    var stickerLifetime = 5000; // Adjust the lifetime duration in milliseconds (e.g., 5000ms = 5 seconds)

    $("#footer").click(function (e) {
        // Check if the clicked element or any of its ancestors have data-no-stamp="true"
        if ($(e.target).closest('[data-no-stamp="true"]').length) {
            return; // Do nothing if the attribute is present
        }

        if (stickerEq == lastEq) {
            stickerEq = 0;
        } else {
            stickerEq++;
        }

        var tricksSticker = $(".d-stamp-stickers .d-stamp-sticker")
            .eq(stickerEq)
            .clone()
            .appendTo(".overflow");
        var marginLeft = e.pageX - tricksSticker.width() / 2;
        var marginTop = e.pageY - tricksSticker.height() / 2;
        tricksSticker.css({
            "margin-left": marginLeft,
            "margin-top": marginTop,
            transform: "scale(1, 1)",
        });

        // Wait before playing animation
        setTimeout(() => {
            tricksSticker.addClass("sticker-hide");

            // Remove hidden stickers after a certain time (stickerLifetime)
            setTimeout(() => {
                tricksSticker.remove();
            }, stickerLifetime);
        }, 1000);
    });

    $("[data-no-select]").on("selectstart dragstart", function (e) {
        e.preventDefault();
    });
});