 Introduction to what is Ecma & Versions of JavaScript
// https://www.ecma-international.org/
// EcmaScript
// ES5
// ES6
// ...
 Introduction to JavaScript -
    // 1) JS is client-side Scripting Language.
    // 2) It was first named as 'Mocha' , then renamed to "LiveScript".
    // 3) Java was popular at that time , so it was decided that positioning a language as a "YOUNGER BROTHER" of JAVA would help, so it was again renamed to "JavaScript".
    // 4) Java and JavaScript are totally different Programming Language.


    "INTERNAL-WAY" TO LINK JavaScript -

< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>

                        <script>
                            JavaScript code goes here
                        </script>
                    </head>
                    <body>
                        <p>We can write Script tag just before <strong>closing</strong> of head OR body tags</p>
                    </body>
                </html>


                "EXTERNAL-WAY" TO LINK JavaScript-

                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Document</title>

                                    {/* link of your JS document, can link more then 1 JavaScript files */}
                                    <script src="index.js"></script>
                                    <script src="app.js"></script>
                                </head>
                                <body>
                                    <p>It is best practice to attatch script tag just before <strong>Closing</strong>of body tag </p>
                                </body>
                            </html>


                            {/* // write() - function in JavaScript */}
                            document.write();
                            // This Function is Used to write arbitary HTML and content into page, If we use this function on fully loaded HTML document it will delete exixting HTML. IT is used only for testing purpose.

                            Ex :-
                            document.write("Hello World");
                            {/* // Output : Hello World */}

                            document.write(4+2);
                            {/* // Output : 6 */}

                            let variable1 = "Let's Learn JavaScript!"
                            document.write("Hello World, <br> + variable1 + <br>")
                                {/* // Output : Hello World, Let's Learn JavaScript */}




                                { /* alert() - function in JavaScript */}
                                window.alert();
                                // This function is used to display data in alret dialog box. alert really Should be only used when you truly want  to stop everything and let the user know something


                                Ex :-
                                window.alert("Please Read the Terms & Conditions");
                                {/* // Output :Please Read the Terms & Conditions */}

                                window.alert(4+2);
                                {/* // Output : 6 */}

                                var variable2="This is alert-box , you cannot use html tags like <br>.. etc in this box"
                                    windows.alert("Hello World " + variable2);
                                    {/* Output : Hello World This is alert-box , you cannot use html tags like <br>.. etc in this box */}


