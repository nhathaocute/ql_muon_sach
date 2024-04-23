const docGiaModel = require("../models/DocGiaModel");
const bcrypt = require("bcrypt");
const docGiaControllers = {
  // tao tai khoan doc gia
  register: async (req, res) => {
    const { HoLot, Ten, Password, DienThoai } = req.body;

    // kiem tra cac truong
    if (!HoLot || !Ten || !Password || !DienThoai) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    // ma hoa mat khau
    try {
      const hashedPassword = await bcrypt.hash(Password, 10);

      // tao khach hang
      const docGia = await docGiaModel.create({
        HoLot,
        Ten,
        Password: hashedPassword,
        DienThoai,
      });

      // kiem tra khach hang vua tao
      if (docGia) {
        return res.status(200).json({
          errorCode: 0,
          message: "Đăng ký thành công!",
        });
      } else {
        return res.status(404).json({
          errorCode: 2,
          message: "Đăng ký thất bại!",
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
  // dang nhap tai khoan
  logIn: async (req, res) => {
    const { Password, DienThoai } = req.body;

    // kiem tra cac truong
    if (!Password || !DienThoai) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      // tim kiem doc gia trong database
      const docGia = await docGiaModel.findOne({ DienThoai });

      // so sanh mat khau
      if (docGia && (await bcrypt.compare(Password, docGia.Password))) {
        return res.status(201).json({
          errorCode: 0,
          data: {
            MADOCGIA: docGia.MADOCGIA,
          },
          message: "Đăng nhập thành công!",
        });
      } else {
        return res.status(404).json({
          errorCode: 2,
          message: "Số điện thoại hoặc mật khẩu không khớp!",
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
  // chinh sua thong tin doc gia
  update: async (req, res) => {
    const { id } = req.query;
    const { HoLot, Ten, DiaChi, NgaySinh, Phai } = req.body;

    const checkPHAI = (data) =>
      !isNaN(parseInt(data)) && [0, 1, 2].indexOf(data) !== -1;

    if (!HoLot || !Ten || !DiaChi || !NgaySinh || !id || !checkPHAI(Phai)) {
      return res.status(400).json({
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      const docGia = await docGiaModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            HoLot,
            Ten,
            DiaChi,
            NgaySinh,
            Phai,
          },
          $unset: {
            MATKHAU: 1,
          },
        },
        { new: true }
      );

      if (docGia) {
        return res.status(200).json({
          data: docGia,
          message: "Cập nhật thông tin độc giả thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Cập nhật thất bại!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
      });
    }
  },
  // lay thong tin doc gia
  getOne: async (req, res) => {
    const { id } = req.query;

    // kiem tra ma doc gia
    if (!id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Không tồn tại mã độc giả!",
      });
    }

    try {
      // tim kiem theo MADOCGIA
      const docGia = await docGiaModel.findOne({ _id: id }, { Password: 0 });

      if (docGia) {
        return res.status(200).json({
          errorCode: 0,
          data: docGia,
          message: "Lấy thông tin độc giả thành công!",
        });
      } else {
        return res.status(404).json({
          errorCode: 2,
          message: "Lấy thông tin độc giả thất bại!",
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
  // lay so luong doc gia
};

module.exports = {
  docGiaControllers,
};
