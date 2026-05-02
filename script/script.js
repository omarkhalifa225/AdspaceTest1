 const navBtn=document.getElementById('navGet');
const overlay=document.getElementById('formOver');
const close=document.getElementById('closeBtn');

navBtn.addEventListener('click', function(){
overlay.classList.remove('d-none');
document.body.style.overflow='hidden';
});

close.addEventListener('click',function(){
overlay.classList.add('d-none');
document.body.style.overflow='auto';
});


document.addEventListener('DOMContentLoaded',() => {
    const observer =new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if
            (entry.isIntersecting){
                entry.target.classList.add('reveal');
                if(entry.target.id === 'work-Img'){
                    setTimeout(() => {
                        const img=entry.target.querySelector('img');
                        if(img)
                        img.classList.add('floating');
                    },1000);
                }
            }
        });
    },{threshold:0.1});
    const title=document.querySelector('.work_tital');
    const img=document.getElementById('work-Img');
    if(title)
        observer.observe(title);
        if(img)
        observer.observe(img);
})