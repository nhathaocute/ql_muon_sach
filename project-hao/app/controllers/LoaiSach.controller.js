const loaiSachModel = require("../models/LoaiSachModel");
const LoaiControllers = {
  // them nha xuat ban moi
  create: async (req, res) => {
    const { TenLoai } = req.body;

    // kiem tra cac truong
    if (!TenLoai) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      // them moi nha xuat ban
      const loaiSach = await loaiSachModel.create({
        TenLoai,
      });

      if (loaiSach) {
        return res.status(200).json({
          message: "Thêm mới nhà xuất bản thành công!",
          errorCode: 0,
        });
      } else {
        return res.status(404).json({
          message: "Thêm mới nhà xuất bản thất bại!",
          errorCode: 2,
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        errorCode: 3,
        error: e.message,
      });
    }
  },
  // cap nhat nha xuat ban
  edit: async (req, res) => {
    const { id } = req.query;
    const { TenLoai } = req.body;

    // kiem tra cac truong
    if (!TenLoai || !id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      // cap nhat nha xuat ban
      const loaiSach = await loaiSachModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            TenLoai,
          },
        },
        { new: true }
      );

      if (loaiSach) {
        return res.status(200).json({
          message: "Cập nhật nhà xuất bản thành công!",
          data: loaiSach,
          errorCode: 0,
        });
      } else {
        return res.status(404).json({
          message: "Cập nhật nhà xuất bản thất bại!",
          errorCode: 2,
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        errorCode: 3,
        error: e.message,
      });
    }
  },
  // lay tat ca nha xuat ban
  getAll: async (req, res) => {
    try {
      // lay tat ca nha xuat ban
      const loaiSach = await loaiSachModel.find();

      if (loaiSach) {
        // dem so luong sach cua tung loai
        const results = [];
        for (const loai of loaiSach) {
          const count = await loaiSachModel.countDocuments({ _id: loai._id });
          results.push({
            _id: loai._id,
            TenLoai: loai.TenLoai,

            count,
          });
        }

        return res.status(200).json({
          message: "Lấy tất cả nhà xuất bản thành công!",
          data: results,
          errorCode: 0,
        });
      } else {
        return res.status(404).json({
          message: "Lấy tất cả nhà xuất bản thất bại!",
          errorCode: 2,
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        errorCode: 3,
        error: e.message,
      });
    }
  },
  // lay tat thong tin nha xuat ban
  getOne: async (req, res) => {
    const { id } = req.query;

    // kiem tra ma nha xuat ban
    if (!id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Không tồn tại mã nhà xuất bản!",
      });
    }

    try {
      // lay tat thong tin nha xuat ban
      const loaiSach = await loaiSachModel.findOne({ _id: id });

      if (loaiSach) {
        return res.status(201).json({
          message: "Lấy thông tin nhà xuất bản thành công!",
          data: loaiSach,
          errorCode: 0,
        });
      } else {
        return res.status(404).json({
          message: "Lấy thông tin nhà xuất bản thất bại!",
          errorCode: 2,
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Lỗi server!",
        errorCode: 3,
        error: e.message,
      });
    }
  },
};

module.exports = { LoaiControllers };
