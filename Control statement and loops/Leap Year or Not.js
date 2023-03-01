var year=1900;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("This year is leap year");
        }else{
            console.log("This year is not a leap year");
        }
    }else{
    console.log("This year is  a leap year");

}
        }else{
            console.log("This year is not a leap year");
}
