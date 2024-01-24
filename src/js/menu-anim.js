$(document).ready(function () {
    //go through all the .menu-list-item and give them a unique id
    $(".menu-list-item").each(function (index) {
        $(this).attr("id", "menu-link-" + index);
    });

    $(".menu-item-text:not(.no-anim)").each(function () {
        $(this).attr("id", "menu-item-text-" + $(this).index());

        var text = $(this).text();
        var letters = text.split("");
        var newText = "";

        for (var i = 0; i < letters.length; i++) {
            // Add odd or even class based on the index
            var divClass = i % 2 === 0 ? "odd" : "even";
            newText +=
                '<div style="position: relative; transform: rotate(0deg); top: 0rem" class="' +
                divClass +
                '">' +
                letters[i] +
                "</div>";
        }

        $(this).html(newText);

        // Apply flexbox layout to .menu-item-text
        $(this).css("display", "flex");
        $(this).find("div").css("flex", "1"); // Equal flex distribution

        // ease transition
        $(this)
            .find("div")
            .css("transition", "transform 0.3s ease, top 0.25s ease");

        // stop motion transition
        // $(this).find("div").css("transition", "transform 0.3s step-start, top 0.3s step-end");
    });

    // Create CSS keyframes for the bounce animation
    $("<style>")
        .text(
            "@keyframes bounce {" +
            "0%, 100% { top: 0rem; transform: rotate(-15deg); }" +
            "50% { top: -0.5rem; transform: rotate(-15deg); }" +
            "}"
        )
        .appendTo("head");

    //check if any of the .menu-list-item is hovered
    $(".menu-list-item").hover(
        function () {
            //print the id which is hovered
            console.log($(this).attr("id") + " hover on");

            //find the .menu-item-text inside the respective .menu-list-item
            var menuItemText = $(this).find(".menu-item-text");

            // Create a flag to track if 'O' letter is found
            var oLetterFound = false;

            //go through all the div elements inside the .menu-item-text, and if the div has the class odd then move it 1rem to the top, and if it has the class even then move it 1rem to the bottom
            menuItemText.find("div").each(function (index) {
                // Check if the div contains the letter 'O'
                if ($(this).text().includes("o")) {
                    oLetterFound = true;

                    // Animate the 'O' letter div with the bounce animation
                    $(this).css("animation", "bounce 0.6s infinite");
                } else {
                    // Rotate all of them by -15 degrees
                    $(this).css("transform", "rotate(-15deg)");
                    if ($(this).hasClass("odd")) {
                        $(this).css("top", "-0.75dvh");
                    } else {
                        $(this).css("top", "0.75dvh");
                    }
                }
            });

            // If 'O' letter is not found, log it
            if (!oLetterFound) {
                console.log("Letter 'O' not found.");
            }
        },
        function () {
            //print the id which is hovered
            console.log($(this).attr("id") + " hover off");

            //find the .menu-item-text inside the respective .menu-list-item
            var menuItemText = $(this).find(".menu-item-text");

            //go through all the div elements inside the .menu-item-text, and if the div has the class odd then move it 0rem to the top, and if it has the class even then move it 0rem to the bottom
            menuItemText.find("div").each(function (index) {
                // Remove the bounce animation
                $(this).css("animation", "none");

                //rotate all of them back to 0 degrees
                $(this).css("transform", "rotate(0deg)");
                $(this).css("top", "0dvh");
            });
        }
    );
});