const mongoose = require("mongoose");

const NhaXuatBanSchema = new mongoose.Schema(
  {
    TenNXB: { type: String, required: true },
    DiaChi: { type: String },
  },
  {
    timestamps: true,
  }
);

const NhaXuatBan = mongoose.model("NhaXuatBan", NhaXuatBanSchema);
module.exports = NhaXuatBan;
