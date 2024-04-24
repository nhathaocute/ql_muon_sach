const bcrypt = require("bcrypt");
const nhanVienModel = require("../models/NhanVienModel");
// Đăng ký tài khoản
const nhanVienControllers = {
  create: async (req, res) => {
    const { HoTenNV, Password, ChucVu, DiaChi, DienThoai } = req.body;

    if (!HoTenNV || !Password || !ChucVu || !DiaChi || !DienThoai) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      const hashedPassword = await bcrypt.hash(Password, 10);

      const nhanVien = await nhanVienModel.create({
        HoTenNV,
        ChucVu,
        Password: hashedPassword,
        DiaChi,
        DienThoai,
      });

      if (nhanVien) {
        return res.status(200).json({
          message: "Đăng ký thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Đăng ký thất bại!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
      });
    }
  },
  login: async (req, res) => {
    const { Password, DienThoai } = req.body;

    if (!Password || !DienThoai) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      const nhanVien = await nhanVienModel.findOne({ DienThoai });

      if (nhanVien && (await bcrypt.compare(Password, nhanVien.Password))) {
        return res.status(200).json({
          message: "Đăng nhập thành công!",
          data: {
            MSNV: nhanVien.MSNV,
          },
        });
      } else {
        return res.status(404).json({
          message: "Số điện thoại hoặc mật khẩu không không khớp!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  getInfo: async (req, res) => {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        message: "Không tồn tại mã số nhân viên!",
      });
    }

    try {
      const nhanVien = await nhanVienModel.findOne(
        { _id: id },
        { Password: 0 }
      );

      if (nhanVien) {
        return res.status(200).json({
          data: nhanVien,
          message: "Lấy thông tin nhân viên thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Lấy thông tin nhân viên thất bại!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      // danh sach nhan vien
      const DSNhanVien = await nhanVienModel.find({}, "-Password");

      if (DSNhanVien) {
        return res.status(200).json({
          errorCode: 0,
          data: DSNhanVien,
          message: "Lấy thông tin tát cả nhân viên thành công!",
        });
      } else {
        return res.status(404).json({
          errorCode: 2,
          message: "Không thể lấy danh sách nhân viên!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        errorCode: 3,
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
};

module.exports = {
  nhanVienControllers,
};
