if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

function  performRestCall(httpOperation,httpUrl,formData){
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