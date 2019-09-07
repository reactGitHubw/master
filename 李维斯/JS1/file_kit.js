var FileKit = function($container)
{
    var self = this;
    self.swfPath = $container.attr("swf-path");
    if(typeof($container.attr('max-size')) != 'undefined')
    {
        self.maxSize = Number($container.attr("max-size"));
    }
    self.dispatcher = $("<div></div>")

    if(FileKit.flashAvaliable())
    {
        self.handler = new FlashFileHandler($container,self.swfPath,self);
    }else if(FileKit.fileReaderAvaliable()){
        self.handler = new JSFileHandler($container,self);
    }
}

FileKit.flashAvaliable = function()
{
    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if(fo) hasFlash = true;
    }catch(e){
        if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
    }

    return hasFlash;
}

FileKit.fileReaderAvaliable = function()
{
    return !(typeof FileReader === 'undefined');
}


var fkPT = FileKit.prototype;
fkPT.$container = null;

fkPT.dispatcher = null;
fkPT.id = null;
fkPT.swfPath = null;
fkPT.maxSize = 3000000;

fkPT.handler = null;

fkPT.bind = function(type,method)
{
    this.dispatcher.bind(type,method);
}

fkPT.trigger = function(type)
{
    this.dispatcher.trigger(type);
}

fkPT.imageInfo = function()
{
    if(this.handler == null)
        return null;

    return this.handler.imageInfo();
}

// on file changed.
fkPT.onFileSelected = function()
{
    this.trigger("selected");
}

fkPT.emptyFile = function()
{
    if(this.handler == null) return;
    this.handler.emptyFile();
}

/*****************************************************************************************************************FileHandler**/
var FileHandler = function(){};
var fhPT = FileHandler.prototype;

fhPT.$view = null;
fhPT.delegate = null;

fhPT.data = null;
fhPT.filename = null;
fhPT.extension = null;

fhPT.emptyFile = function(){}

fhPT.imageInfo = function()
{
    return {"filename":this.filename,
            "extension":this.extension,
            "data":this.data};
}

fhPT.dispose = function()
{
    this.data = null;
    this.filename = null;
    this.extension = null;
    this.$view = null;
    this.delegate = null;
}

/*****************************************************************************************************************FlashFileHandler**/
var FlashFileHandler = function($container,swfPath,delegate)
{
    var self = this;

    self.swfPath = swfPath;
    self.delegate = delegate;
    self.id = 'ffh_' + (new Date).getTime();
    FlashFileHandler.handlers[self.id] = self;

    self.$view = $("<div></div>");
    self.$view.attr("id",self.id);
    self.$view.css("width","100%");
    self.$view.css("height","100%");

    self.$container = $container;
    $container.empty();
    $container.append(self.$view);

    if($("[id="+ self.id + "]").length > 0)
    {
        self.addSWF($container);
    }else{
        System.addToRunLoop(self);
    }
}

FlashFileHandler.handlers = {};

FlashFileHandler.prototype = new FileHandler();
var ffhPT = FlashFileHandler.prototype;
ffhPT.parent = FileHandler.prototype;

ffhPT.id = null;
ffhPT.swfPath = null;
ffhPT.delegate = null;
ffhPT.$container = null;

ffhPT.$swf = function()
{
    return $("object[id=" + this.id +"]");
}


ffhPT.fire = function(eslape,step)
{
    if($("[id="+ this.id + "]").length > 0)
    {
        this.addSWF(this.$container);
        System.removeFromRunLoop(this);
    }
}

ffhPT.addSWF = function($container)
{
    var self = this;

    var flashvars = {"handlerid":self.id,'maxsize':self.delegate.maxSize};
    var params = {"menu":"flase",
                  "allowscriptaccess":"always",
                  "scaleMode":"noscale",
                  "wmode":"transparent"};
    var attributes = {};
    swfobject.embedSWF(self.swfPath,
                       self.id,
                       "100%", "100%",
                       "10.1.0","js/expressinstall.swf",
                       flashvars, params, attributes);
}


ffhPT.onDataLoaded = function(data)
{
    this.data = data['data'];
    this.filename = data['filename'];
    this.extension = data["extension"];

    if(this.delegate != null)
        this.delegate.onFileSelected();
}

ffhPT.dispose = function()
{
    var self = this;
    swfobject.removeSWF(self.id)
    FlashFileHandler[self.id] = null;
}

/*****************************************************************************************************************JSFileHandler**/
var JSFileHandler = function($container,delegate)
{
    var self = this;
    self.delegate = delegate;

    self.$view = $("<input/>");
    self.$view.attr("type","file");
    self.$view.attr("accept","image/*");
    self.$view.css({"padding":"0","margin":"0",
                    "width":"100%","height":"100%",
                    "opacity":0.0,"display":"block"});

    self.$view.change(function(){self.onFileSelect();});

    $container.empty();
    $container.append(self.$view);

    self.parent.constructor.call(self);
}

JSFileHandler.prototype = FileHandler.prototype;
var jfhPT = JSFileHandler.prototype;
jfhPT.parent = FileHandler.prototype;

jfhPT.onFileSelect = function()
{
    var self = this;
    var file = self.$view[0].files[0];
    var imageType = /image.*/;

    if(!file.type.match(imageType))
    {
        alert("请选择正确的图片文件");
    }else if(file.size > this.delegate.maxSize){
        alert("请选择" + Math.floor(this.delegate.maxSize / 1024 / 1024) + "M以下的图片文件");
    }else{
        self.filename = file.name;
        self.extension = file.name.slice(file.name.lastIndexOf(".") + 1,file.name.length);

        var reader = new FileReader;
        reader.onload = function(){self.onFileDataLoaded(reader)};
        reader.readAsDataURL(file);
    }
}

jfhPT.onFileDataLoaded = function(reader)
{
    this.data = reader.result;
    if(this.delegate != null)
        this.delegate.onFileSelected();
}

jfhPT.emptyFile = function()
{
    this.$view.val('');
}