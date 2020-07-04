// Function state_change is created and is called whenever state of checkbox is changed
function state_change(element){
    var anchor=document.getElementById('a_tag');        //Getting anchor tag by its id 
    anchor.href=`/delete_entry/?id=${element}`;         //delete_entry is called and id of the record is sent
}
