<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Cache-control" content="no-cache">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="icon" href="/img/logo.png" />
    <title>Ele.Dashboard</title>

    {{--    argon cdn --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ar.js/2.1.1/aframe-ar.min.js" integrity="sha512-nAwVtZxAhVDCqw7hx/hHoOOrTfNQ+l4dnw5HvRrzeDE8SB3cW6ztoCUQmpeSCiL0ZGO9OfNMghJubNAQTx2Jzw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <!-- Nucleo Icons -->
    <link href="{{asset('css/customeCSS/nucleo-icons.css')}}" rel="stylesheet" />
    <link href="{{asset('css/customeCSS/nucleo-svg.css')}}" rel="stylesheet" />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <link href="{{asset('css/customeCSS/nucleo-svg.css')}}" rel="stylesheet" />
    <!-- CSS Files -->
    <link id="pagestyle" href="{{asset('css/customeCSS/soft-ui-dashboard.css')}}?v=1.0.3" rel="stylesheet" />



    {{--      chart cdn--}}
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    {{--    bootstrap--}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.css" rel="stylesheet"/>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js"></script>

    {{--    style of dashboard --}}
    <link rel="stylesheet" href="{{asset('css/dashboard.css')}}">

    {{--    style of profile only --}}
    <link rel="stylesheet" href="{{asset('css/profile.css')}}">


    {{--    material link --}}
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    {{--    font awesome link--}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


{{--    sweatalert --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="{{asset('js/clearchash.js')}}"></script>
</head>
<body>

<div class="dashboard">


