$(document).ready(() => {
    $('#dataTable').DataTable({
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
            {
                data: 'subjectName',
                render: (data) => {
                    return '<button class="btn btn-primary btn-block" type="button" onClick=loadSubject(\'' + data + '\')>Edit Subject</button>'
                }
            },
            {
                data: 'subjectCode',
                render: (data) => {
                    return '<button class="btn btn-success btn-block" type="button" onClick=loadCourse(\'' + data + '\')>Enroll Course</button>'
                }
            }
        ]
    });

    resetForm();
    bindGradeCheckActions();
});

// used to edit the data
let currentSubject;

function loadSubject(subjectName) {
    $.ajax('http://localhost:8080/api/v1/subjects/name/' + subjectName)
        .done((data) => {
            console.log(JSON.stringify(data));
            currentSubject = data;
            $('#txt-subject').val(data[0].subjectName);

            let gradeCheckBoxes = $('[id^=form-check-]');

            data.forEach(element => {
                $('#formCheck-' + element.grade)[0].checked = true;
            });



            $('#txt-subject')[0].scrollIntoView({
                behaviour: 'smooth'
            });
        });
}

function loadCourse(subjectCode) {
    $.ajax('http://localhost:8080/api/v1/subjects/name/' + subjectCode)
        .done((data) => {
            console.log(JSON.stringify(data));

            //TODO: Open Course Enrollment Page
        })
}

const activate = [];
const deactivate = [];

function bindGradeCheckActions() {
    console.log("BindGradeActions");

    const gradeCheckBoxes = $("[id^='formCheck-']");

    // console.log(gradeCheckBoxes);   

    gradeCheckBoxes.each((i, el) => {
        // console.log('Event added to', el);
        $(el).change(function () {
            const grade = Number($(el).val());
            let currentGrades = currentSubject.map(subject => subject.grade);
            // console.log(currentGrades.includes(Number(grade)));

            //if the changed value exists in database
            if (currentGrades.includes(Number(grade))) {
                // console.log(grade);

                // if checkbox is unchecked
                if (!$(el).prop('checked')) {
                    console.log("Deactivated grade:", grade);

                    // if deactivate doesn't include the unchecked grade
                    if (!deactivate.includes(grade))
                        deactivate.push(grade);

                } else {
                    console.log("Reactivated grade:", grade);

                    // if deactivate doesn't include the unchecked grade
                    if (deactivate.includes(grade)) {
                        const index = deactivate.indexOf(grade);
                        if (index > -1) {
                            deactivate.splice(index, 1);
                        }
                    }
                }


            } else {

                // if checkbox is checked
                if ($(el).prop('checked')) {
                    console.log("Activated grade:", grade);

                    // if deactivate doesn't include the unchecked grade
                    if (!activate.includes(grade))
                        activate.push(grade);

                } else {
                    console.log("Deactivated grade:", grade);

                    if (activate.includes(grade)) {
                        const index = activate.indexOf(grade);
                        if (index > -1) {
                            activate.splice(index, 1);
                        }
                    }
                }

            }
            console.log('Deactivate', deactivate);
            console.log('Activate', activate);
        });
    })
}

function saveSubject() {
    //deleteDeactivatedSubjects
    const subName=$('#txt-subject').val();

    let isSuccess=true;
    activate.forEach(grade => {
        $.ajax('http://localhost:8080/api/v1/subjects/', {
            method: 'POST',
            contentType:'application/json',
            data:JSON.stringify({
                subjectName: subName,
                grade: grade,
            })
        })
        .done((data)=>{
            $('#dataTable').DataTable().ajax.reload();
        })
        .fail((err)=>{
            isSuccess=false;
            console.log(err);
            alert("Failed to do task. Retry.");
        })
    });

    if (isSuccess){
        alert('Subject saved successfully');
    }

    if (deactivate.length> 0)
        deleteSubject(false);

    resetForm();
    
}

function resetForm() {
    $('frm-subject').trigger('reset');
    currentSubject = [];
    activate.length = 0;
    deactivate.length = 0;
}

function deleteSubject(deleteCompleteSubject) {
    console.log('Delete');

    let deleteCodes = currentSubject.map(subject => subject.subjectCode);
    if (!deleteCompleteSubject) {
        deleteCodes = currentSubject.flatMap((subject) => {
            if (deactivate.includes(subject.grade))
                return [subject.subjectCode];
            return [];
        })
    }

    console.log(deleteCodes);

    console.log('http://localhost:8080/api/v1/subjects/all/' + deleteCodes);
    $.ajax('http://localhost:8080/api/v1/subjects/all/' + deleteCodes, {
        method: 'DELETE'
    })
        .done((data) => {
            // console.log(JSON.stringify(data));

            resetForm();
            $('#dataTable').DataTable().ajax.reload();

            alert("Subject deleted successfully");
        })
        .fail((err) => {
            console.log(err);

            alert("Failed to do task. Retry.");
        })
}