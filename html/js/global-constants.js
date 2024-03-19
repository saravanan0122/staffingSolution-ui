// HTTP Oeration Start
var generate = "POST";
var reform = "PUT";
var remove = "DELETE";
var read = "GET";
var appUrl = "http://localhost:9898";
//var appUrl ="http://juskolrz.com";
// HTTP Operation End
//Server url start
var generateUser ="/user/create";
var reformUser ="/user/update";
var removeeUser ="/user/delete/";
var readUserById="/user/getById/";
var readUsers ="/user/getUsers";

var readDepartments = "/department/getDepartments";
var readBranches = "/branch/getBranches";
var readDepartmentByBranchId = "/department/getDepartmentByBranchId/";
var readOrganizations = "/organization/getOrganizations";
var readZones = "/zone/getZones"


//Server url end

// Global constants
var branches_global ="";
var usersList = "";
var organizationList = "";
var zoneList = "";
var areaList = "";
var branchList = "";
var departmentList = "";