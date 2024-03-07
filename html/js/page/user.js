if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    $(document).ready(function() { 
   
        $("#create-employee").click(function (e) {
            alert($("#user_address").val());
            e.preventDefault();
            var formData = {
              userId  :"",
              userName :$("#user_name").val(),
              userCode :$("#user_code").val(),
              email :$("#user_email").val(),
              mobileNumber :$("#user_phone").val(),
              joiningDate :$("#user_joining_date").val(),
              address :$("#user_address").val(),
              birthDate :$("#user_birth_date").val(),
              gender :$('input[name="gender"]:checked').val(),
              branchId :"25421377-5918-4cec-b74b-27279420831a",
              organizationId  :"3fa85f64-5717-4562-b3fc-2c963f66afa6",
              departmentId :"be678590-b711-4d27-a7c3-1d7ef36a02b2"

            };
            console.log(generate,appUrl+generateUser,formData);
            var createEmployee = performRestCall(generate,appUrl+generateUser,formData); 
            console.log(createEmployee);     


    });
});

});
