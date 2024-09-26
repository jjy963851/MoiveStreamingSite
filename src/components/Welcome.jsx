import Plx from 'react-plx';

export default function Welcome(){

    const date = new Date();
    const day = date.getDay();
    var today ="";
    const Year = date.getFullYear();
    
    if(day === 0){
        today = "Sunday";
    }else if(day === 1){
        today = "Monday";

    }else if(day === 2){
        today = "Tuesday";
        
    }else if(day === 3){
        today = "Wendsday";
        
    }else if(day === 4){
        today = "Thursday";
        
    }else if(day === 5){
        today = "Friday";
        
    }else{
        today = "Saturday"
    }
    
 

    return(
        <div className="welcome-container">
            <h1>
                Welcome to Video Streaming Site
            </h1>
            <h2>
                {`${Year}`}
            </h2>
            <h3>
                {`${today}`}
            </h3>

           <div className="button">
                Check out
           </div>
     
        </div>
    );
}