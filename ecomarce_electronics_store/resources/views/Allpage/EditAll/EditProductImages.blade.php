

@include('includes.Head')

@include('includes.leftsideNav')

@include('includes.EditAll.EditProductImage')



</div>



{{--    js of dashboard --}}

<script  src="{{asset('js/profile.js')}}"></script>


<script>
    const img_slider_add_display= document.getElementById('img_slider_add_display');

    const imgselect=document.getElementById('select_img_button');
    const imgfile=document.getElementById('images');
    // const imgdisplay=document.getElementById('img_____');

    imgselect.addEventListener('click',()=>{
        imgfile.click();
    });



    // display image function
    function handleimgselect(files) {
        if (files.length >0){
            for (let i = 0; i < files.length; i++) {

                var div_create_for_img = document.createElement("div");
                div_create_for_img.classList.add('col-md-3');
                div_create_for_img.classList.add('py-4');
                div_create_for_img.classList.add('my-2');
                div_create_for_img.classList.add('position-relative');

                // var delete_img__=document.createElement('i');
                // delete_img__.classList.add('fas');
                // delete_img__.classList.add('fa-trash');
                // delete_img__.classList.add('style_delete_img');
                // delete_img__.value=i;
                // div_create_for_img.append(delete_img__);

                var img_create = document.createElement("img");
                img_create.src = window.URL.createObjectURL(files[i]);
                // img_create.classList.add('img-fluid');
                img_create.classList.add('img_display');
                img_create.id='img_____';

                img_create.onload = function(e) {
                    window.URL.revokeObjectURL(this.src);
                }

                // append
                div_create_for_img.append(img_create);
                img_slider_add_display.append(div_create_for_img);
            }

        }

        // const delete_img__product=document.querySelectorAll('.style_delete_img');
        // const imges_product=document.getElementById('images');
        //
        // delete_img__product.forEach(ele=>{
        //     ele.addEventListener('click',()=>{
        //         var number__=ele.value;
        //         console.log(files);
        //         // imges_product.files.splice(number__,1);
        //         // delete files[number__];
        //         // files.sort();
        //         // files[number__]={};
        //     });
        // });


    }



</script>

<script>
    const select____=document.getElementById('select_img_button');
    const uploadsubmit=document.getElementById('uploadimages');
    select____.addEventListener('click',()=>{
        uploadsubmit.value="Upload && continue";
    })

</script>

@if(\Illuminate\Support\Facades\Session::has('product_update'))
    <script>
        swal("Success💥","Product Update successfully","success",{
            button:"OK",
        });
    </script>
@endif
@if(\Illuminate\Support\Facades\Session::has('delete_img'))
    <script>
        swal("Success💥","Image  deleted successfully","success",{
            button:"OK",
        });
    </script>
@endif

    </body>
    </html>
