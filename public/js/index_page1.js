
setInterval(function () {
    var leftmonths=moment("2019-02-02").countdown().months; 
    var leftdays=moment("2019-02-02").countdown().days; 
    var lefthours=moment("2019-02-02").countdown().hours;
    var leftminutes=moment("2019-02-02").countdown().minutes; 
    var leftseconds=moment("2019-02-02").countdown().seconds;
    if(leftmonths==0){leftmonths="00"};
    if(leftdays==0){leftdays="00"};
    if(lefthours==0){lefthours="00"};
    if(leftminutes==0){leftminutes="00"};
    if(leftseconds==0){leftseconds="00"};
    //if(leftmonths>0 && leftdays>0 && lefthours>0 && leftminutes>0 && leftseconds>0)
    //{
        document.getElementById('countdown').innerHTML=`${leftdays}d:${lefthours}h:${leftminutes}m:${leftseconds}s`;
    //}
    /*else
    {
        document.getElementById('countdown').innerHTML=`Enjoy The Fest !!`;   
    }*/
},1000);