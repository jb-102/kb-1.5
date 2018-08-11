  editPanel += '<div class="address-form-edit-panel">';
  editPanel += '<div class="address-toggle">';
  editPanel += '<div class="radio radio-primary">';
  editPanel += '<input data-id="'+address.address_id+'" class="address-toggle" id="edit-panel-address-toggle'+id+'" type="radio" name="edit-address-toggle" value="new" checked>';
  editPanel += '<label for="edit-panel-address-toggle'+id+'"> </label>';
  editPanel += '</div>';
  editPanel += '</div>';
  editPanel += '<div id="address-summary'+id+'" class="address-summary">';
  editPanel += '<p><span class="name">'+address.firstname+' '+address.lastname+'</span><span class="phone">'+address.lastname+'</span></p>';
  editPanel += '<p class="delivery-address"><span class="street-address">'+address.address_1+','+address.address_2+'</span><span class="phone">'+address.custom_field[1]+'</span><span class="state">'+address.zone+'</span><span class="pincode">'+address.postcode+'</span><span class="country">'+address.country+'</span></p>';
  editPanel += '<p class="pin-error">The pincode is not servicable.</p>';
  editPanel += '</div>';
  editPanel += '<div class="address-edit"><a><span class="fa fa-edit"></span><span>Edit</span></a></div>';
  editPanel += '</div>';

  var formVar = '<div class="address-form-wrap saved clearfix">';
  formVar += editPanel;
  formVar += '<div class="address-form">';
  formVar += '<div class="col-xs-12"> ';
  formVar += '<div class="radio radio-primary">';
  formVar += '<input data-id="'+address.address_id+'" class="address-toggle" id="edit-address-toggle'+id+'" type="radio" name="address-toggle" value="new" checked>';
  formVar += '<label for="edit-address-toggle'+id+'"><span class="edit-label">Edit Shipping Address</span><span class="new-label">Add a new Shipping Address</span></label>';
  formVar += '</div>';
  formVar += '</div>';

  formVar += '<form id="address-form'+id+'" data-form-id="'+id+'">';

  formVar += '<div class="form-group">';
  formVar += '<div class="col-sm-6">';
  formVar += '<input class="form-control" value="'+address.firstname+'" name="firstname" placeholder="First Name" autofocus>';
  formVar += '</div>';
  formVar += '<div class="col-sm-6">';
  formVar += '<input class="form-control" value="'+address.lastname+'" name="lastname" placeholder="Last Name">';
  formVar += '</div>';
  formVar += '</div>';

  formVar += '<div class="form-group clearfix">';
  formVar += '<div class="col-xs-6">';
  formVar += '<input class="form-control" value="'+address.postcode+'" type="number" onkeypress="return isNumberKey(event)" name="pincode" placeholder="Pincode">';
  formVar += '</div>';
  formVar += '<div class="col-xs-6">';
  formVar += '<input class="form-control" value="'+address.custom_field[1]+'" type="number" onkeypress="return isNumberKey(event)" name="phone" placeholder="Phone Number">';
  formVar += '</div>';
  formVar += '</div>';

  formVar += '<div class="form-group clearfix">';
  formVar += '<div class="col-sm-6">';
  formVar += '<input class="form-control" value="'+address.address_1+'" name="address_1" placeholder="Address Line 1">';
  formVar += '</div>';
  formVar += '<div class="col-sm-6">';
  formVar += '<input class="form-control" value="'+address.address_2+'" name="address_2" placeholder="Address Line 2">';
  formVar += '</div>';
  formVar += '</div>';

  formVar += '<div class="form-group clearfix">';
  formVar += '<div class="col-sm-6">';
  formVar += '<input class="form-control" name="city" placeholder="City / District / Town">';
  formVar += '</div>';
  formVar += '<div class="col-sm-6">';
  formVar += `<select id='countries_${id}' data-statesId='-1' class="form-control countries" style="height:45px" name="country" placeholder="Country">
              ${countriesOptions}
  </select>`;
  formVar += '</div>';
  formVar += '</div>';

  formVar += '<div class="form-group clearfix">';
  formVar += '<div class="col-sm-6">';
  formVar += `<select id='states_${id}' class="form-control states" style="height:45px" name="state" placeholder="State">
              ${statesOptions}
  </select>`;
  formVar += '</div>';
  formVar += '<div class="col-sm-6">';
  formVar += `<select class="form-control" style="height:45px" name="defaultAddress" placeholder="Default Address">
  <option selected disabled value='-1'>Default Address</option>
  <option value="yes" >Yes</option>
  <option value="no" >No</option>
  </select>`;
  formVar += '</div>';
  formVar += '</div>';

  formVar += '<div class="form-group clearfix">';
  formVar += '<div class="col-xs-12">';
  formVar += '<button class="btn btn-orange save-address" type="submit">Save</button>';
  formVar += '<button class="btn btn-default cancel-address" type="button">Cancel</button>';
  formVar += '</div>';
  formVar += '</div>';

  formVar += '</form>';
  formVar += '</div>';

  formVar += '</div>'; 