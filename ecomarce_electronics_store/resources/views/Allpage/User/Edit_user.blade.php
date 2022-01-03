@include('includes.Head')

@include('includes.leftsideNav')

@include('includes.User.right_edit_user')

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



    const add_img_button_cate2= document.getElementById('add_img_button2');
    const category____img2 =document.getElementById('category____img2');
    add_img_button_cate2.addEventListener('click',()=>{
        category____img2.click();
    });

    function handleimguploadforcategory2(files){
        add_img_button_cate2.style.backgroundImage="url("+window.URL.createObjectURL(files[0])+")";
    }
</script>

<script>
    const input_new_pass=document.getElementById('password');
    const submit__user=document.getElementById('submit__user');
    const email__edit=document.getElementById('email');

    submit__user.addEventListener('click',()=>{
       if(input_new_pass.value==""){
           input_new_pass.value="empty00000000";
       }
    });
</script>


</body>
</html>
