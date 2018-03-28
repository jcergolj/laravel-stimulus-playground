<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        
        <style>
            .hide {
                display:none;
            }

            .alert-flash {
                position: fixed;
                right: 25px;
                bottom: 25px;
                z-index: 1000;
            }

        </style>
    </head>
    <body>
        <div class="content-wrapper" style="margin-left:0">
            <div data-controller="hello">
                <button data-action="click->hello#showMessage">
                    Show
                </button>
            </div>
            
            @include('flash')
        </div>
        
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
