const sachModel = require("../models/SachModel");
// Thêm sách
const sachControllers = {
  // them moi sach
  create: async (req, res) => {
    const {
      TenSach,
      DonGia,
      SoQuyen,
      NamXuatBan,
      MaNXB,
      MaLoai,
      TacGia,
      HinhAnh,
    } = req.body;

    // kiem tra cac truong
    if (
      !TenSach ||
      !DonGia ||
      !SoQuyen ||
      !NamXuatBan ||
      !MaNXB ||
      !MaLoai ||
      !TacGia ||
      !HinhAnh
    ) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    // kiem tra cac truong la so
    if (
      isNaN(parseInt(DonGia)) ||
      isNaN(parseInt(SoQuyen)) ||
      isNaN(parseInt(NamXuatBan))
    ) {
      return res.status(400).json({
        errorCode: 1,
        message: "Một số trường phải là số!",
      });
    }

    try {
      // them moi sach
      const sach = await sachModel.create({
        TenSach,
        DonGia,
        SoQuyen,
        NamXuatBan,
        MaNXB,
        MaLoai,
        HinhAnh,
        TacGia,
      });

      if (sach) {
        return res.status(200).json({
          message: "Thêm mới sách thành công!",
          errorCode: 0,
        });
      } else {
        return res.status(404).json({
          message: "Thêm mới sách thất bại!",
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
  // cap nhat thong tin sach
  edit: async (req, res) => {
    const { id } = req.query;
    const {
      TenSach,
      DonGia,
      SoQuyen,
      NamXuatBan,
      MaNXB,
      MaLoai,
      TacGia,
      HinhAnh,
    } = req.body;

    // kiem tra cac truong
    if (
      !TenSach ||
      !DonGia ||
      !SoQuyen ||
      !NamXuatBan ||
      !MaNXB ||
      !TacGia ||
      !HinhAnh ||
      !MaLoai ||
      !id
    ) {
      return res.status(400).json({
        errorCode: 1,
        message: "Tất cả các trường là bắt buộc!",
      });
    }

    // kiem tra gia tri so
    if (
      isNaN(parseInt(DonGia)) ||
      isNaN(parseInt(SoQuyen)) ||
      isNaN(parseInt(NamXuatBan))
    ) {
      return res.status(400).json({
        errorCode: 1,
        message: "Một số trường phải là số!",
      });
    }

    try {
      // cap nhat thong tin sach
      const sach = await sachModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            TenSach,
            DonGia,
            SoQuyen,
            NamXuatBan,
            MaNXB,
            MaLoai,
            HinhAnh,
            TacGia,
          },
        },
        { new: true }
      );

      if (sach) {
        return res.status(201).json({
          message: "Cập nhật sách thành công!",
          data: sach,
          errorCode: 0,
        });
      } else {
        return res.status(404).json({
          message: "Cập nhật sách thất bại!",
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
  // lay tat ca sach
  getAll: async (req, res) => {
    const { page, limit, MaNXB, MaLoai, key, type } = req.query;
    const LENGTH = limit ? parseInt(limit) : 8;
    let start = 0;
    if (!isNaN(parseInt(page)) && parseInt(page) > 0) {
      start = LENGTH * page - LENGTH;
    }

    try {
      let search = {};
      if (MaNXB) {
        search = { MaNXB };
      }
      if (MaLoai) {
        search = { MaLoai };
      }

      if (key && type) {
        const searchValue = {
          $regex: key,
          $options: "i",
        };
        if (type == "name") {
          search = {
            TenSach: searchValue,
          };
        } else {
          search = {
            TacGia: searchValue,
          };
        }
      }

      // lay tat ca sach
      const tatCaSach = await sachModel
        .find(search)
        .skip(start)
        .limit(LENGTH)
        .populate([{ path: "MaNXB" }, { path: "MaLoai" }]);

      // kiem tra sach vua lay
      if (tatCaSach) {
        return res.status(200).json({
          errorCode: 0,
          data: tatCaSach,
          message: "Lấy tất cả sách thành công!",
        });
      } else {
        return res.status(404).json({
          errorCode: 2,
          message: "Sách không tồn tại!",
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
  // lay thong tin sach
  getOne: async (req, res) => {
    const { id } = req.query;

    // kiem tra mã sách
    if (!id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Không tồn tại mã sách!",
      });
    }

    try {
      // tim kiem theo id
      const sach = await sachModel.findOne({ _id: id }).populate("MaNXB");

      if (sach) {
        return res.status(200).json({
          errorCode: 0,
          message: "Lấy thông tin sách thành công!",
          data: sach,
        });
      } else {
        return res.status(404).json({
          errorCode: 2,
          message: "Sách không tồn tại!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
        errorCode: 3,
      });
    }
  },
  // dem so luong sach
  getCount: async (req, res) => {
    try {
      // dem so luong sach
      const soLuong = await sachModel.countDocuments();

      if (!isNaN(parseInt(soLuong))) {
        return res.status(200).json({
          data: soLuong,
          errorCode: 0,
          message: "Đếm số lượng thành công!",
        });
      } else {
        return res.status(404).json({
          message: "Không thể đếm số lượng!",
          errorCode: 2,
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi server!",
        error: err.message,
        errorCode: 3,
      });
    }
  },
  getAlltruid: async (req, res) => {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({
        errorCode: 1,
        message: "Không tồn tại mã sách!",
      });
    }
    try {
      // lay tat ca sach
      const tatCaSach = await sachModel
        .find({ _id: { $ne: id } })
        .skip(0)
        .limit(8)
        .populate([{ path: "MaNXB" }, { path: "MaLoai" }]);

      // kiem tra sach vua lay
      if (tatCaSach) {
        return res.status(200).json({
          errorCode: 0,
          data: tatCaSach,
          message: "Lấy tất cả sách thành công!",
        });
      } else {
        return res.status(404).json({
          errorCode: 2,
          message: "Sách không tồn tại!",
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
  // lay tat ngau nhien sach
  // getRandom: async (req, res) => {
  //   try {
  //     // lay tat ca sach
  //     // const tatCaSach = await sachModel.aggregate([
  //     //   { $sample: { size: 8 } },
  //     //   {
  //     //     $lookup: {
  //     //       from: "LoaiSach",
  //     //       localField: "MaLoai",
  //     //       foreignField: "MaLoai",
  //     //       as: "MaLoaiTemp",
  //     //     },
  //     //   },
  //     //   {
  //     //     $unwind: {
  //     //       path: "$MaLoaiTemp",
  //     //       preserveNullAndEmptyArrays: true,
  //     //     },
  //     //   },
  //     //   {
  //     //     $lookup: {
  //     //       from: "NhaXuatBan",
  //     //       localField: "MaNXB",
  //     //       foreignField: "MaNXB",
  //     //       as: "MaNXBTemp",
  //     //     },
  //     //   },
  //     //   {
  //     //     $unwind: {
  //     //       path: "$MaNXBTemp",
  //     //       preserveNullAndEmptyArrays: true,
  //     //     },
  //     //   },
  //     //   {
  //     //     $set: {
  //     //       MaLoai: {
  //     //         $cond: {
  //     //           if: { $isArray: "$MaLoai" },
  //     //           then: { $concatArrays: ["$MaLoai", ["$MaLoaiTemp"]] },
  //     //           else: ["$MaLoai", "$MaLoaiTemp"],
  //     //         },
  //     //       },
  //     //       MaNXB: {
  //     //         $cond: {
  //     //           if: { $isArray: "$MaNXB" },
  //     //           then: { $concatArrays: ["$MaNXB", ["$MaNXBTemp"]] },
  //     //           else: ["$MaNXB", "$MaNXBTemp"],
  //     //         },
  //     //       },
  //     //     },
  //     //   },
  //     // ]);

  //     const tatCaSach = await sachModel.aggregate([
  //       { $sample: { size: 8 } },
  //       {
  //         $lookup: {
  //           from: "LoaiSach",
  //           localField: "MaLoai",
  //           foreignField: "_id",
  //           as: "MaLoai",
  //         },
  //       },
  //       // {
  //       //   $lookup: {
  //       //     from: "NhaXuatBan",
  //       //     localField: "MaNXB",
  //       //     foreignField: "_id",
  //       //     as: "MaNXB",
  //       //   },
  //       // },
  //     ]);
  //     // kiem tra sach vua lay
  //     if (tatCaSach) {
  //       return res.status(201).json({
  //         errorCode: 0,
  //         data: tatCaSach,
  //         message: "Lấy tất cả sách thành công!",
  //       });
  //     } else {
  //       return res.status(404).json({
  //         errorCode: 2,
  //         message: "Sách không tồn tại!",
  //       });
  //     }
  //   } catch (err) {
  //     return res.status(500).json({
  //       errorCode: 3,
  //       message: "Lỗi server!",
  //       error: err.message,
  //     });
  //   }
  // },
};

module.exports = {
  sachControllers,
};
