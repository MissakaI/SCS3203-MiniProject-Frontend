$(document).ready(()=>{
    $('#dataTable').DataTable({
        ajax:{
            url:'http://localhost:8080/api/v1/class',
            dataSrc:''
        },
        columns:[
            {data:'id'},
            {
                data:'teacher',
                render:(teacher)=>{
                    return teacher.firstName+" "+teacher.lastName
                }
            },
            {
                data:'subject.subjectName',
            },
            {
                data: 'subject.grade',
                render: (data) => {
                    return data == 12 ? 'A/L' : data;
                }
            },
            {data:'day'},
            {
                data:'time',
                render:(time)=>{
                    let timeArr=time.split(':');
                    return (timeArr[0]>=12 ? (timeArr[0]%12):timeArr[0]) + ':' +timeArr[1]+ " " + (timeArr[0]>=12?'PM':'AM');
                }
            },
            {data:'hall'},
            {
                data: 'id',
                render: (data) => {
                    return '<button class="btn btn-primary btn-block" type="button" onClick=loadClass(' + data + ')>Edit Classes</button>'
                }
            },
        ]
    });

    initTeachersTable();
    initSubjectTable();
});

function initTeachersTable(){
    const teacherTable = $('#dataTable-teacher').DataTable({
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
        ],
        select:'row',
    });

    $('#dataTable-teacher tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
            $('#teacher-id').val("").change();
        }
        else {
            teacherTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            // console.log(teacherTable.row(this).data());
            $('#teacher-id').val(teacherTable.row(this).data().id).change();
        }
    } );

    $('#teacher-id').change(function () { 
        let teacher=($(this).val());
        teacherTable.rows((idx,data,node)=>{
            // console.log(data);
            if (Number(data.id)===Number(teacher)){
                $(node).addClass('selected')
            }else
                $(node).removeClass('selected');
            return Number(data.id)===Number(teacher)?true:false;
        });
    });
    
}

function initSubjectTable(){
    const subjectTable=$('#dataTable-subject').DataTable({
        ajax: {
            url: 'http://localhost:8080/api/v1/subjects',
            dataSrc: ''
        },
        columns: [
            { data: 'subjectCode' },
            { data: 'subjectName' },
            {
                data: 'grade',
                render: (data) => {
                    return data == 12 ? 'A/L' : data;
                }
            },
        ]
    });

    $('#dataTable-subject tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
            $('#subject-id').val("").change();
        }
        else {
            subjectTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            console.log(subjectTable.row(this).data());
            $('#subject-id').val(subjectTable.row(this).data().subjectCode).change();
        }
    } );

    $('#subject-id').change(function () { 
        let subject=($(this).val());
        subjectTable.rows((idx,data,node)=>{
            // console.log(data);
            if (Number(data.subjectCode)===Number(subject)){
                $(node).addClass('selected')
            }else
                $(node).removeClass('selected');
            return Number(data.subjectCode)===Number(subject)?true:false;
        });
    });
}

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
    $('select').each((i,el)=>{
        let name=$(el).attr('name');
        $(el).val(data[name]);
    });
    $('input[type=time]').each((i,el)=>{
        let name=$(el).attr('name');
        let timeArr=String(data[name]).split(':');
        let time=timeArr[0]+':'+timeArr[1];
        // let time=timeArr[0]%13 + ':' +timeArr[1]+ " " + (timeArr[0]>=12?'PM':'AM');
        $(el).val(time);
    });
}

function onFormSubmit(){
    var $form = $("#frm-class");
    var data = getFormData($form);
    console.log(data);

    let httpMethod='POST'
    if (data.id===""){
        delete data['id'];
    }else{
        httpMethod='PUT'
        data.id=Number(data.id);
    }

    data.subject=Number(data.subject);
    data.teacher=Number(data.teacher);

    console.log(data);

    $.ajax('http://localhost:8080/api/v1/class'+((httpMethod==='PUT')?('/'+data.id):''), {
            method: httpMethod,
            contentType:'application/json',
            data:JSON.stringify(data)
        })
        .done((data)=>{
            $('#dataTable').DataTable().ajax.reload();
            alert("Class saved successfully");

            resetForm();
        })

        .fail((err)=>{
            // isSuccess=false;
            console.log(err);
            alert("Failed to do task. Retry.");
        })
}

function loadClass(id) {
    $.ajax('http://localhost:8080/api/v1/class/' + id)
        .done((data) => {
            console.log(JSON.stringify(data));
            
            var $form = $("#frm-class");

            setFormData($form,data);

            $('#teacher-id').val(data.teacher.id).change();
            $('#subject-id').val(data.subject.subjectCode).change();
        });
}

function deleteClass(){
    var $form = $("#frm-class");
    var data = getFormData($form);

    if (data.id!==""){
        $.ajax('http://localhost:8080/api/v1/class/'+data.id, {
            method: 'DELETE',
        })
        .done((data)=>{
            $('#dataTable').DataTable().ajax.reload();
            alert("Class deleted successfully");

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
    $('#frm-class').trigger('reset');
    $('#id').val("");
    $('#teacher-id').val("").change();
    $('#subject-id').val("").change();
    $('#class-id').val("").change();
}