function tinhTien() {
  var txtSoKyDien = document.getElementById("soKyDien").value * 1;
  var giaTien1 = 500;
  var giaTien2 = 650;
  var giaTien3 = 850;
  var giaTien4 = 1100;
  var giaTien5 = 1350;

  if (txtSoKyDien >= 0 && txtSoKyDien <= 50) {
    var giaTien1 = 500;
    var tinhTongTien = txtSoKyDien * giaTien1;
    document.getElementById("xuatKetQua").innerText =
      "Tổng số tiền là: " + tinhTongTien;
  } else if (txtSoKyDien >= 51 && txtSoKyDien <= 100) {
    var giaTien2 = 650;
    var tinhTongTien = 50 * giaTien1 + (txtSoKyDien - 50) * giaTien2;
    document.getElementById("xuatKetQua").innerText =
      "Tổng số tiền là: " + tinhTongTien;
  } else if (txtSoKyDien >= 101 && txtSoKyDien <= 200) {
    var giaTien3 = 850;
    var tinhTongTien =
      50 * giaTien1 + 50 * giaTien2 + (txtSoKyDien - 100) * giaTien3;
    document.getElementById("xuatKetQua").innerText =
      "Tổng số tiền là: " + tinhTongTien;
  } else if (txtSoKyDien >= 201 && txtSoKyDien <= 350) {
    var giaTien4 = 1100;
    var tinhTongTien =
      50 * giaTien1 +
      50 * giaTien2 +
      100 * giaTien3 +
      (txtSoKyDien - 200) * giaTien4;
    document.getElementById("xuatKetQua").innerText =
      "Tổng số tiền là: " + tinhTongTien;
  } else {
    var giaTien5 = 1350;
    var tinhTongTien =
      50 * 500 +
      50 * 650 +
      100 * 850 +
      150 * 1100 +
      (txtSoKyDien - 350) * giaTien5;
    document.getElementById("xuatKetQua").innerText =
      "Tổng số tiền là: " + tinhTongTien;
  }
}
