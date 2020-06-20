
$(function(){

const allmateriallist = [];

function Aitemuforprototype(){
this.maxcounter = 0;
this.existcounter=0;
this.counter=0
this.needcounter=0;
}
Aitemuforprototype.prototype={
counterreset:function(){
Object.getPrototypeOf(this).counter=0;
Object.getPrototypeOf(this).needcounter=0;
this.materiallist.forEach(function(val){
val.counterreset();
})},
update:function(){
var exist =Object.getPrototypeOf(this).existcounter;
var counter = Object.getPrototypeOf(this).counter;
if(exist>0 && exist>counter){
this.exist=true;
Object.getPrototypeOf(this).counter++;
}else{
this.exist=false;
this.materiallist.forEach(function(val){val.update()});
}
Object.getPrototypeOf(this).needcounter++;
},

display:function(){
var procedure=$("#procedure");
var strarray = [];
 if(this.exist == false ){
   if(this.materiallist.every(function(val){return    (val.exist==true);})){
    console.log("you can make "+this.name);
var str=this.materiallist.map(function(val){return val.name;});
procedure.append("<br>"+str.join('+')+" -> " +this.name);
   }else{ 
   this.materiallist.forEach(function(val){val.display()})
   }
  }

//console.log(this);
}
}


function Aitemu(){
this.exist = false;
this.materiallist=[];
Object.getPrototypeOf(this).maxcounter++;
allmateriallist.push(this);
}

function Saikusitatetu(){
Aitemu.call(this);
}
Saikusitatetu.prototype=new Aitemuforprototype();
Saikusitatetu.prototype.name = "細工した鉄";

function Karanonenryoutanku(){
Aitemu.call(this);
this.materiallist = [new Saikusitatetu()];
}
Karanonenryoutanku.prototype=new Aitemuforprototype();
Karanonenryoutanku.prototype.name = "空の燃料タンク";


function Haganenonobebou(){
Aitemu.call(this);
}
Haganenonobebou.prototype=new Aitemuforprototype();
Haganenonobebou.prototype.name = "鋼の延べ棒";

function Tyuukuupisuton(){
Aitemu.call(this);
this.materiallist = [new Haganenonobebou()];
}
Tyuukuupisuton.prototype=new Aitemuforprototype();
Tyuukuupisuton.prototype.name="中空ピストン";

function Tiisaikassha(){
Aitemu.call(this);
this.materiallist = [new Haganenonobebou()];
}
Tiisaikassha.prototype=new Aitemuforprototype();
Tiisaikassha.prototype.name="小さい滑車";

function Ookiikassha(){
Aitemu.call(this);
this.materiallist = [new Haganenonobebou()];
}
Ookiikassha.prototype=new Aitemuforprototype();
Ookiikassha.prototype.name="大きい滑車";

function Roddo(){
Aitemu.call(this);
this.materiallist = [new Haganenonobebou()];
}
Roddo.prototype=new Aitemuforprototype();
Roddo.prototype.name="ロッド";


function Sirinda(){
Aitemu.call(this);
this.materiallist = [new Tyuukuupisuton()];
}
Sirinda.prototype=new Aitemuforprototype();
Sirinda.prototype.name="シリンダー";


function Seimitusirinda(){
Aitemu.call(this);
this.materiallist = [new Sirinda()];
}
Seimitusirinda.prototype=new Aitemuforprototype();
Seimitusirinda.prototype.name="精密シリンダー";


function Seimitupisuton(){
Aitemu.call(this);
this.materiallist = [new Tyuukuupisuton()];
}
Seimitupisuton.prototype=new Aitemuforprototype();
Seimitupisuton.prototype.name="精密ピストン";


function Paipu(){
Aitemu.call(this);
this.materiallist = [new Roddo()];
}
 Paipu.prototype=new Aitemuforprototype();
 Paipu.prototype.name="パイプ";


function Jakettoponnpu(){
Aitemu.call(this);
this.materiallist = [new Roddo()];
}
 Jakettoponnpu.prototype=new Aitemuforprototype();
 Jakettoponnpu.prototype.name="ジャケットポンプ";


function Haganenobarubu(){
Aitemu.call(this);
this.materiallist = [new Tyuukuupisuton()];
}
Haganenobarubu.prototype=new Aitemuforprototype();
Haganenobarubu.prototype.name="鋼のバルブ";


function Nennryounozuru(){
Aitemu.call(this);
this.materiallist = [new Paipu()];
}
Nennryounozuru.prototype=new Aitemuforprototype();
Nennryounozuru.prototype.name="燃料ノズル";


function Kamushafuto(){
Aitemu.call(this);
this.materiallist = [new Roddo()];
}
Kamushafuto.prototype=new Aitemuforprototype();
Kamushafuto.prototype.name="カムシャフト";


function Kurannkushafuto(){
Aitemu.call(this);
this.materiallist = [new Roddo()];
}
Kurannkushafuto.prototype=new Aitemuforprototype();
Kurannkushafuto.prototype.name="クランクシャフト";



function Funnshanozuru(){
Aitemu.call(this);
this.materiallist = [new Nennryounozuru(),new Haganenobarubu()];
}
Funnshanozuru.prototype=new Aitemuforprototype();
Funnshanozuru.prototype.name="噴射ノズル";



function Barubutukisirinndaheddo(){
Aitemu.call(this);
this.materiallist = [new Seimitusirinda(),new Haganenobarubu(),new Haganenobarubu()];
}
Barubutukisirinndaheddo.prototype=new Aitemuforprototype();
Barubutukisirinndaheddo.prototype.name="バルブ付きシリンダーヘッド";


function Sirinndaheddo(){
Aitemu.call(this);
this.materiallist = [new Barubutukisirinndaheddo(), new Funnshanozuru()];
}
Sirinndaheddo.prototype=new Aitemuforprototype();
Sirinndaheddo.prototype.name="シリンダーヘッド";


function Pisutonnhedo(){
Aitemu.call(this);
this.materiallist = [new Sirinndaheddo(),new Seimitupisuton()];
}
Pisutonnhedo.prototype=new Aitemuforprototype();
Pisutonnhedo.prototype.name="ピストンヘッド";

function Pisutonburokku(){
Aitemu.call(this);
this.materiallist = [new Pisutonnhedo(),new Pisutonnhedo()];
}
Pisutonburokku.prototype=new Aitemuforprototype();
Pisutonburokku.prototype.name="ピストンブロック";


function Kurannkukikou(){
Aitemu.call(this);
this.materiallist = [new Pisutonburokku(),new Kurannkushafuto()];
}
Kurannkukikou.prototype=new Aitemuforprototype();
Kurannkukikou.prototype.name="クランク機構";


function Kasshataimingukikou(){
Aitemu.call(this);
this.materiallist = [new Tiisaikassha(),new Ookiikassha()];
}
Kasshataimingukikou.prototype=new Aitemuforprototype();
Kasshataimingukikou.prototype.name="滑車タイミング機構";

function Kamutaimingukikou(){
Aitemu.call(this);
this.materiallist = [new Kasshataimingukikou(),new Kamushafuto()];
}
Kamutaimingukikou.prototype=new Aitemuforprototype();
Kamutaimingukikou.prototype.name="カムタイミング機構";



function Dhizeruenjinkikou(){
Aitemu.call(this);
this.materiallist = [new Kamutaimingukikou(),new Kurannkukikou()];
}
Dhizeruenjinkikou.prototype=new Aitemuforprototype();
Dhizeruenjinkikou.prototype.name="ディーゼルエンジン機構";


function Enjinnnennryousisutemu(){
Aitemu.call(this);
this.materiallist = [new Paipu(),new Karanonenryoutanku()];
}
Enjinnnennryousisutemu.prototype=new Aitemuforprototype();
Enjinnnennryousisutemu.prototype.name="エンジン燃料システム";


function Dhizeruenjin(){
Aitemu.call(this);
this.materiallist = [new Enjinnnennryousisutemu(),new Dhizeruenjinkikou()];
}
Dhizeruenjin.prototype=new Aitemuforprototype();
Dhizeruenjin.prototype.name="ディーゼルエンジン";


function Ponnpubarubu(){
Aitemu.call(this);
this.materiallist = [new Paipu(),new Jakettoponnpu()];
}
Ponnpubarubu.prototype=new Aitemuforprototype();
Ponnpubarubu.prototype.name="ポンプバルブ";


function Enjinnido(){
Aitemu.call(this);
this.materiallist = [new Dhizeruenjin(),new Ponnpubarubu()];
}
Enjinnido.prototype=new Aitemuforprototype();
Enjinnido.prototype.name="エンジン井戸";

const data = {
  message:'エンジン井戸'
};
var ido=new Enjinnido();
ido.display();

$('#msg').html(data.message);
console.log(data.message);



/*
$('#haganenonobebou').change(function () {
  var r = $('option:selected',this).val();
var name= $(this).prev()
console.log(name.text());
  console.log(r);
});
*/

$('select').change(function () {
var r = $('option:selected',this).val();
console.log(r);

var sp = $(this).prev();
var name = sp.text();

 var a = allmateriallist.find(i => Object.getPrototypeOf(i).name == name);
Object.getPrototypeOf(a).existcounter =Number(r);
ido.counterreset();
ido.update();
$("#procedure").text("");
ido.display();
});





});

