@yield('script')
<script>
    window.csrf = "{{ csrf_token() }}"
</script>
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/jquery.scrollUp.min.js') }}"></script>
<script src="{{ asset('js/price-range.js') }}"></script>
