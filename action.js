

$('#listName').keypress(function( event ) {
    var listTitle = $('#listName').val();

    if (event.which == 13) {
        $('.overList').append('<div class="list">' +
            '<div class="listHead">' +
            '<div class="titleSpot">' + listTitle +
            '<input type="text" id="newItem" placeholder="New list item"/>' +
            '</div>' +

            '<div class="listIcons">' +
            '<span class="fas fa-plus" onclick="newItem(this)"></span>' +
            '<span class="fas fa-trash" onclick="deleteItem(this)"></span>' +
            '</div>' +
            '</div>' +
            '</div>'
        )
    }
});
function newList(){

    var listTitle = $('#listName').val();

    $('.overList').append('<div class="list">' +
        '<div class="listHead">' +
        '<div class="titleSpot">' + listTitle +
         '<input type="text" id="newItem" placeholder="New list item"/>' +
        '</div>' +

        '<div class="listIcons">' +
         '<span class="fas fa-plus" onclick="newItem(this)"></span>' +
         '<span class="fas fa-trash" onclick="deleteItem(this)"></span>' +
        '</div>' +
        '</div>' +
        '</div>'

    );
}
function newItem(task) {
    var taskTitle = $(task).parent().parent().find('#newItem').val();
    $(task).parent().parent().parent().append('<div class="listItem" contenteditable="true">' + taskTitle +
        '<div class="listIcons">' +
        '<span class="fas fa-check" onclick="done(this)" contenteditable="false"></span>' +
        '<span class="fas fa-trash" onclick="deleteTask(this)"></span></div>' +
        '</div>'
    );
}

function deleteItem(a){
    var granny = $(a).parent().parent().parent();
    $(granny).fadeOut('medium', function(){
        $(granny).remove();
    });
}

function deleteTask(task){
    $(task).parent().parent().fadeOut('medium', function(){
       $(task).parent().parent().remove();
    });
}

function done(element){
   $(element).parent().parent().toggleClass('complete');
    $(element).toggleClass('checkedCheck');
}
