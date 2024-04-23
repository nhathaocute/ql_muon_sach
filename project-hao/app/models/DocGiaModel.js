const mongoose = require("mongoose");

const DocGiaSchema = new mongoose.Schema(
  {
    HoLot: { type: String, required: true },
    Ten: { type: String, required: true },
    Password: { type: String, required: true },
    NgaySinh: { type: Date },
    Phai: { type: Number, enum: [0, 1, 2] },
    DiaChi: { type: String },
    DienThoai: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const DocGia = mongoose.model("DocGia", DocGiaSchema);
module.exports = DocGia;
