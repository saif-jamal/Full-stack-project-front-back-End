@include('includes.Head')

@include('includes.leftsideNav')

@include('includes.EditAll.EditCategory')

</div>



{{--    js of dashboard --}}

<script  src="{{asset('js/profile.js')}}"></script>




<script>
    const add_img_button_cate= document.getElementById('add_img_button');
    const category____img =document.getElementById('category____img');
    add_img_button_cate.addEventListener('click',()=>{
        category____img.click();
    });

    function handleimguploadforcategory(files){
        add_img_button_cate.style.backgroundImage="url("+window.URL.createObjectURL(files[0])+")";
    }
</script>



</body>
</html>
