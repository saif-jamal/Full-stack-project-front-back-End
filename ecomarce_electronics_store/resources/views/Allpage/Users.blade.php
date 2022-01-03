
@include('includes.Head')

@include('includes.leftsideNav')

@include('includes.rightUsers')

</div>



{{--    js of dashboard --}}

<script  src="{{asset('js/profile.js')}}"></script>
<script src="{{asset('js/plugins/perfect-scrollbar.min.js')}}"></script>
<script src="{{asset('js/plugins/smooth-scrollbar.min.js')}}"></script>

@if(\Illuminate\Support\Facades\Session::has('create_user'))
    <script>
        swal("Success💥","Create User successfully ✌️","success",{
            button:"OK",
        });
    </script>
@endif

@if(\Illuminate\Support\Facades\Session::has('update_user'))
    <script>
        swal("Success💥","Update User information successfully ","success",{
            button:"OK",
        });
    </script>
@endif
@if(\Illuminate\Support\Facades\Session::has('user_deleted'))
    <script>
        swal("Success💥","User Deleted successfully ","success",{
            button:"OK",
        });
    </script>
    @endif
</body>
</html>
