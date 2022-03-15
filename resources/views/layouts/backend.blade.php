<!DOCTYPE html>
<html lang="en">
@include('partials.frontend.head')
<body>
@include('partials.frontend.header')

<div id="app">
    @yield('content')
</div>

@include('partials.frontend.footer')
@include('partials.frontend.scripts')
</body>


