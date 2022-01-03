
@include('includes.Head')

@include('includes.leftsideNav')

@include('includes.rightshowproducts')

</div>



{{--    js of dashboard --}}

<script  src="{{asset('js/profile.js')}}"></script>
<script src="{{asset('js/plugins/perfect-scrollbar.min.js')}}"></script>
<script src="{{asset('js/plugins/smooth-scrollbar.min.js')}}"></script>

@if(\Illuminate\Support\Facades\Session::has('product_deleted'))
    <script>
        swal("Success💥","Product Deleted successfully","success",{
            button:"OK",
        });
    </script>
@endif
</body>
</html>
