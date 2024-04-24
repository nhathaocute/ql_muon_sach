<script></script>
<template>
  <div class="row">
    <div class="col-12">
      <h2>Thông tin của user</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <img class="img-user" src="../../assets/images/user-nam.png" alt="" />
    </div>
    <div class="col-8">
      <div class="row py-3">
        <div class="col-6 d-flex">
          <h5>Họ lót:</h5>
          <p>tran nhat</p>
        </div>
        <div class="col-6 d-flex">
          <h5>ten:</h5>
          <p>hao</p>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-4 d-flex">
          <h5>ngay sinh:</h5>
          <p>tran nhat</p>
        </div>
        <div class="col-4 d-flex">
          <h5>phai:</h5>
          <p>hao</p>
        </div>
        <div class="col-4 d-flex">
          <h5>dien thoai:</h5>
          <p>hao</p>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-12">
          <h5>dia chi:</h5>
          <p>dhfsijfshfisfljfjjkf nvdgjg</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="button-edit">
            <button
              class="edit"
              data-toggle="tooltip"
              title="
              sửa thông tin 
              "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fa-solid fa-pen-fancy"></i>
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Chi tiết sách
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body body-view">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="img-left">
                          <img
                            class="img-product"
                            src="../../assets/images/user-nam.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="input-group input_box">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nhập tên"
                          />
                        </div>

                        <div class="input-group input_box">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nhập họ lót"
                          />
                        </div>
                        <button
                          class="btn btn-outline-secondaryn input-add"
                          type="button"
                          data-bs-toggle="dropdown"
                        >
                          Chọn phái
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                            <a class="dropdown-item" href="#">Action</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </li>
                        </ul>
                        <div class="bao_input_add d-flex">
                          <div class="input-group input_box">
                            <input
                              type="date"
                              class="form-control"
                              placeholder="Ngày sinh"
                            />
                          </div>
                          <div class="input-group input_box">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Địa chỉ"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn_close"
                      data-bs-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" class="btn btn_accept">Thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/user/user.scss");
</style>
