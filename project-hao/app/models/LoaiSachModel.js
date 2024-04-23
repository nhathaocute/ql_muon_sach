const mongoose = require("mongoose");

const LoaiSachSchema = new mongoose.Schema(
  {
    TenLoai: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const LoaiSach = mongoose.model("LoaiSach", LoaiSachSchema);
module.exports = LoaiSach;
