# Placement Cell
A nodejs web app to manage students and their placements and download interview reports.

Placement Cell

A company constantly needs to download their data to compile different reports. You need to create an interface for the employees of this company to fill in the data into the database and then download it in CSV format. 

Create a complete web application, not an API

Features: 
-	Team Career Camp wants to maintain a database of all the student interviews [only for their own use], for  this they store the following details:
-	Batch
-	Student Details (including college, status: [placed, not_placed])
-	Course Scores (including DSA Final Score, WebD Final Score, React Final Score)
-	Interviews (including company name and Date)
-	Results (this is a mapping between company, and student, contains result: [PASS, FAIL, On Hold, Didn’t Attempt])
-	Pages
    -	Sign Up and Sign In only for employees
    -	List of students + add new student (this is similar to adding and viewing posts in codeial)
    -	List of Interviews + form to create an interview (with date)
    -	Allocate a student to an interview
    -	Select an interview to view the list of all students and mark a result status from the list page itself

-	Download a complete CSV of all the data with the following columns:
    -	Student id, student name, student college, student status, DSA Final Score, WebD Final Score, React Final Score, interview date, interview company, interview student result
    -	A student can have multiple entries based on the interviews she/he has given

# Steps to load project

Project Usage: 
1. Install nodejs and mongodb
2. Inside main directory --- npm install
3. To start project --- npm start
4. Project will now be running on port 5000.

Note: To register, register with codingninjas.com domain, for  example - example@codingninjas.com, it won't require email authentication.
