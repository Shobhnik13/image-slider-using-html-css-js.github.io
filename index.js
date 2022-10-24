let flag=0;//for indicating/tracking all the elements/slides
//flag is initially at 0 bcoz when we open  site then it should be the 1st image ie 0 index
//slideshow function for showing slides using flag
function operate(x){
flag=flag+x;
slideshow(flag);//this will call after inc/dec flag
}
slideshow(flag);//this will only run when we refresh bcoz no button is clicked that time so flag is still 0
function slideshow(num){
    let slides=document.getElementsByClassName('slide');
  
    //handling edge cases
    //case 1
    if(num==slides.length){
        //num is already at last index so reset it into 0 index by making num-0 and flag=0
        num=0;
        flag=0;
    }
    //case 2
    if(num<0){
        //num is already at 1st image ie 0 index so reset it into last index so num=slides.length and flag=slides.length
            //slides.length is 4 but last index is 3
            num=slides.length-1;
            flag=slides.length-1;
    }
 //so when we will inc/dec so this image will appear but we should hide the old image 
   //so we will hide all images everytime and will only display the flag image
  
   for(let y of slides){
    y.style.display='none';
   }
    //let say we have flag =2 so we will hide 0 1 2 3 and will display flag =2 image 
    slides[num].style.display='block';//it will make the display block of the element ie is passed in flag at initial the ele willbe 0 ie slide 1
}