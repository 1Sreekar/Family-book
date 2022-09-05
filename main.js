var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnzEyvPRiIEsSy88pBIP8Hf35k-Rf6dXh3g&usqp=CAU"];
var names = ["Sreenivas Viyyuri","Aruna Viyyuri","Sai Sreekar Viyyuri"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
