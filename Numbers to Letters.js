https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

    function switcher(x){
        let b = "";
        let alp = "0zyxwvutsrqponmlkjihgfedcba!? ";
        for(let i = 0; i < x.length; i++){
            b += alp[+x[i]];
        }
        return b;

    }