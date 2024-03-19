if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function () {
    $(document).ready(function () {
        getZones();
        $('#zone_list_id').DataTable({
            data: zoneList,
            columns: [
                { data: 'zoneCode', title: 'ID' },
                { data: 'zoneName', title: 'Name' },
                { data: 'email', title: 'Email' },
                { data: 'phoneNumber', title: 'Phone' },
                { data: 'zoneManagerCode', title: 'Manager Code' },
                { data: 'zoneManager', title: 'Manager' },
                { data: 'address', title: 'Address' },
                // {data: null,title: 'Actions',
                //     render: function(data, type, row) {
                //         return '<button onclick="editOrganization(' + data.userId + ')" class="btn btn-outline-secondary editOrganization" data-bs-toggle="modal" data-bs-target="#update_org" id="edit_org"><i class="icofont-edit text-success"></i></button>';
                // }

            ],
            paging: true,
            searching:true,
            ordering: true ,
            language: { emptyTable: 'Records Not found'},
            // Add more options as needed
        });
    });
});

function getZones(){
    zoneList = performRestCallForRead(read, readZones);
    zoneList = JSON.parse(zoneList);
    console.log(zoneList);
}
