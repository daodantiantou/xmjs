/*
* @Author: Administrator
* @Date:   2018-07-20 13:31:52
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-26 18:06:23
*/
window.onload=function (){
	//购物车
	let nav3=document.getElementsByClassName("nav3")[0];
	let a=nav3.getElementsByTagName("a")[0];
	let nav3box=document.getElementsByClassName("nav3box")[0];
	
	a.onmouseenter=function(){
		nav3box.style.height="98px";
		nav3box.style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
	}
	a.onmouseleave=function(){
		nav3box.style.height="0px";
		nav3box.style.boxShadow="none";
	}



	//侧导航
	let aside=document.getElementsByClassName('aside')[0];
	let li=aside.getElementsByTagName('li')
	let asidebox=document.getElementsByClassName('asidebox');

	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			for(j=0;j<asidebox.length;j++){
				asidebox[j].style.display="none";
				li[j].style.background="none";
			}
			asidebox[i].style.display="block";
			li[i].style.background="#ff6700";
		}



		li[i].onmouseleave=function(){
			asidebox[i].style.display="none";
			li[i].style.background="none";
		}
	}
	
	//家电
	let jiadian=document.getElementsByClassName('jiadian')[0];
	let top=jiadian.getElementsByClassName('top')[0]
	let span=top.getElementsByTagName('span');
	let rightbox=jiadian.getElementsByClassName('rightbox');

	for(let i=0;i<span.length;i++){
		span[i].onmouseenter=function(){
			for(let j=0;j<rightbox.length;j++){
			rightbox[j].style.display="none";
			span[j].style.color="#000";
			span[j].style.borderBottom="none";
		}
			rightbox[i].style.display="block";
			span[i].style.color="#ff6700";
			span[i].style.borderBottom="2px solid #ff6700";
		}
	}
			
	//neir
	function hanshu(canshu){
		
		let top=canshu.getElementsByClassName('top')[0]
		let span=top.getElementsByTagName('span');
		let rightbox=canshu.getElementsByClassName('rightbox');


			for(let i=0;i<span.length;i++){
			span[i].onmouseenter=function(){
				for(let j=0;j<rightbox.length;j++){
				rightbox[j].style.display="none";
				span[j].style.color="#000";
				span[j].style.borderBottom="none";
			}
				rightbox[i].style.display="block";
				span[i].style.color="#ff6700";
				span[i].style.borderBottom="2px solid #ff6700";
			}
		}
	}
let zhineng=document.getElementsByClassName('zhineng')[0];
let dapei=document.getElementsByClassName('dapei')[0];
let peijian=document.getElementsByClassName('peijian')[0];
let zhoubian=document.getElementsByClassName('zhoubian')[0];




	hanshu(zhineng);
	hanshu(dapei);
	hanshu(peijian);
	hanshu(zhoubian);
	
	//头部导航
	let biglogo=document.getElementsByClassName('biglogo')[0];
	let navbox=biglogo.getElementsByClassName('navbox');
	let spanbox=biglogo.getElementsByClassName('spanbox');
	let span1=biglogo.getElementsByTagName('span');
	let dingwei=biglogo.getElementsByClassName('dingwei');

	

	for(let i=0;i<span1.length;i++){
		dingwei[i].onmouseenter=function(){
			for(let j=0;j<span1.length;j++){
				navbox[j].style.display="none";
			}
			navbox[i].style.display="block";
			navbox[i].style.height="179px";
			navbox[i].style.borderBottom="1px solid #ECECEC";
			navbox[i].style.borderTop="1px solid #ECECEC";
			navbox[8].style.display="none";
			navbox[9].style.display="none";
		}
	}

	for(let i=0;i<span1.length;i++){
		dingwei[i].onmouseleave=function(){
			navbox[i].style.height="0px";
			navbox[i].style.borderBottom="none";
			navbox[i].style.borderTop="none";
		}
	}



	let wraper=document.getElementsByClassName('wraper')[0];
	let banner=document.getElementsByClassName('banner')[0];
	let zuohua=banner.getElementsByClassName('zuohua')[0];
	let youhua=banner.getElementsByClassName('youhua')[0];
	let btns=document.getElementsByClassName('btns')[0];
    let btn=btns.getElementsByClassName('btn');
	let a3=wraper.getElementsByTagName('a');

	let t=setInterval(fn,2000)
	let num=0;
	function fn(){
		num++;
		if(num==a3.length){
			num=0;
		}
		for(let i=0;i<a3.length;i++){
				a3[i].style.zIndex='5';
				btn[i].className="btn";
			}
		a3[num].style.zIndex="10";
		btn[num].className="btn btn1";
		
	}

	function fn1(){
		num--;
		if(num<0){
			num=a3.length-1;
		}
		for(let i=0;i<a3.length;i++){
				a3[i].style.zIndex='5';
				btn[i].className="btn";
			}
		a3[num].style.zIndex="10";
		btn[num].className="btn btn1";
		
	}
	banner.onmouseenter=function(){
			clearInterval(t);
		}
	banner.onmouseleave=function(){
		t=setInterval(fn,2000);
	}
    zuohua.onclick=function(){
    	fn1();
    }
    youhua.onclick=function(){
    	fn();
    }

    for(let i=0;i<btn.length;i++){
    	btn[i].onclick=function(){
    		for(let j=0;j<btn.length;j++){
    			a3[j].style.zIndex="5";
    			btn[j].className="btn";
    		}
    		a3[i].style.zIndex="10";
    		btn[i].className="btn btn1";
    		num=i;
    	}

    }
    

function sxb(can){
	let nrdw=can.querySelectorAll('.nrdw');
	let span4=can.querySelectorAll('.dian span')
	let zuodian=can.querySelector('.zuodian')
	let youdian=can.querySelector('.youdian')
	let widths=parseInt(getComputedStyle(nrdw[1],null).width)

	let now=0;
	let next=0;
	let flag=true;
	function fn2(){
		next++;
		if(next==nrdw.length){
			next=0;
		}
		nrdw[next].style.left=widths+'px';
		animate(nrdw[now],{left:-widths},callback);
		animate(nrdw[next],{left:0},callback);
		span4[next].classList.add('hto');
		span4[now].classList.remove('hto');
		
		now=next;
	}
	function fn3(){
		next--;
		if(next<0){
			next=nrdw.length-1;
		}
		nrdw[next].style.left=-widths+'px';
		animate(nrdw[now],{left:widths},callback);
		animate(nrdw[next],{left:0},callback);
		span4[next].classList.add('hto');
		span4[now].classList.remove('hto');
		now=next;
	}
	zuodian.onclick=function(){
		if(flag==false){
			return;
		}
		if(next==0){
			return;
		}
		flag=false;
		fn3();
	}
	youdian.onclick=function(){
		if(flag==false){
			return;
		}
		if(next==nrdw.length-1){
			return;
		}
		flag=false;
		fn2();
	}
	for(let i=0;i<span4.length;i++){
		span4[i].onclick=function(){
			if(i==now){
				return;
			}
			if(i<now){
				nrdw[i].style.left=-widths+'px';
				animate(nrdw[now],{left:widths},callback);
				animate(nrdw[i],{left:0},callback);
			}
			if(i>now){
				nrdw[i].style.left=widths+'px';
				animate(nrdw[now],{left:-widths},callback);
				animate(nrdw[i],{left:0},callback);

			}
			span4[i].classList.add('hto');
			span4[now].classList.remove('hto');
			now=next=i;
		}
	}
	function callback(){
		flag=true;
	}
}

let li1=document.querySelector('.neirong li:nth-child(1)')
let li2=document.querySelector('.neirong li:nth-child(2)')
let li3=document.querySelector('.neirong li:nth-child(3)')
let li4=document.querySelector('.neirong li:nth-child(4)')
sxb(li1);
sxb(li2);
sxb(li3);
sxb(li4);
/*let nrdw=can.querySelectorAll('.nrdw');
let span4=can.querySelectorAll('.dian span')
let zuodian=can.querySelector('.zuodian')
let youdian=can.querySelector('.youdian')
let widths=parseInt(getComputedStyle(nrdw[1],null).width)

let now=0;
let next=0;
let flag=true;
function fn2(){
	next++;
	if(next==nrdw.length){
		next=0;
	}
	for(let i=0;i<nrdw.length;i++){
		span4[i].classList.remove('hto');
	}
	nrdw[next].style.left=widths+'px';
	animate(nrdw[now],{left:-widths},callback);
	animate(nrdw[next],{left:0},callback);
	span4[next].classList.add('hto');
	now=next;
}
function fn3(){
	next--;
	if(next<0){
		next=nrdw.length-1;
	}
	for(let i=0;i<nrdw.length;i++){
		span4[i].classList.remove('hto');
	}
	nrdw[next].style.left=-widths+'px';
	animate(nrdw[now],{left:widths},callback);
	animate(nrdw[next],{left:0},callback);
	span4[next].classList.add('hto');
	now=next;
}
zuodian.onclick=function(){
	if(flag==false){
		return;
	}
	if(next==0){
		return;
	}
	flag=false;
	fn3();
}
youdian.onclick=function(){
	if(flag==false){
		return;
	}
	if(next==nrdw.length-1){
		return;
	}
	flag=false;
	fn2();
}
for(let i=0;i<span4.length;i++){
	span4[i].onclick=function(){
		for(j=0;j<span4.length;j++){
			span4[j].classList.remove('hto');
		}
		if(i==now){
			return;
		}
		if(i<now){
			nrdw[i].style.left=-widths+'px';
			animate(nrdw[now],{left:widths},callback);
			animate(nrdw[i],{left:0},callback);
		}
		if(i>now){
			nrdw[i].style.left=widths+'px';
			animate(nrdw[now],{left:-widths},callback);
			animate(nrdw[i],{left:0},callback);
		}
		span4[i].classList.add('hto');
		now=next=i;
	}
}
function callback(){
	flag=true;
}*/
//闪购



let sgdw=document.querySelector('.sgdw')
let sgdwa=document.querySelectorAll('.sgdw a')
let sgdj=document.querySelectorAll('.xmshangou .title a')
let widows1=parseInt(getComputedStyle(sgdw,null).width)/2;

let time=0;
sgdj[0].onclick=function(){
	time++;
	if(time==2){
		time=1;
	}
	sgdw.style.transform=`translate(${-widows1*time}px)`;
	sgdj[0].style.background='#ccc';
	sgdj[1].style.background='#fff';
	

}
sgdj[1].onclick=function(){
	time--;
	if(time==-1){
		time=0;
	}
	sgdw.style.transform=`translate(${-widows1*time}px)`;
	sgdj[1].style.background='#ccc';
	sgdj[0].style.background='#fff';
}


//为你推荐
let tja=document.querySelectorAll('.tuijian .title a')
let bodydw=document.querySelector('.bodydw')
let tjli=document.querySelectorAll('.bodydw li')
let tjwidth=parseInt(getComputedStyle(bodydw,null).width)/4;


let time1=0;
tja[0].onclick=function(){
	time1++;
	if(time1<=1 && time<4){
		tja[0].style.background='#fff';
		tja[1].style.background='#fff';
	}
	if(time1==4){
		time1=3;
		tja[0].style.background='#ccc';
		tja[1].style.background='#fff';
	}
	bodydw.style.transform=`translate(${-tjwidth*time1}px)`;
}
tja[1].onclick=function(){
	time1--;
	if(time1<3 && time1>0){
		tja[0].style.background='#fff';
		tja[1].style.background='#fff';
	}
	if(time1==-1){
		time1=0;
		tja[1].style.background='#ccc';
		tja[0].style.background='#fff';
	}
	bodydw.style.transform=`translate(${-tjwidth*time1}px)`;
}







//倒计时

	
	

	djs();
    setInterval(djs,1000);


    function djs() {
        let now=new Date();
        let future=new Date(2018,9,1);
        let sjc=future.getTime()-now.getTime();
        let arr=[];
        let miao=Math.floor(sjc/1000);
        let yue=Math.floor(miao/(30*24*60*60));
        let time=miao%(30*24*60*60);
        let ri=Math.floor(time/(24*60*60));
        time=time%(24*60*60);
        let shi=Math.floor(time/(60*60));
        time=time%(60*60);
        arr.push(shi);
        let fen=Math.floor(time/60);
        time=time%60;
        arr.push(fen);
        arr.push(time);
        let djsbox=document.querySelectorAll('.djs');
        djsbox.forEach(function (element,index) {
        	if(arr[index]<10){
        		arr[index]='0'+arr[index];
        	}
            element.innerText=arr[index];
        })

    }







    
}