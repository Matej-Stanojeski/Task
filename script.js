$(document).ready(function () {
    var i = 0;
    $("#HomeBtn").on("click", function () {
        if ($("#Home").is(':hidden')) {
            $("#Quiz").hide();
            $("#Contact").hide();
            $("#Home").show();
        }
        i = 0;
    });
    $("#QuizBtn").on("click", function () {
        if ($("#Quiz").is(':hidden')) {
            $("#Home").hide();
            $("#Contact").hide();
            $("#Quiz").show();
        }
        setInterval(function () {
            $("#stopWatch").html(i + " s");
            i++;
        }, 1000);
    });
    $("#ContactBtn").on("click", function () {
        if ($("#Contact").is(':hidden')) {
            $("#Quiz").hide();
            $("#Home").hide();
            $("#Contact").show();
        }
        i = 0;
    });

    $("#SubmitBtn").on("click", function () {

        var surname = $("#Surname").val();
        var name = $("#Name").val();
        var studentId = $("#StudentId").val();
        var email = $("#e-mail").val();
        var note = $("#Note").val();
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var counter = 0;

        if (surname.length < 10) {
            $("#Surname").focus();
            $("#Surname").attr("placeholder", "This field is required and have a minimum of 10 characters");
            $("#Surname").css("border", "red solid 2px");
        } else {
            $("#Surname").attr("placeholder", " ");
            $("#Surname").css("border", "green solid 2px");
            counter++;
        }
        if (name == null || name == "" || name == " ") {
            $("#Name").focus();
            $("#Name").attr("placeholder", "This field is required");
            $("#Name").css("border", "red solid 2px");
        }
        else {
            $("#Name").attr("placeholder", " ");
            $("#Name").css("border", "green solid 2px");
            counter++;
        }
        if (studentId.length == 0) {
            $("#StudentId").attr("placeholder", "This field is required");
            $("#StudentId").css("border", "red solid 2px");
        }
        else {
            $("#StudentId").attr("placeholder", " ");
            $("#StudentId").css("border", "green solid 2px");
            counter++;
        }
        if (email == null || email == "" || email == " " || !pattern.test(email)) {
            $("#e-mail").attr("placeholder", "This field is required and it needs to be in a valid email pattern");
            $("#e-mail").css("border", "red solid 2px");
        }
        else {
            $("#e-mail").attr("placeholder", " ");
            $("#e-mail").css("border", "green solid 2px");
            counter++;
        }

        if (counter >= 4) {
            createJson(surname, name, studentId, email, note);
            //$("#Form").submit();
        }
    });

    function createJson(surname, name, id, email, note) {
        jsonObj = [];
        item = {}
        var filename = "json";

        if (note != null || note != "") {
            item["Note"] = note;
        }
        item["Email"] = email;
        item["StudentId"] = id;

        item["Name"] = name;
        item["Surname"] = surname;

        jsonObj.push(item);

        saveText(jsonObj, filename)
    }

    function saveText(text, filename) {
        var a = document.createElement('a');
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        a.setAttribute('download', filename);
        a.click()
    }
});