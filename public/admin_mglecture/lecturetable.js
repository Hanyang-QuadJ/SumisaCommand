/**
 * Created by pleiades on 2017. 1. 26..
 */
var options = {
    valueNames: [ 'id', 'name', 'date',]
};

var l_typeList = new List('l_types', options);

var idField = $('#id-field'),
    nameField = $('#name-field'),
    dateField = $('#date-field'),
    addBtn = $('#add-btn'),
    editBtn = $('#edit-btn').hide(),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

refreshCallbacks();

addBtn.click(function() {
    l_typeList.add({
        id: Math.floor(Math.random()*110000),
        name: nameField.val(),
        date: dateField.val(),

    });
    clearFields();
    refreshCallbacks();
});

editBtn.click(function() {
    var item = l_typeList.get('id', idField.val())[0];
    item.values({
        id:idField.val(),
        name: nameField.val(),
        date: dateField.val(),
    });
    clearFields();
    editBtn.hide();
    addBtn.show();
});

function refreshCallbacks() {
    // Needed to add new buttons to jQuery-extended object
    removeBtns = $(removeBtns.selector);
    editBtns = $(editBtns.selector);

    removeBtns.click(function() {
        var itemId = $(this).closest('tr').find('.id').text();
        l_typeList.remove('id', itemId);
    });

    editBtns.click(function() {
        var itemId = $(this).closest('tr').find('.id').text();
        var itemValues = l_typeList.get('id', itemId)[0].values();
        idField.val(itemValues.id);
        nameField.val(itemValues.name);
        dateField.val(itemValues.date);

        editBtn.show();
        addBtn.hide();
    });
}

function clearFields() {
    nameField.val('');
    dateField.val('');
}

