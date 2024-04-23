const nhaXuatBanModel = require("../models/NhaXuatBanModel");
const nhaXuatBanControllers = {
  // them nha xuat ban moi
  create: async (req, res) => {
    const { TenNXB, DiaChi } = req.body;

    // kiem tra cac truong
    if (!TenNXB || !DiaChi) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      // them moi nha xuat ban
      const nhaXuatBan = await nhaXuatBanModel.create({
        TenNXB,
        DiaChi,
      });

      if (nhaXuatBan) {
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
    const { TenNXB, DiaChi } = req.body;

    // kiem tra cac truong
    if (!TenNXB || !DiaChi || !id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    try {
      // cap nhat nha xuat ban
      const nhaXuatBan = await nhaXuatBanModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            TenNXB,
            DiaChi,
          },
        },
        { new: true }
      );

      if (nhaXuatBan) {
        return res.status(200).json({
          message: "Cập nhật nhà xuất bản thành công!",
          data: nhaXuatBan,
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
      const nhaXuatBan = await nhaXuatBanModel.find();

      if (nhaXuatBan) {
        // dem so luong sach cua tung nxb
        const results = [];
        for (const nxb of nhaXuatBan) {
          const count = await nhaXuatBanModel.countDocuments({ _id: nxb._id });
          results.push({
            _id: nxb._id,
            TenNXB: nxb.TenNXB,
            DiaChi: nxb.DiaChi,
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
      const nhaXuatBan = await nhaXuatBanModel.findOne({ _id: id });

      if (nhaXuatBan) {
        return res.status(200).json({
          message: "Lấy thông tin nhà xuất bản thành công!",
          data: nhaXuatBan,
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

module.exports = {
  nhaXuatBanControllers,
};
