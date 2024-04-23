const mongoose = require("mongoose");

const SachSchema = new mongoose.Schema(
  {
    TenSach: { type: String, required: true, unique: true },
    HinhAnh: { type: String, maxlength: 16 * 1024 * 1024, default: null },
    DonGia: { type: Number, required: true },
    SoQuyen: { type: Number, required: true, default: 1 },
    NamXuatBan: { type: String, required: true },
    MaNXB: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NhaXuatBan",
    },
    MaLoai: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoaiSach",
    },
    TacGia: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Sach = mongoose.model("Sach", SachSchema);
module.exports = Sach;
