var number = 0;

function newList(){
    var taskClass ='list' + number + 'task';
    var listTitle = $('#listName').val();
    $('.overList').append('<div class="list">' +
        '<div class="listHead list' + number + '">' +
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

    number++;
    console.log('Button clicked ' + number);
}
function newItem(task) {
    var taskTitle = $(task).parent().parent().find('#newItem').val();
    $(task).parent().parent().parent().append('<div class="listItem">' + taskTitle + '<span class="fas fa-check" onclick="done(this)"></span></div>');
}

function deleteItem(a){
    var granny = $(a).parent().parent().parent();
    $(granny).fadeOut('slow', function(){
        $(granny).remove();
    });

}

function done(element){
   $(element).parent().toggleClass('complete');
    $(element).toggleClass('checkedCheck');
}
// $('.overList .list .').on('dblclick','li', function(){
//     $(this).toggleClass('strike').fadeOut('slow');
// });