@include('includes.Head')

@include('includes.leftsideNav')

@include('includes.righttagsforproduct')

</div>



{{--    js of dashboard --}}

<script  src="{{asset('js/profile.js')}}"></script>



<script>

    const addtag___=document.getElementById('addtag');

    const addtag___text=document.getElementById('tags');

    addtag___.addEventListener('click',(e)=>{
       if(addtag___text.value==""){
           e.preventDefault();
       }

    })


</script>



</body>
</html>
