window.onload = function(){
	a = 0;
	checktext = setInterval(function(){
		text=document.getElementById('searchline').value;
		line=document.getElementById('searchline');
		icon=document.getElementById('icosearch');
		if(!text == false){
			icon.style.borderColor = "#9ad3ffb3";
			line.style.borderColor = "#9ad3ffb3";
		}else{
			icon.style.borderColor = '';
			line.style.borderColor = '';
		}

	},500);

	input = document.getElementById('searchline');

	input.addEventListener("keyup", function(event){
		if(event.keyCode === 13){
			searchclick();
		}
	});

}


	function searchclick(){

		if(a == 0 || a == 15){
		text=document.getElementById('searchline').value;
		savetext(text);
		reload();

		function savetext(text){
			txt = text.toLowerCase();
			$.ajax({
			type: 'POST',
			url: 'php/TIIJAJ.php',
			data: {text:txt}
		}).done(function(result){
			giveinfoajax(result);
		});
		}


	function giveinfoajax(result){
		result = result.split('|');
		rows = result.length;
		edittext(rows,result);
		result = 0;
	}




		function edittext(row,arr){


			switch(rows){
				case 1:
					lines = 1;
					ou1.style.display="block";
					txt1.innerHTML = "Ничего не найдено";
					txt1.href = '';
					txt2.innerHTML = '';
					txt2.href = '';
					txt3.innerHTML = '';
					txt3.href = '';
					txt4.innerHTML = '';
					txt4.href = '';
					txt5.innerHTML = '';
					txt5.href = '';
					txt6.innerHTML = '';
					txt6.href = '';
					txt7.innerHTML = '';
					txt7.href = '';
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
					break;
				case 4:
					lines = 1;
					ou1.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = '';
					txt2.href = '';
					txt3.innerHTML = '';
					txt3.href = '';
					txt4.innerHTML = '';
					txt4.href = '';
					txt5.innerHTML = '';
					txt5.href = '';
					txt6.innerHTML = '';
					txt6.href = '';
					txt7.innerHTML = '';
					txt7.href = '';
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 7:
					lines = 2;
					ou1.style.display="block";
					ou2.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = '';
					txt3.href = '';
					txt4.innerHTML = '';
					txt4.href = '';
					txt5.innerHTML = '';
					txt5.href = '';
					txt6.innerHTML = '';
					txt6.href = '';
					txt7.innerHTML = '';
					txt7.href = '';
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 10:
					lines = 3;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = '';
					txt4.href = '';
					txt5.innerHTML = '';
					txt5.href = '';
					txt6.innerHTML = '';
					txt6.href = '';
					txt7.innerHTML = '';
					txt7.href = '';
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 13:
					lines = 4;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					ou4.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = arr[10];
					txt4.href = arr[11];
					txt5.innerHTML = '';
					txt5.href = '';
					txt6.innerHTML = '';
					txt6.href = '';
					txt7.innerHTML = '';
					txt7.href = '';
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 16:
					lines = 5;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					ou4.style.display="block";
					ou5.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = arr[10];
					txt4.href = arr[11];
					txt5.innerHTML = arr[13];
					txt5.href = arr[14];
					txt6.innerHTML = '';
					txt6.href = '';
					txt7.innerHTML = '';
					txt7.href = '';
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 19:
					lines = 6;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					ou4.style.display="block";
					ou5.style.display="block";
					ou6.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = arr[10];
					txt4.href = arr[11];
					txt5.innerHTML = arr[13];
					txt5.href = arr[14];
					txt6.innerHTML = arr[16];
					txt6.href = arr[17];
					txt7.innerHTML = '';
					txt7.href = '';
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 22:
					lines = 7;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					ou4.style.display="block";
					ou5.style.display="block";
					ou6.style.display="block";
					ou7.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = arr[10];
					txt4.href = arr[11];
					txt5.innerHTML = arr[13];
					txt5.href = arr[14];
					txt6.innerHTML = arr[16];
					txt6.href = arr[17];
					txt7.innerHTML = arr[19];
					txt7.href = arr[20];
					txt8.innerHTML = '';
					txt8.href = '';
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 25:
					lines = 8;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					ou4.style.display="block";
					ou5.style.display="block";
					ou6.style.display="block";
					ou7.style.display="block";
					ou8.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = arr[10];
					txt4.href = arr[11];
					txt5.innerHTML = arr[13];
					txt5.href = arr[14];
					txt6.innerHTML = arr[16];
					txt6.href = arr[17];
					txt7.innerHTML = arr[19];
					txt7.href = arr[20];
					txt8.innerHTML = arr[22];
					txt8.href = arr[23];
					txt9.innerHTML = '';
					txt9.href = '';
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 28:
					lines = 9;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					ou4.style.display="block";
					ou5.style.display="block";
					ou6.style.display="block";
					ou7.style.display="block";
					ou8.style.display="block";
					ou9.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = arr[10];
					txt4.href = arr[11];
					txt5.innerHTML = arr[13];
					txt5.href = arr[14];
					txt6.innerHTML = arr[16];
					txt6.href = arr[17];
					txt7.innerHTML = arr[19];
					txt7.href = arr[20];
					txt8.innerHTML = arr[22];
					txt8.href = arr[23];
					txt9.innerHTML = arr[25];
					txt9.href = arr[26];
					txt10.innerHTML = '';
					txt10.href = '';
				break;
				case 31:
					lines = 10;
					ou1.style.display="block";
					ou2.style.display="block";
					ou3.style.display="block";
					ou4.style.display="block";
					ou5.style.display="block";
					ou6.style.display="block";
					ou7.style.display="block";
					ou8.style.display="block";
					ou9.style.display="block";
					ou10.style.display="block";
					txt1.innerHTML = arr[1];
					txt1.href = arr[2];
					txt2.innerHTML = arr[4];
					txt2.href = arr[5];
					txt3.innerHTML = arr[7];
					txt3.href = arr[8];
					txt4.innerHTML = arr[10];
					txt4.href = arr[11];
					txt5.innerHTML = arr[13];
					txt5.href = arr[14];
					txt6.innerHTML = arr[16];
					txt6.href = arr[17];
					txt7.innerHTML = arr[19];
					txt7.href = arr[20];
					txt8.innerHTML = arr[22];
					txt8.href = arr[23];
					txt9.innerHTML = arr[25];
					txt9.href = arr[26];
					txt10.innerHTML = arr[28];
					txt10.href = arr[29];
				break;
				default:
					lines=10;
				break;
			}
			hidelines(lines);
	}


	function hidelines(lines){
		
		switch(lines){
			case 1:
				ou2.style.display="none";
				ou3.style.display="none";
				ou4.style.display="none";
				ou5.style.display="none";
				ou6.style.display="none";
				ou7.style.display="none";
				ou8.style.display="none";
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 2:
				ou3.style.display="none";
				ou4.style.display="none";
				ou5.style.display="none";
				ou6.style.display="none";
				ou7.style.display="none";
				ou8.style.display="none";
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 3:
				ou4.style.display="none";
				ou5.style.display="none";
				ou6.style.display="none";
				ou7.style.display="none";
				ou8.style.display="none";
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 4:
				ou5.style.display="none";
				ou6.style.display="none";
				ou7.style.display="none";
				ou8.style.display="none";
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 5:
				ou6.style.display="none";
				ou7.style.display="none";
				ou8.style.display="none";
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 6:
				ou7.style.display="none";
				ou8.style.display="none";
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 7:
				ou8.style.display="none";
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 8:
				ou9.style.display="none";
				ou10.style.display="none";
			break;
			case 9:
				ou10.style.display="none";
			break;
		}
		startanimate();
	}





	function startanimate(){

		showsearch=setInterval(function(){
			a++;
			b(a);
			if(a == 15){
				clearInterval(showsearch);
				a = 0;
			}
		},50);
	}

	function b(a){
		switch(a){
			case 1:
				obj1=setInterval(function(){
					if(o11 != 0){
						if(o11 > -450){
							o11 = o11 + 34;
						}
					}
					if((o11 == 0) || (o11 > 0)){
						clearInterval(obj1);
					}
					o1.style.marginLeft = o11 + 'px';
				},10);
			break;
			case 2:
				obj2=setInterval(function(){
					if(o22 != 0){
						if(o22 > -450){
							o22 = o22 + 34;
						}
					}
					if((o22 == 0) || (o22 > 0)){
						clearInterval(obj2);
					}
					o2.style.marginLeft = o22 + 'px';
				},10);
			break;
			case 3:
				obj3=setInterval(function(){
					if(o33 != 0){
						if(o33 > -450){
							o33 = o33 + 34;
						}
					}
					if((o33 == 0) || (o33 > 0)){
						clearInterval(obj3);
					}
					o3.style.marginLeft = o33 + 'px';
				},10);
			break;
			case 4:
				obj4=setInterval(function(){
					if(o44 != 0){
						if(o44 > -450){
							o44 = o44 + 34;
						}
					}
					if((o44 == 0) || (o44 > 0)){
						clearInterval(obj4);
					}
					o4.style.marginLeft = o44 + 'px';
				},10);
			break;
			case 5:
				obj5=setInterval(function(){
					if(o55 != 0){
						if(o55 > -450){
							o55 = o55 + 34;
						}
					}
					if((o55 == 0) || (o55 > 0)){
						clearInterval(obj5);
					}
					o5.style.marginLeft = o55 + 'px';
				},10);
			break;
			case 6:
				obj6=setInterval(function(){
					if(o66 != 0){
						if(o66 > -450){
							o66 = o66 + 34;
						}
					}
					if((o66 == 0) || (o66 > 0)){
						clearInterval(obj6);
					}
					o6.style.marginLeft = o66 + 'px';
				},10);
			break;
			case 7:
				obj7=setInterval(function(){
					if(o77 != 0){
						if(o77 > -450){
							o77 = o77 + 34;
						}
					}
					if((o77 == 0) || (o77 > 0)){
						clearInterval(obj7);
					}
					o7.style.marginLeft = o77 + 'px';
				},10);
			break;
			case 8:
				obj8=setInterval(function(){
					if(o88 != 0){
						if(o88 > -450){
							o88 = o88 + 34;
						}
					}
					if((o88 == 0) || (o88 > 0)){
						clearInterval(obj8);
					}
					o8.style.marginLeft = o88 + 'px';
				},10);
			break;
			case 9:
				obj9=setInterval(function(){
					if(o99 != 0){
						if(o99 > -450){
							o99 = o99 + 34;
						}
					}
					if((o99 == 0) || (o99 > 0)){
						clearInterval(obj9);
					}
					o9.style.marginLeft = o99 + 'px';
				},10);
			break;
			case 10:
				obj10=setInterval(function(){
					if(o1010 != 0){
						if(o1010 > -450){
							o1010 = o1010 + 34;
						}
					}
					if((o1010 == 0) || (o1010 > 0)){
						clearInterval(obj10);
					}
					o10.style.marginLeft = o1010 + 'px';
				},10);
			break;
		}
	}

		}else{
			alert('Не так часто!');
		}
}


function comeback(who){
	who.style.marginLeft = '0px;';
}

function reload(){
		o11 = -440;
		o22 = -440;
		o33 = -440;
		o44 = -440;
		o55 = -440;
		o66 = -440;
		o77 = -440;
		o88 = -440;
		o99 = -440;
		o1010 = -440;
		o1=document.getElementById('ou1');
		o2=document.getElementById('ou2');
		o3=document.getElementById('ou3');
		o4=document.getElementById('ou4');
		o5=document.getElementById('ou5');
		o6=document.getElementById('ou6');
		o7=document.getElementById('ou7');
		o8=document.getElementById('ou8');
		o9=document.getElementById('ou9');
		o10=document.getElementById('ou10');
		o1.style.marginLeft = o11 + 'px';
		o2.style.marginLeft = o22 + 'px';
		o3.style.marginLeft = o33 + 'px';
		o4.style.marginLeft = o44 + 'px';
		o5.style.marginLeft = o55 + 'px';
		o6.style.marginLeft = o66 + 'px';
		o7.style.marginLeft = o77 + 'px';
		o8.style.marginLeft = o88 + 'px';
		o9.style.marginLeft = o99 + 'px';
		o10.style.marginLeft = o1010 + 'px';
		txt1 = document.getElementById('text1');
		txt2 = document.getElementById('text2');
		txt3 = document.getElementById('text3');
		txt4 = document.getElementById('text4');
		txt5 = document.getElementById('text5');
		txt6 = document.getElementById('text6');
		txt7 = document.getElementById('text7');
		txt8 = document.getElementById('text8');
		txt9 = document.getElementById('text9');
		txt10 = document.getElementById('text10');


}



