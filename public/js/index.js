
setInterval(function () {
    var leftmonths=moment("2018-12-30").countdown().months; 
    var leftdays=moment("2018-12-30").countdown().days; 
    var lefthours=moment("2018-12-30").countdown().hours;
    var leftminutes=moment("2018-12-30").countdown().minutes; 
    var leftseconds=moment("2018-12-30").countdown().seconds;
    if(leftmonths==0){leftmonths="00"};
    if(leftdays==0){leftdays="00"};
    if(lefthours==0){lefthours="00"};
    if(leftminutes==0){leftminutes="00"};
    if(leftseconds==0){leftseconds="00"};

    document.getElementById('countdown').innerHTML=`${leftdays}d:${lefthours}h:${leftminutes}m:${leftseconds}s`;
},1000);