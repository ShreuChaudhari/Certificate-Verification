*Certificate Verification System*

**Overview**

The Certificate Verification System is a web-based application that allows users to verify the authenticity of issued certificates. The system enables verification using a unique certificate ID, which is matched with records stored in a database.

This project helps organizations ensure that certificates issued by them are genuine and can be easily verified online. It reduces the risk of certificate forgery and simplifies the validation process.

**Features**
1)User Authentication
Secure login system for authorized users.

2)Certificate Verification
Users can verify certificates using a unique certificate ID.

3)Database Integration
Certificate information is securely stored in a database.

4)Simple Interface
Clean and easy-to-use web interface.

5)Admin Certificate Management
Admin can add and manage certificate records.

6)Quick Verification
Instant validation of certificate authenticity.

**Technology Stack**

***Frontend***
1)HTML
2)CSS
3)JavaScript

***Backend***
1)PHP
2)Database
3)MySQL

***Tools Used***
1)XAMPP
2)phpMyAdmin

**Project Structure**
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

**Installation Guide**

*1. Clone the Repository*
git clone https://github.com/ShreuChaudhari/Certificate-Verification.git

*3. Move the Project Folder*
Move the cloned folder to your local server directory.
Example for XAMPP:
xampp/htdocs/

*3. Import the Database*
Open phpMyAdmin.
Create a new database.
Import the following SQL files:
details.sql
users.sql

4. Configure Database Connection
Open the config.php file and update the database credentials if necessary.

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

5. Start Local Server
Start the following services in XAMPP:
Apache
MySQL

6. Run the Project
Open your browser and go to:
http://localhost/Certificate-Verification

*How the System Works:*

1)The user logs into the system using authentication credentials.
2)The user enters a certificate ID in the verification form.
3)The system queries the database for the certificate record.
4)If the certificate exists, its details are displayed.
5)If the certificate does not exist, the system shows an invalid certificate message.

**Use Cases**

Academic Certificate Verification
Internship Certificate Validation
Training Program Certificates
Organizational Credential Authentication
Preventing Fake Certificates

**Future Enhancements**

Possible improvements for the project include:
QR Code-based certificate verification
Automated certificate generation
Admin dashboard with analytics
API integration for external verification
Blockchain-based certificate storage

**License**
This project is created for educational and demonstration purposes.
