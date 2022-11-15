window.onload = country; 
    let context = document.getElementById("cities");
    
    function country (){
        button = document.querySelectorALL("lookup");
        button.forEACH(button => 
            button.onclick = function(event){
                event.preventDefault();

        let result = document.getElementById("result");
        let countries = document.getElementById("country");

        if (button.id === "cities)"){
            context = "cities";
        }
        else{
            context = "";
        }

        fetch(`http://localhost/info2180-lab5/world.php = ${countries} &context = ${context}`)
        //

    });
};
