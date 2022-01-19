function checkDoanhNghiep() {
  document.getElementById("soKetNoiThem").style.display = "block";
}

function checkNhaDan() {
  document.getElementById("soKetNoiThem").style.display = "none";
}

function xuatKetQua() {
  var txtKenhCaoCap = document.getElementById("soKenhCaoCap").value;
  var txtNhaDan = document.getElementById("nhaDan").value;
  var txtDoanhNghiep = document.getElementById("doanhNghiep").value;
  var txtKetNoiThem = document.getElementById("soKetNoiThem").value * 1;
  console.log(txtKetNoiThem);
  var tinhCuocCap;
  switch (txtNhaDan) {
    case "ND":
      tinhCuocCap = 4.5 + 20.5 + txtKenhCaoCap * 7.5;
    case "DN":
      if (txtKetNoiThem > 10) {
        tinhCuocCap = 15 + 75 + 5 * (txtKetNoiThem - 10) + 50 * txtKenhCaoCap;
      } else {
        tinhCuocCap = 15 + 75 + 50 * txtKenhCaoCap;
      }
  }
  // if (txtNhaDan === "ND") {
  //   tinhCuocCap = 4.5 + 20.5 + txtKenhCaoCap * 7.5;
  // } else {
  //   var txtKetNoiThem = document.getElementById("soKetNoiThem").value * 1;
  //   console.log(txtKetNoiThem);
  //   if (txtKetNoiThem > 10) {
  //     tinhCuocCap = 15 + 75 + 5 * (txtKetNoiThem - 10) + 50 * txtKenhCaoCap;
  //   } else {
  //     tinhCuocCap = 15 + 75 + 50 * txtKenhCaoCap;
  //   }
  // }
  document.getElementById("ketQua").innerHTML =
    "Số tiền cước của quý khách là: " + tinhCuocCap + "$";
}
