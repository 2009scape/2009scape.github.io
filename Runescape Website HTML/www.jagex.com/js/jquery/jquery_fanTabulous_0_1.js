(function($){

jQuery.fn.fanTabulous = function(){
 $(this).each(
  function(){
   var $this = $(this);

   var $tabs = $this.children("a.Tab");
   var $bodies = $this.children("div.TabContent");

   $tabs.click(
    function(){
     var $this = $(this);
     var $that = $("#" + $this.attr("id").split(/Tab$/)[0] + "Content");

     $this.parent().children("a.Tab").removeClass("TabSelected");
     $this.parent().children("div.TabContent").removeClass("TabContentSelected");

     $this.addClass("TabSelected");
     $that.addClass("TabContentSelected");

     $this.blur();

     return false;

    }
   );

  }
 );
}

})(jQuery);