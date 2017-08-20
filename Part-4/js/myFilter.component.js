// create custom filter function
app.filter('activenes', function() {
    return function(activenes) {
        switch(activenes) {
            case 1:
                return 'Active';
                break;
            case 2:
                return 'Unactive';
                break;
            case 3:
                return 'Sometime Active';
                break;
            case 4:
                return 'Unactive';
                break;
        }
    };
});