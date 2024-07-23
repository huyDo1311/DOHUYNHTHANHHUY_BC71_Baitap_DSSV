var arrStudents = [];

var data = localStorage.getItem('arrStudentsList') ? JSON.parse(localStorage.getItem('arrStudentsList')) : [];


data.map((stu) => {
    var student = new Student(
        stu.ma,
        stu.ten,
        stu.email,
        stu.pass,
        stu.diemtoan,
        stu.diemly,
        stu.diemhoa
    );
    arrStudents.push(student);
})
// console.log('arrStudents :>> ', arrStudents);
// arrStudents = data;

render()
function render() {
    var table = document.getElementById("tbodySinhVien");
    var content = '';
    arrStudents.map((stu) => {
        content += `
        <tr>
            <td>${stu.ma}</td>
            <td>${stu.ten}</td>
            <td>${stu.email}</td>
            <td>${stu.tinhdtb()}</td>
            <td>
                <button onclick="updateStudent('${stu.ma}')" class="btn btn-warning">Sửa</button>
                <button onclick="deleteStudent('${stu.ma}')" class="btn btn-danger">Xoá</button>
            </td>
        </tr>
        `;
    })
    table.innerHTML = content;
}

function createStudent() {
    var student = getInfo();

    arrStudents.push(student);
    
    // JSON.stringify(arrStudents);
    
    localStorage.setItem('arrStudentsList',JSON.stringify(arrStudents))
    render();
}

function deleteStudent(ma) {
    var index =  arrStudents.findIndex((stu) => {
        return stu.ma == ma;
    })
    if( index != -1){
        arrStudents.splice(index,1);
        localStorage.setItem('arrStudentsList',JSON.stringify(arrStudents))
        render();
    }
}

function updateStudent(ma) {
    var index = arrStudents.findIndex((stu) => {
        return stu.ma == ma;
    })
    var stu = arrStudents[index];
    document.getElementById("txtMaSV").value = stu.ma;
    document.getElementById("txtTenSV").value = stu.ten;
    document.getElementById("txtEmail").value = stu.email;
    document.getElementById("txtPass").value = stu.pass;
    document.getElementById("txtDiemToan").value = stu.diemtoan;
    document.getElementById("txtDiemLy").value = stu.diemly;
    document.getElementById("txtDiemHoa").value = stu.diemhoa;
    document.getElementById("txtMaSV").setAttribute("readonly",true);
}

function handleUpdateStudent() {
    var stu = getInfo();
    var index = arrStudents.findIndex((item) => {
        return item.ma == stu.ma;
    })

    if (index != -1) {
        arrStudents[index] = stu;
        localStorage.setItem('arrStudentsList',JSON.stringify(arrStudents))
        render();
    }
}

