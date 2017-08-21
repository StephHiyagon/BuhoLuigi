$('.toggles a').click(function(){
     var get_id = this.id;
     console.log(get_id);
     var get_current = $('.posts .' + get_id);
     console.log(get_current)
       $('.post').not( get_current ).hide(500);
       get_current.show(500);
   });


   $('#showall').click(function() {
       $('.post').show(500);
   });
