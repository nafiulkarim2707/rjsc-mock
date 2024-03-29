class EntityTypeForm extends BaseForm {
  entityTypeList = {};

  constructor(entityTypeList) {
    super();
    console.log("SMNLOG :: Constructor : EntityTypeForm");
    this.entityTypeList = entityTypeList;
  }

  getFormData(){
    return '';
  }

  getFormHtml() {
    return '<div class="d-flex w-100">'
        + '</div>'
        + '<div class="d-flex flex-column w-100 bg-white rounded p-32 mt-5 shadow">'
        + '<div class="row rounded border border-color p-4 d-flex align-items-center">'
        + '<div class="col-md-6">'
        + '         <div class="d-flex flex-column w-100">'
        + '             <label htmlFor="exampleInputEmail1" class="form-label font-label">1. Entity Type</label>'
        + this._getEntityTypeSelectBox('')
        + '         </div>'
        + '     </div>'
        + '     <div class="col-md-6">'
        + '         <div class="gap-2 d-flex justify-content-center">'
        + '           <i class="fa-solid fa-circle-info" style="color: #6c757d"></i>'
        + '           <div class="entity"> Entity type is a businesss legal structure, like a corporation or partnership, affecting liability and taxes.</div>'
        + '            </div>'
        + '         </div>'
        + '    </div>'
        + '</div>';
  }

  bindEvents() {
    console.log('Event binding....: Entity type form');
    $(document).on('change', '.entityType', function(){
      console.log("SMNLOG val: "+ $(this).val());
    });
  }

  _getEntityTypeSelectBox(selectedValue){
    var html = '<select class="form-select plc reg-form-input form-control entityType">';
    html += '<option class="plc">Choose Any</option>';

    $.each(this.entityTypeList, function(idx, item){
      html += '<option value="'+ item.id +'">'+ item.name +'</option>';
    });
    html += '</select>';

    return html;
  }

  getEmptyJsonData() {
    return {
      'entityType': $(document).find('.entityType').val()
    }
  }

}