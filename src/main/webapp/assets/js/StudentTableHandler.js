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
            },
            {data:'city'},
            {data:'primaryMobile'},
            {data:'email'},
            {
                data: 'id',
                render: (data) => {
                    return '<button class="btn btn-primary btn-block" type="button" onClick=loadStudent(' + data + ')>Edit Student</button>'
                }
            },
        ]
    });
});

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function setFormData($form,data){
    $('input[type=text]').each((i,el)=>{
        let name=$(el).attr('name');
        $(el).val(data[name]);
    });
    $('input[type=hidden]').each((i,el)=>{
        let name=$(el).attr('name');
        $(el).val(data[name]);
    });
}

function onFormSubmit(){
    var $form = $("#frm-student");
    var data = getFormData($form);
    console.log(data);

    let httpMethod='POST'
    if (data.id===""){
        delete data['id'];
    }else{
        httpMethod='PUT'
    }

    console.log(data);

    $.ajax('http://localhost:8080/api/v1/student'+((httpMethod==='PUT')?('/'+data.id):''), {
            method: httpMethod,
            contentType:'application/json',
            data:JSON.stringify(data)
        })
        .done((data)=>{
            $('#dataTable').DataTable().ajax.reload();
            alert("Student saved successfully");

            resetForm();
        })

        .fail((err)=>{
            // isSuccess=false;
            console.log(err);
            alert("Failed to do task. Retry.");
        })
}

function loadStudent(id) {
    $.ajax('http://localhost:8080/api/v1/student/' + id)
        .done((data) => {
            console.log(JSON.stringify(data));
            
            var $form = $("#frm-student");
            
            setFormData($form,data);
        });
}

function deleteStudent(){
    var $form = $("#frm-student");
    var data = getFormData($form);

    if (data.id!==""){
        $.ajax('http://localhost:8080/api/v1/student/'+data.id, {
            method: 'DELETE',
        })
        .done((data)=>{
            $('#dataTable').DataTable().ajax.reload();
            alert("Student deleted successfully");

            resetForm();
        })

        .fail((err)=>{
            // isSuccess=false;
            console.log(err);
            alert("Failed to do task. Retry.");
        })
    }
}

function resetForm() {
    $('#frm-student').trigger('reset');
    $('#id').val("");
}