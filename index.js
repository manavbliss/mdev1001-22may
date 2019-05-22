const sqlite3 =require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){   

    db.run(" CREATE TABLE Instructor(ID NUMBER, Name TEXT, Dept_name,Salary NUMBER)");

    db.run("INSERT INTO Instructor VALUES()")
 });