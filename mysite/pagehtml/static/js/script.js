$(document).ready(function(){
    
    i = 0;
    sortMaeDialog = 0;
    lastDialog = 0;
    maeDialog = [
        'Lorem ipsum dolor sit amet?',
        'Consectetur adipiscing elit.',
        'Nullam condimentum lacinia mauris id pellentesque.',
        'In et gravida metus.',
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        'Sed luctus est id diam feugiat vestibulum.',
        'Nunc sagittis semper fermentum.'
    ];

    function chatConversationAnimation(){
        i += 1;

        while(sortMaeDialog == lastDialog){
            sortMaeDialog = Math.floor(Math.random() * maeDialog.length);
        }
        lastDialog = sortMaeDialog;

        $("#usersonline").text(i);
        $('#chatConversation div:first').clone().appendTo("#chatConversation");
        $('#chatConversation div:last p').text(maeDialog[sortMaeDialog]);
        $('#chatConversation div:last').addClass('chat-ballon');
        $('#chatConversation').scrollTop($('#chatConversation').prop('scrollHeight'));
    }

    setInterval(() => {
        chatConversationAnimation();
    }, 3000);

    $('#btChatSend').on('click', function(){
        alert('oi');
    });
});