$(document).ready(()=>{
    $('#dataTable').DataTable({
        ajax:{
            url:'http://localhost:8080/api/v1/student',
            dataSrc:''
        },
        columns:[
            {data:'id'},
            {
                data:null,
                render:(data)=>{
                    return data.firstName+" "+data.lastName
                }
            }
        ]
    });
});