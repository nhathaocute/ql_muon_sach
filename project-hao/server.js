const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Config app
app.use(express.json());

// Connect database
const connectDB = require("./config/connectDB");
connectDB();

app.use("/docGia", require("./app/routes/DocGia.route"));
app.use("/nhanVien", require("./app/routes/NhanVien.route"));
app.use("/sach", require("./app/routes/Sach.route"));
app.use("/nhaXuatBan", require("./app/routes/NhaXuatBan.route"));
app.use("/theoDoiMuonSach", require("./app/routes/TheoDoiMuonSach.route"));
app.use("/loaiSach", require("./app/routes/LoaiSach.route"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
