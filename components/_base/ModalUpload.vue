<template>
<div id="uploadModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">File upload form</h4>
        </div>
        <div class="modal-body">
          <!-- Form -->
          <form method="post" action enctype="multipart/form-data">
            Select file :
            <input type="file" name="file" id="file" class="form-control" />
            <br />
            <input type="button" class="btn btn-info" value="Upload" id="btn_upload" />
          </form>
          <!-- Preview-->
          <div id="preview"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalUpload'
}
</script>
