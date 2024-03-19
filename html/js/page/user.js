if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function () {
    $(document).ready(function () {

        $("#create-employee").click(function (e) {

            var formData = {
                userId: "",
                userName: $("#user_name").val(),
                userCode: $("#user_code").val(),
                email: $("#user_email").val(),
                mobileNumber: $("#user_phone").val(),
                joiningDate: $("#user_joining_date").val(),
                address: $("#user_address").val(),
                birthDate: $("#user_birth_date").val(),
                gender: $('input[name="gender"]:checked').val(),
                branchId: "25421377-5918-4cec-b74b-27279420831a",
                organizationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                departmentId: "be678590-b711-4d27-a7c3-1d7ef36a02b2"

            };
            console.log(generate, appUrl + generateUser, formData);
            var createEmployee = performRestCallForGenerateReform(generate, appUrl + generateUser, formData);
            console.log(createEmployee);
        });


    $('#user_list_id').DataTable({
        data: usersList,
        columns: [
            { data: 'userCode', title: 'ID' },
            { data: 'userName', title: 'Name' },
            { data: 'email', title: 'Email' },
            { data: 'mobileNumber', title: 'Phone' },
            { data: 'joiningDate', title: 'Joining Date' },
            { data: 'branchName', title: 'Branch' },
            { data: 'departmentName', title: 'Department' },
            {data: null,title: 'Actions',
                render: function(data, type, row) {
                    return '<button onclick="editUser(' + data.userId + ')" class="btn btn-outline-secondary editUser" data-bs-toggle="modal" data-bs-target="#update_emp" id="edit_user"><i class="icofont-edit text-success"></i></button>';
                }// data-bs-toggle="modal" data-bs-target="#delete_emp"
            }

            // Add more columns as needed
        ],
        paging: true,
        searching: true,
        ordering: true ,
        language: { emptyTable: 'User Records Not found'},
        // Add more options as needed
    });
});
});

function getBranches() {
    branches_global = performRestCallForRead(read, readBranches);
}

function getDepartments() {
    var departments = performRestCallForRead(read, readDepartments);
    departments =  JSON.parse(departments);
}

function getUsers(){
    usersList = performRestCallForRead(read, readUsers);
    usersList = JSON.parse(usersList);
}

$("#add_user").click(function (e) {
    branches_global = JSON.parse(branches_global);
    console.log(branches_global);
    var selectBranches = $("<select class='form-select' aria-label='Default select Branch' id='selected_branch' name='user_branch' onchange='getDepartmentByBranch()' />");
    var option = $("<option />");
    option.html("Select Branch");
    option.val("");
    selectBranches.append(option);
    for (var i = 0; i < branches_global.length; i++) {
        var option = $("<option />");
        option.html(branches_global[i].branchName);
        option.val(branches_global[i].branchId);
        selectBranches.append(option);
    }
    var dvContainer = $("#select_branch_id");
    dvContainer.append(selectBranches);
});

function getDepartmentByBranch() {
    var departments = performRestCallForReadWithData(read, readDepartmentByBranchId, $('#selected_branch option:selected').val());
    departments = JSON.parse(departments);
    console.log(departments);
    var dvContainer = $("#select_department_id");
    $("#selected_department").remove();
    var selectDepartment = $("<select class='form-select' aria-label='Default select Branch' id='selected_department' name='user_department' />");
    var option = $("<option />");
    option.html("Select Department");
    option.val("");
    selectDepartment.append(option);
    for (var i = 0; i < departments.length; i++) {
        var option = $("<option />");
        option.html(departments[i].departmentName);
        option.val(departments[i].departmentId);
        selectDepartment.append(option);
    }
    dvContainer.append(selectDepartment);
}
$("#delete-user").click(function (e) {
    e.preventDefault();
    alert(e.userId);
});

function editUser(userId){
//alert(userId);
}
function deleteUserById(userId){
    alert(userId);
}
