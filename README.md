# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
  <!-- dangky u -->
  http://localhost:5001/docGia//register
  {
  "HoLot": "hao", "Ten": "tran", "Password": "hhhhhhhh", "DienThoai": "0945477411"
  }

<!-- dangnhapu -->

http://localhost:5001/docGia/login
{
"Password": "hhhhhhhh", "DienThoai": "0945477411"
}

<!-- up u -->

http://localhost:5001/docGia/update?id=662673b3cf84e39f83cb2114
{
"HoLot": "hao", "Ten": "tran", "DiaChi": "hhhhhhhh", "NgaySinh": "2002/04/02", "Phai": 1
}

<!-- getone -->

http://localhost:5001/docGia/getOne?id=662673b3cf84e39f83cb2114

<!-- them loai -->

http://localhost:5001/loaiSach/create
{
"TenLoai": "hao"
}

<!-- all loai sach -->

http://localhost:5001/loaiSach/all

<!-- lay 1 loai sach -->

http://localhost:5001/loaiSach/info?id=662678e4d237976be5ead90f

<!-- cap nhat loai -->

http://localhost:5001/loaiSach/update?id=662678e4d237976be5ead90f

<!-- nhan vien -->

http://localhost:5001/nhanVien/create
{
"HoTenNV": "hao 1",
"Password": "hhhhhhhh",
"ChucVu": "Nhân viên",
"DiaChi": "can tho",
"DienThoai": "0945477411"
}

<!-- login nv -->

http://localhost:5001/nhanVien/login
{
"Password": "hhhhhhhh",
"DienThoai": "0945477411"
}

<!-- get i4 nv -->

http://localhost:5001/nhanVien/info?id=66267bd0bdeb744afc32ddbf

<!-- nxb -->

http://localhost:5001/nhaXuatBan/create
{
"TenNXB": "hhhhhhhh",
"DiaChi": "0945477411"
}

<!-- all nxb -->

http://localhost:5001/nhaXuatBan/all

<!-- info nxb -->

http://localhost:5001/nhaXuatBan/info?id=66267cf1bdeb744afc32ddc3

<!-- up nxb -->

http://localhost:5001/nhaXuatBan/update?id=66267cf1bdeb744afc32ddc3
{
"TenNXB": "hhhhhhhh",
"DiaChi": "09454774112"
}

<!-- sach -->

http://localhost:5001/sach/create
{
"TenSach": "chu be dan",
"DonGia": 10000,
"SoQuyen": 10,
"NamXuatBan": "2002",
"MaNXB": "66267cf1bdeb744afc32ddc3",
"MaLoai": "662678e4d237976be5ead90f" ,
"TacGia": "hao producer",
"HinhAnh": "haocute"
}

<!-- ay sp tru id -->

http://localhost:5001/sach/random?id=66267f0f7a467e4146001fee

<!-- info -->

http://localhost:5001/sach/info?id=66267f0f7a467e4146001fee

<!-- up sach -->

http://localhost:5001/sach/update?id=66267f0f7a467e4146001fee
{
"TenSach": "chu be dan 12",
"DonGia": 10000,
"SoQuyen": 10,
"NamXuatBan": "2001",
"MaNXB": "66267cf1bdeb744afc32ddc3",
"MaLoai": "662678e4d237976be5ead90f" ,
"TacGia": "hao producer",
"HinhAnh": "haocute"
}

<!-- tao phieu -->

http://localhost:5001/theoDoiMuonSach/create
{
"MaDocGia": "662673b3cf84e39f83cb2114",
"MaSach": "66267f0f7a467e4146001fee",
"NgayMuon": "2024/04/23",
"NgayTra": "2024/04/28"
}

<!-- all -->

http://localhost:5001/theoDoiMuonSach/all

<!-- dem sl -->

http://localhost:5001/theoDoiMuonSach/count

<!-- lay 1 phieu -->

http://localhost:5001/theoDoiMuonSach/info?MaDocGia=662673b3cf84e39f83cb2114&MaSach=66267f0f7a467e4146001fee&NgayMuon=2024/04/23

<!-- up pm -->

http://localhost:5001/theoDoiMuonSach/update?MaDocGia=662673b3cf84e39f83cb2114&MaSach=66267f0f7a467e4146001fee&NgayMuon=2024/04/23
{

"TrangThai": 2
}
