<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Teachers - Sisu</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/css/CustomTable.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/v/bs4/dt-1.10.21/datatables.min.css">
</head>

<body id="page-top">
    <div id="wrapper">
        <%! String pageName="Teachers"; %>
        <%@include file="../components/NavBar.jsp"%>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <jsp:include page="../components/NavBar-Top.jsp"/>
<%--            </div>--%>
            <div class="container-fluid">
                <h3 class="text-dark mb-3">Teachers</h3>
                <div id="page-content">
                    <div class="card shadow mb-3">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Registered Teachers</p>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive table mt-2" id="dataTableDiv" role="grid" aria-describedby="dataTable_info">
                                <table class="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th colspan="2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr></tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>Code</strong></td>
                                            <td><strong>Name</strong></td>
                                            <td><strong>Mobile</strong></td>
                                            <td><strong>Email</strong></td>
                                            <td><strong>Action</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Teacher Settings</p>
                        </div>
                        <div class="card-body">
                            <form id="frm-teacher"><input class="form-control" type="hidden" id="id" name="id">
                                <div class="form-group"><label>Name</label>
                                    <div class="form-row">
                                        <div class="col-12 col-md-6"><input class="form-control" type="text" id="txt-firstName" placeholder="First Name" required="" name="firstName" pattern="[A-Za-z\.]{3,40}"></div>
                                        <div class="col-12 col-md-6"><input class="form-control" type="text" id="txt-lastName" placeholder="Last Name" name="lastName" required="" pattern="[A-Za-z\.]{3,40}"></div>
                                    </div>
                                </div>
                                <div class="form-group"><label>Location</label>
                                    <div class="form-row">
                                        <div class="col-12 col-md-6"><input class="form-control" type="text" id="txt-city" placeholder="City" required="" pattern="[A-Za-z\.]{4,40}" name="city"></div>
                                        <div class="col-12 col-md-6"><input class="form-control" type="text" id="txt-suburb" placeholder="Suburb" pattern="[A-Za-z\. ]{4,40}" name="suburb"></div>
                                    </div>
                                </div>
                                <div class="form-group"><label>Contact Info</label>
                                    <div class="form-row">
                                        <div class="col-12 col-md-6"><input class="form-control" type="text" id="txt-mobile" placeholder="Mobile Number" required="" name="primaryMobile"></div>
                                        <div class="col-12 col-md-6"><input class="form-control" type="text" id="txt-email" placeholder="Email" name="email"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-row">
                                        <div class="col-1 col-md-3 d-none d-md-block"></div>
                                        <div class="col-12 col-md-6"><button class="btn btn-primary btn-block" type="button" onclick="onFormSubmit()">Save</button><button class="btn btn-danger btn-block" type="button" onclick="deleteTeacher()">Delete</button><button class="btn btn-warning btn-block" id="btn-reset"
                                                type="reset" onclick="resetForm()">Reset Form</button></div>
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
    <script src="https://cdn.datatables.net/v/bs4/dt-1.10.21/datatables.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
    <script src="assets/js/TeacherTableHandler.js"></script>
    <script src="assets/js/theme.js"></script>
</body>

</html>