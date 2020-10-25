$(document).ready(()=>{
    $('#dataTable').DataTable({
        ajax:{
            url:'http://localhost:8080/api/v1/teacher',
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
            {data:'primaryMobile'},
            {data:'email'},
            {
                data: 'id',
                render: (data) => {
                    return '<button class="btn btn-primary btn-block" type="button" onClick=loadTeacher(' + data + ')>Edit Teacher</button>'
                }
            },
        ]
    });

    resetForm();
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
    var $form = $("#frm-teacher");
    var data = getFormData($form);
    console.log(data);

    let httpMethod='POST'
    if (data.id===""){
        delete data['id'];
    }else{
        httpMethod='PUT'
    }

    console.log(data);

    $.ajax('http://localhost:8080/api/v1/teacher'+((httpMethod==='PUT')?('/'+data.id):''), {
            method: httpMethod,
            contentType:'application/json',
            data:JSON.stringify(data)
        })
        .done((data)=>{
            $('#dataTable').DataTable().ajax.reload();
            alert("Teacher saved successfully");

            $('frm-subject').trigger('reset');
        })

        .fail((err)=>{
            // isSuccess=false;
            console.log(err);
            alert("Failed to do task. Retry.");
        })
}

function loadTeacher(id) {
    $.ajax('http://localhost:8080/api/v1/teacher/' + id)
        .done((data) => {
            console.log(JSON.stringify(data));
            
            var $form = $("#frm-teacher");
            
            setFormData($form,data);
        });
}

function deleteTeacher(){
    var $form = $("#frm-teacher");
    var data = getFormData($form);

    if (data.id!==""){
        $.ajax('http://localhost:8080/api/v1/teacher/'+data.id, {
            method: 'DELETE',
        })
        .done((data)=>{
            $('#dataTable').DataTable().ajax.reload();
            alert("Teacher deleted successfully");

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
    $('frm-teacher').trigger('reset');
    $('#id').val("");
}