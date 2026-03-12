# **Certificate Verification System**

## **Introduction**

This project is titled **Certificate Verification System**.  
It is a web-based application designed to verify the authenticity of certificates using a **unique certificate ID stored in a database**.

The main goal of this system is to prevent certificate forgery and allow organizations or users to **quickly validate certificates online**.

---

## **Overview**

The **Certificate Verification System** allows users to check whether a certificate is genuine or not.

Users simply enter a **certificate ID**, and the system searches the database to confirm whether the certificate exists. If the certificate is valid, its details are displayed to the user.

This makes the verification process **simple, fast, and reliable**.

---

## **Features**

The system includes several important features:

- **User Authentication**  
  Ensures that only authorized users can access the system.

- **Certificate Verification**  
  Users can verify certificates by entering a **unique certificate ID**.

- **Database Integration**  
  Certificate details are securely stored in a **MySQL database**.

- **Simple User Interface**  
  The interface is designed to be **clean and easy to use**.

- **Admin Certificate Management**  
  Administrators can add certificate records to the system.

---

## **Technology Stack**

The following technologies were used to build this project.

**Frontend**
- **HTML**
- **CSS**
- **JavaScript**

**Backend**
- **PHP**

**Database**
- **MySQL**

**Development Tools**
- **XAMPP**
- **phpMyAdmin**

---

## **Project Structure**
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


---

## **Installation Guide**
### **Step 1: Clone the Repository**
git clone https://github.com/ShreuChaudhari/Certificate-Verification.git

### **Step 2: Move the Project Folder**

Move the cloned folder into your local server directory.

Example for **XAMPP**:
xampp/htdocs/

### **Step 3: Import the Database**

1. Open **phpMyAdmin**.
2. Create a **new database**.
3. Import the following SQL files:
details.sql
users.sql

---

### **Step 4: Configure Database Connection**

Open **config.php** and update the database credentials if required.
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";
---

### **Step 5: Start the Server**

Start the following services in **XAMPP**:

- **Apache**
- **MySQL**

---

### **Step 6: Run the Project**

Open your browser and visit:
http://localhost/Certificate-Verification

---

## **How the System Works**

1. The user logs into the system.
2. The user enters a **certificate ID** in the verification field.
3. The system searches the **database** for the certificate.
4. If the certificate exists, its **details are displayed**.
5. If the certificate does not exist, the system shows an **invalid certificate message**.

---

## **Use Cases**

This system can be used for:

- **Academic certificate verification**
- **Internship certificate validation**
- **Training program certificates**
- **Organization-issued credentials**
- **Preventing fake certificate submissions**

---

## **Future Enhancements**

Possible improvements for this project include:

- **QR Code based certificate verification**
- **Automated certificate generation**
- **Admin dashboard with analytics**
- **API integration for external verification**
- **Blockchain-based certificate storage**

---

## **License**

This project is created for **educational and demonstration purposes**.
