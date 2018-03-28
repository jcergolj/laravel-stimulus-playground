<div data-controller="flash"
     class="alert alert-flash @if(!session()->has('flash')) hide @endif"
     data-flash-level="{{ session('flash')['level'] ?? '' }}"
     data-target="flash.flash"
     role="alert"
>
    {{ session('flash')['message'] ?? '' }}
</div>