function getInfo() {
    var txtMaSV = document.getElementById("txtMaSV").value;
    var txtTenSV = document.getElementById("txtTenSV").value;
    var txtEmail = document.getElementById("txtEmail").value;
    var txtPass = document.getElementById("txtPass").value;
    var txtDiemToan = document.getElementById("txtDiemToan").value * 1;
    var txtDiemLy = document.getElementById("txtDiemLy").value * 1;
    var txtDiemHoa = document.getElementById("txtDiemHoa").value * 1;

    var student = new Student(txtMaSV,txtTenSV,txtEmail,txtPass,txtDiemToan,txtDiemLy,txtDiemHoa);

    return student;
}