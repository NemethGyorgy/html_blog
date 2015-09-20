// Aktív menüpont beállítása.
$( ".nav.navbar-nav li a" ).each( function() {
    if ( location.href == this.href ) {
        $( this ).parent().addClass( "active" );
    }

    console.log( this.href );
} );