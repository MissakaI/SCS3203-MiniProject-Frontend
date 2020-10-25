<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Course Details - Sisu</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/css/CustomTable.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/v/bs4/dt-1.10.21/datatables.min.css">
</head>

<body id="page-top">
    <div id="wrapper">
        <jsp:include page="../components/NavBar.jsp" />
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <jsp:include page="../components/NavBar-Top.jsp"/>
<%--            </div>--%>
            <div class="container-fluid">
                <h3 class="text-dark mb-3">Subjects</h3>
                <div id="page-content">
                    <div class="card shadow mb-3">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Available Courses</p>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive table mt-2" id="dataTableDiv" role="grid" aria-describedby="dataTable_info">
                                <table class="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Subject Name</th>
                                            <th style="max-width: 90px;">Grade</th>
                                            <th colspan="2">Action</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr></tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>Code</strong></td>
                                            <td><strong>Subject Name</strong></td>
                                            <td><strong>Grade</strong></td>
                                            <td colspan="2"><strong>Action</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Subject Settings</p>
                        </div>
                        <div class="card-body">
                            <form id="frm-subject">
                                <div class="form-group">
                                    <div class="form-row">
                                        <div class="col-12"><input class="form-control" type="text" id="txt-subject" placeholder="Subject" required="" name="subject" minlength="3" maxlength="40"></div>
                                    </div>
                                </div>
                                <div class="form-group"><label>Grades</label>
                                    <div class="form-row">
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-14" name="grades" value="12"><label class="form-check-label" for="formCheck-1">A/Ls</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-11" name="grades" value="11"><label class="form-check-label" for="formCheck-1">11</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-10" name="grades" value="10"><label class="form-check-label" for="formCheck-1">10</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-9" name="grades" value="9"><label class="form-check-label" for="formCheck-1">9</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-8" name="grades" value="8"><label class="form-check-label" for="formCheck-1">8</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-7" name="grades" value="7"><label class="form-check-label" for="formCheck-1">7</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6" name="grades" value="6"><label class="form-check-label" for="formCheck-1">6</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5" name="grades" value="5"><label class="form-check-label" for="formCheck-1">5</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4" name="grades" value="4"><label class="form-check-label" for="formCheck-1">4</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3" name="grades" value="3"><label class="form-check-label" for="formCheck-1">3</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2" name="grades" value="2"><label class="form-check-label" for="formCheck-1">2</label></div>
                                        </div>
                                        <div class="col-4 col-sm-3 col-md-2 col-xl-1">
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" name="grades" value="1"><label class="form-check-label" for="formCheck-1">1</label></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-row">
                                        <div class="col-1 col-md-3 d-none d-md-block"></div>
                                        <div class="col-12 col-md-6"><button class="btn btn-primary btn-block" id="btn-save" type="button" onclick="saveSubject()">Save Subject</button><button class="btn btn-danger btn-block" id="btn-delete" type="button" onclick="deleteSubject(true)">Delete Subject</button>
                                            <button
                                                class="btn btn-warning btn-block" id="btn-reset" type="reset" onclick="resetForm()">Reset Form</button>
                                        </div>
                                        <div class="col-1 col-md-3 d-none d-md-block"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="bg-white sticky-footer">
            <div class="container my-auto">
                <div class="text-center my-auto copyright"><span>Copyright © Sisu 2020</span></div>
            </div>
        </footer>
    </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/chart.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    <script src="assets/js/CourseTableHandler.js"></script>
    <script src="https://cdn.datatables.net/v/bs4/dt-1.10.21/datatables.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
    <script src="assets/js/theme.js"></script>
</body>

</html>