function Student(ma,ten,email,pass,diemtoan,diemly,diemhoa) {
    this.ma = ma;
    this.ten = ten;
    this.email = email;
    this.pass = pass;
    this.diemtoan = diemtoan;
    this.diemly = diemly;
    this.diemhoa = diemhoa;
    this.tinhdtb = function() {
        return ((this.diemtoan + this.diemly + this.diemhoa) / 3).toFixed(1);
    }
}