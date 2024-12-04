<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_encode([
        'name' => $_POST['name'],
        'phone' => $_POST['phone'],
        'guests' => $_POST['guests']
    ]);

    $url = "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzgMo1J3EVIuk6A_Hl5taFuPxEPsnT6V9XJHhEP682hYXkjiq28Ur4gZEenNWzLolIS/exec";

    $options = [
        "http" => [
            "header"  => "Content-type: application/json\r\n",
            "method"  => "POST",
            "content" => $data
        ]
    ];

    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);

    echo $response;
}