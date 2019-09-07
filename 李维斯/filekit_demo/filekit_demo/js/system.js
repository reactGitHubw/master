var System = function(){}

System.debug = false;
System.targets = [];

System.timer = null;
System.lastTS = 0.0;

System.addToRunLoop = function(target)
{
    if(System.timer == null)
    {
        System.lastTS = (new Date()).getTime();
        System.timer = window.setInterval(System.onFire,10);
    }

    if(System.targets == null)
        System.targets = new Array();

    var existed  = false;
    $.each(System.targets,function(i,item)
    {
        if(item['target'] == target)
        {
            existed = true;
            return false;
        }
    });

    if(existed) return;
    System.targets.push({"target":target,"ts":(new Date).getTime()});
}


System.onFire = function()
{
    var currentTS = (new Date).getTime();
    for(var i = 0;i < System.targets.length;i++)
    {
        var item = System.targets[i];
        item["target"].fire.call(item["target"],(currentTS - item["ts"])/1000.0,(currentTS - System.lastTS)/1000.0);
    }

    System.lastTS = currentTS;
}

System.removeFromRunLoop = function(target)
{
    for(var i = 0;i < System.targets.length;i++)
    {
        if(System.targets[i]["target"] == target)
        {
            System.targets.splice(i,1);
            break;
        }
    }
}

System.log = function(message)
{
    if(this.debug)
    {
        try{
            window.console.log(message);
        }catch(err){}
    }
}

System.processIOError = function(path)
{
    System.log("Can't fetch data from:" + path);
}

System.isTouchDevice = function ()
{
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    return isTouchDevice;
}