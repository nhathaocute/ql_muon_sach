<script></script>
<template>
  <div class="row">
    <div class="t-heard d-flex">
      <div class="field-heard col-md-3">Tên độc giả</div>
      <div class="field-heard col-md-3">Tên sách</div>
      <div class="field-heard col-md-3">Ngày mượn</div>
      <div class="field-heard col-md-3">Ngày trả</div>
    </div>
  </div>
  <div class="row">
    <div
      class="t-body-product"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <div class="t-body d-flex">
        <div class="field-body col-md-3"><p>4`12424212`</p></div>
        <div class="field-body col-md-3"><p>nha sach van nang</p></div>
        <div class="field-body col-md-3"><p>nha sach van nang</p></div>
        <div class="field-body col-md-3"><p>nha sach van nang</p></div>
      </div>
    </div>
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
              Chi tiết phiếu đã duyệt
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body body-view">
            <div class="py-2">
              id:
              <span>3`12323212`</span>
            </div>
            <div class="py-2">
              Tên độc giả:
              <span>nha sach van nang</span>
            </div>
            <div class="py-2">
              Tên sách:
              <span>nha sach van nang</span>
            </div>
            <div class="py-2">
              Ngày mượn:
              <span>nha sach van nang</span>
            </div>
            <div class="py-2">
              Ngày trả:
              <span>nha sach van nang</span>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/admin/adminPhieu.scss");
</style>
