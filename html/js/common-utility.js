if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

$(function() {
    $(document).ready(function() {

        getUsers();
    //    getBranches();
     //   getOrgnizations();

    });
});

function  performRestCallForGenerateReform(httpOperation,httpUrl,formData){
var returnResponse ="";
    $.ajax({
        type: httpOperation,
        url: httpUrl,
        data: JSON.stringify(formData),
        crossDomain: true,
        encode: true,
        async:false,
        contentType: "application/json",
        headers: {'Access-Control-Allow-Origin': '*', },
        success: function (response) {
         returnResponse = JSON.stringify(response);
        },
        error: function (xhr, status) {
            returnResponse =  JSON.stringify('{error: failed}');
        }
    });

    return returnResponse;
}

function  performRestCallForReadWithData(httpOperation,httpUrl,formData){
    var returnResponse ="";
        $.ajax({
            type: httpOperation,
            url: appUrl + httpUrl + formData,
            crossDomain: true,
            encode: true,
            async:false,
            contentType: "application/json",
            headers: {'Access-Control-Allow-Origin': '*', },
            success: function (response) {
             returnResponse = JSON.stringify(response);
            },
            error: function (xhr, status) {
                returnResponse =  JSON.stringify('{error: failed}');
            }
        });

        return returnResponse;
}


function  performRestCallForRead(httpOperation,httpUrl){
    var returnResponse ="";
        $.ajax({
            type: httpOperation,
            url: appUrl + httpUrl,
            crossDomain: true,
            encode: true,
            async:false,
            contentType: "application/json",
            headers: {'Access-Control-Allow-Origin': '*', },
            success: function (response) {
             returnResponse = JSON.stringify(response);
            },
            error: function (xhr, status) {
                returnResponse =  JSON.stringify('{error: failed}');
            }
        });

        return returnResponse;
}