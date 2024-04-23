const mongoose = require("mongoose");

const NhanVienSchema = new mongoose.Schema(
  {
    HoTenNV: { type: String, required: true },
    Password: { type: String, required: true },
    ChucVu: {
      type: String,
      default: "Nhân viên",
      enum: ["Nhân viên", "Quản lý"],
    },
    DiaChi: { type: String },
    DienThoai: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const NhanVien = mongoose.model("NhanVien", NhanVienSchema);
module.exports = NhanVien;
