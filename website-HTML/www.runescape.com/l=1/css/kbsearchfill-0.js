var link_no=0;
function open_window(url, width, height) {
 var settings="toolbar=0,scrollbars=0";
 if(width && width!=0) settings+=",width=" + width;
 if(height && height!=0) settings+=",height=" + height;
 window.open(url, "popuplink" + link_no++, settings);
}
var subcats=new Array();
function add_subcat(parent, id, name, selected) {
 if(!subcats[parent]) subcats[parent]=new Array();
 var new_option=document.createElement("OPTION");
 new_option.name=name;
 new_option.innerHTML=name;
 new_option.value=id;
 if(selected) { new_option.selected='selected'; }
 subcats[parent][subcats[parent].length]=new_option;
 return new_option;
}
function update_cats(suffix) {
 if(!suffix) suffix="";
 var top_level_select=document.getElementById("search_cat_select" + suffix);
 var subcat_select=document.getElementById("search_subcat_select" + suffix);
 if(!top_level_select || !subcat_select) return;
 if(subcat_select.options)
  for(old in subcat_select.options) subcat_select.options[1]=null;
  
 to_show=top_level_select.value;
 if(to_show>-1 && subcats[to_show]) {
  for(new_opt=0; new_opt<subcats[to_show].length; new_opt++) {
   var oldopt=subcats[to_show][new_opt];
   var newopt=document.createElement("OPTION");
   newopt.name=oldopt.name;
   newopt.innerHTML=oldopt.innerHTML;
   newopt.value=oldopt.value;
   subcat_select.appendChild(newopt);
  }
 }
}
window.onload=function() {
 update_cats();
 update_cats('_footer'); 
}
