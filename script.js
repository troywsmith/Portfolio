body {
    font-family: 'Pinyon Script', cursive;
    background-color: black;
    color: white;
    text-align: center;
}

header {
    font-size: 40px;
}

table { 
    border-collapse: collapse; 
    border-spacing: 0; 
}
      
#board { 
    padding: 0px; 
    margin: 0 auto; 
    margin-top: 25px; 
}
      
#board tr td { 
    width: 80px; 
    height: 80px; 
    border: 1px solid white; 
    font-family: Helvetica; 
    font-size: 30px; 
    text-align: center; 
}

#board tr td:hover {
    background-color: yellow;
}

.instructions{
    margin: 10px;
}

button {
    background-color: blue;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

button:hover {
    background-color: blue;
    color: black;
}

.bottomnav {
    width: 100%;
    height: 50px;
    bottom: 100px;
    text-align: center;
}

@media (min-height: 600px) {
    .bottomnav {
        position: fixed;
    }
}

.bottomnav a {
    text-align: center;
    font-size: 20px;
    display: inline-block;
    margin: 10px;
    justify-content: space-around;
    color: blue;
}

.bottomnav a:hover {
    background-color: blue;
    color: black;
}