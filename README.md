Certificate Verification System
Overview

The Certificate Verification System is a web-based application designed to verify the authenticity of issued certificates. The system allows users to search and validate certificates using a unique certificate ID stored in a database. It helps organizations prevent certificate fraud and enables quick verification of issued credentials.

This project demonstrates how certificate information can be securely stored and verified through a simple web interface.

Features

User authentication system

Certificate verification using a unique certificate ID

Secure database storage of certificate details

Simple and user-friendly interface

Admin functionality to add certificate data

Fast certificate validation

Tech Stack

Frontend

HTML

CSS

JavaScript

Backend

PHP

Database

MySQL

Tools

phpMyAdmin

XAMPP / Localhost server

Project Structure
Certificate-Verification
│
├── add.php
├── authentication.php
├── certification_authenticate_from_db.php
├── config.php
├── login.php
├── style.css
├── styleadd.css
├── details.sql
├── users.sql
└── README.md
Installation

Clone the repository

git clone https://github.com/ShreuChaudhari/Certificate-Verification.git

Move the project folder to your server directory

Example for XAMPP:

xampp/htdocs/

Import the database

Open phpMyAdmin

Create a new database

Import the SQL files:

details.sql

users.sql

Configure the database connection

Edit config.php and update the database credentials:

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

Start Apache and MySQL in XAMPP.

Open the project in your browser:

http://localhost/Certificate-Verification
Usage

Login using the authentication system.

Enter the certificate ID in the verification field.

The system searches the database for the certificate.

If the certificate exists, its details are displayed.

If the certificate is not found, it will show an invalid result.

Use Cases

Academic certificate verification

Training or internship certificate validation

Organization-issued certificate authentication

Preventing fake certificate submissions

Future Improvements

QR code-based verification

Digital certificate generation

Role-based admin dashboard

API integration for external verification

Blockchain-based certificate storage

License

This project is for educational and demonstration purposes.
