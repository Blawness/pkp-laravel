<?php

it('redirects the root URL to the login page', function () {
    $response = $this->get('/');

    $response->assertRedirect('/login');
});
