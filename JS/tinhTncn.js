function tinhThue() {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  var txtThuNhapNam = document.getElementById("thuNhapNam").value * 1;
  var txtSoNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  var txtThuNhapChiuThue =
    txtThuNhapNam - 4000000 - txtSoNguoiPhuThuoc * 1600000;
  console.log(formatter.format(txtThuNhapChiuThue));
  var txtPhanTramThue;
  if (txtThuNhapChiuThue > 0 && txtThuNhapChiuThue <= 60000000) {
    txtPhanTramThue = 0.05;
  } else if (txtThuNhapChiuThue > 60000000 && txtThuNhapChiuThue <= 120000000) {
    txtPhanTramThue = 0.1;
  } else if (
    txtThuNhapChiuThue > 120000000 &&
    txtThuNhapChiuThue <= 210000000
  ) {
    txtPhanTramThue = 0.15;
  } else if (
    txtThuNhapChiuThue > 210000000 &&
    txtThuNhapChiuThue <= 384000000
  ) {
    txtPhanTramThue = 0.2;
  } else if (
    txtThuNhapChiuThue > 384000000 &&
    txtThuNhapChiuThue <= 624000000
  ) {
    txtPhanTramThue = 0.25;
  } else if (
    txtThuNhapChiuThue > 624000000 &&
    txtThuNhapChiuThue <= 960000000
  ) {
    txtPhanTramThue = 0.3;
  } else {
    txtPhanTramThue = 0.35;
  }
  var soThuePhaiTra = txtThuNhapChiuThue * txtPhanTramThue;
  console.log(formatter.format(soThuePhaiTra));
  document.getElementById("soThuePhaiDong").innerText =
    "Số thuế phải đóng là: " + formatter.format(soThuePhaiTra);
  var thuNhapSauThue = txtThuNhapNam - soThuePhaiTra;
  console.log(formatter.format(thuNhapSauThue));
  document.getElementById("thuNhapSauThue").innerText =
    "Thu nhập còn lại sau thuế là: " + formatter.format(thuNhapSauThue);
}
