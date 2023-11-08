let x = 0;
let y = 15;

function rekurencja(x,y){
    if(y > x){
        console.log(y);
        rekurencja(x,y-1);   
    }
     
}

rekurencja(x,y);