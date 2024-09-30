<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "praveenkumarselvan02@gmail.com"; // Replace with your email

    // Set email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Set email body
    $email_body = "You have received a new message from $name.\n\n".
                  "Here are the details:\n\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Subject: $subject\n\n".
                  "Message:\n$message";

    // Set the email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, your message could not be sent.";
    }
}
?>
