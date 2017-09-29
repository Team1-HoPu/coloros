



(function(win){
function Mixed(config){
    this.config = config;
    this.container = this.config.container;
    this.render();
}
Mixed.prototype= {
constructor:Mixed,
render:function(){
    var tem = document.createDocumentFragment();                               //文档碎片
for(var i = 0;i<this.config.title.length;i++){
    var list = document.createElement("div");
    list.className = "download_box";
    list.style.width = this.config.width;
    list.style.height = this.config.height;
    list.innerHTML = "<img class='phone' src='"+this.config.src[i]+"'><h3>"+this.config.title[i]+"</h3><p>"+this.config.content[i]+"</p><button class='btn'>立即下载</button>";
    tem.appendChild(list);
    var qrcodebox = document.createElement("div");
    qrcodebox.className = "qrcode-box";
    qrcodebox.style.width = this.config.qrcodebox.qrcodebox_width;
    qrcodebox.style.height = this.config.qrcodebox.qrcodebox_height;
    qrcodebox.style.position = "absolute";
    qrcodebox.style.left = "0px";
    qrcodebox.style.top = "0px";
    qrcodebox.style.background = "#ffffff";
    qrcodebox.style.display = "none";
    qrcodebox.innerHTML = "<img class='img' src='"+this.config.qrcodebox.img_src[0]+"'><h3>"+this.config.qrcodebox.title[i]+"</h3><p>"+this.config.qrcodebox.content[0]+"</p> ";
    list.appendChild(qrcodebox);
}
this.container[0].appendChild(tem);
}
};
win["Mixed"] = Mixed;
})(window);
