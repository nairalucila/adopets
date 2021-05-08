const express = require('express');

const handlers = [
    express.json(),
    express.urlencoded({ extended: false })
]

module.exports = handlers;