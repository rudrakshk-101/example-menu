btna =document.querySelector('#all');
btnb =document.querySelector('#breakfast');
btnl =document.querySelector('#lunch');
btns =document.querySelector('#shakes');
btnd =document.querySelector('#dinner');
// brekfast=c1,c4,c7
// lunch=c2,c5,c8
// shakes=c3,c6,c9
// dinner=c10

btna.addEventListener('click',function()
{
    alld();
})
btnb.addEventListener('click',function(){
    for(i=0;i<3;i++)
    {
        
        allh();
        document.getElementById('c1').style.display="flex";
        document.getElementById('c4').style.display="flex";
        document.getElementById('c7').style.display="flex";
    }
});
btnl.addEventListener('click',function(){
    for(i=0;i<3;i++)
    {
        
        allh();
        document.getElementById('c2').style.display="flex";
        document.getElementById('c5').style.display="flex";
        document.getElementById('c8').style.display="flex";
    }
});
btns.addEventListener('click',function(){
    for(i=0;i<3;i++)
    {
        
        allh();
        document.getElementById('c3').style.display="flex";
        document.getElementById('c6').style.display="flex";
        document.getElementById('c9').style.display="flex";
    }
});
btnd.addEventListener('click',function(){
    for(i=0;i<3;i++)
    {
        
        allh();
        document.getElementById('c10').style.display="flex";
    }
});
function allh()
{
    document.getElementById('c1').style.display="none";
    document.getElementById('c2').style.display="none";
    document.getElementById('c3').style.display="none";
    document.getElementById('c4').style.display="none";
    document.getElementById('c5').style.display="none";
    document.getElementById('c6').style.display="none";
    document.getElementById('c7').style.display="none";
    document.getElementById('c8').style.display="none";
    document.getElementById('c9').style.display="none";
    document.getElementById('c10').style.display="none";
}
function alld()
{
    document.getElementById('c1').style.display="flex";
    document.getElementById('c2').style.display="flex";
    document.getElementById('c3').style.display="flex";
    document.getElementById('c4').style.display="flex";
    document.getElementById('c5').style.display="flex";
    document.getElementById('c6').style.display="flex";
    document.getElementById('c7').style.display="flex";
    document.getElementById('c8').style.display="flex";
    document.getElementById('c9').style.display="flex";
    document.getElementById('c10').style.display="flex";
}