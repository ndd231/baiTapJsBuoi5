function xuatKetQua() {
  var txtDiemChuan = document.getElementById("diemChuan").value * 1;
  console.log(txtDiemChuan);
  var txtDiemToan = document.getElementById("diemToan").value * 1;
  console.log(txtDiemToan);
  var txtDiemHoa = document.getElementById("diemHoa").value * 1;
  console.log(txtDiemHoa);
  var txtDiemAnh = document.getElementById("diemAnh").value * 1;
  console.log(txtDiemAnh);
  var txtKhuVucUuTien = document.getElementById("khuVucUuTien").value;
  console.log(txtKhuVucUuTien);
  var txtDoiTuongDuThi = document.getElementById("doiTuongDuThi").value;
  console.log(txtDoiTuongDuThi);
  switch (txtKhuVucUuTien) {
    case "A":
      var khuVucUuTienEl = 2;
      console.log(khuVucUuTienEl);
      break;
    case "B":
      var khuVucUuTienEl = 1;
      console.log(khuVucUuTienEl);
      break;
    case "C":
      var khuVucUuTienEl = 0.5;
      console.log(khuVucUuTienEl);
    case "X":
      var khuVucUuTienEl = 0;
      break;
    default:
      var khuVucUuTienEl = "";
  }
  switch (txtDoiTuongDuThi) {
    case "0":
      var doiTuongDuThiEl = 0;
      console.log(doiTuongDuThiEl);
    case "1":
      var doiTuongDuThiEl = 2.5;
      console.log(doiTuongDuThiEl);
      break;
    case "2":
      var doiTuongDuThiEl = 1.5;
      console.log(doiTuongDuThiEl);
      break;
    case "3":
      var doiTuongDuThiEl = 1;
      console.log(doiTuongDuThiEl);
    default:
      var doiTuongDuThiEl = "";
  }
  var txtTongDiem =
    txtDiemHoa + txtDiemToan + txtDiemAnh + khuVucUuTienEl + doiTuongDuThiEl;
  console.log(txtTongDiem);
  document.getElementById("xuatTongDiem").innerText =
    "Tổng điểm của bạn là: " + txtTongDiem;
  if (
    txtDiemToan === 0 ||
    txtDiemHoa === 0 ||
    txtDiemAnh === 0 ||
    txtTongDiem < txtDiemChuan
  ) {
    document.getElementById("xuatKetQuaThi").innerText = "Bạn đã rớt :(";
  } else {
    document.getElementById("xuatKetQuaThi").innerText = "Bạn đã đậu :))";
  }
}
