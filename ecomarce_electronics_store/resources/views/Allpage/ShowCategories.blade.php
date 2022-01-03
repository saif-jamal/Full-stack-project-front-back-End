
@include('includes.Head')

@include('includes.leftsideNav')

@include('includes.rightshowcategories')

</div>



{{--    js of dashboard --}}

<script  src="{{asset('js/profile.js')}}"></script>
<script src="{{asset('js/plugins/perfect-scrollbar.min.js')}}"></script>
<script src="{{asset('js/plugins/smooth-scrollbar.min.js')}}"></script>
@if(\Illuminate\Support\Facades\Session::has('create'))
    <script>
        swal("Success💥","Category created successfully","success",{
            button:"OK",
        });
    </script>
@endif

@if(\Illuminate\Support\Facades\Session::has('update_category'))
    <script>
        swal("Success💥","Category Updated successfully ✌️","success",{
            button:"OK",
        });
    </script>
@endif

@if(\Illuminate\Support\Facades\Session::has('category_deleted'))
    <script>
        swal("Success💥","Category Deleted successfully","success",{
            button:"OK",
        });
    </script>
    @endif
</body>
</html>
