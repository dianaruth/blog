function showImageModal(path) {
    $("#image-modal-body").empty();
    $("#image-modal-body").append("<img src=" + path + ">");
    $('#image-modal').modal();
}