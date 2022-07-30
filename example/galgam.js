document.addEventListener("DOMContentLoaded", function(event) { 
	
	def_gcont = "#gall_cont"; //id gallery
	def_gal = "#gall_gam"; //id gallery
	gimgs = '.gal_pic';//класс изображений галлереи
	gbldp = '.gal_bl';//class дополнительного блока
	gg_cols = 4; //кол-во столбцов (равно кол-ву изображений)
	gg_rows = 1; //кол-во строк отображаемых на странице
	qq_urlt = 'imgs/'; //адрес до папки с изображениями
	gg_mass = galpics; //массив изображений
	
	
	ggalc = document.querySelector(def_gcont);//контейнер галлереи
	ggalc.innerHTML = "<div id='gall_gam'></div>";
	ggall = document.querySelector(def_gal);//галлерея
	ggall_prop();
	g_imgs = document.querySelectorAll(gimgs);//массив всех изображений галлереи
	g_dpb = document.querySelector(gbldp);//доп. кнопка галлереи
	
	if(ggall){
		Array.from(g_imgs, el => el.addEventListener('mouseenter', e => {_hovpicchange(e);}));
		Array.from(g_imgs, el => el.addEventListener('mouseleave', e => {_leapicchange(e);}));
		Array.from(g_imgs, el => el.addEventListener('click', e => {_startgalvis(e);}));
	}
	if(g_dpb){
		g_dpb.addEventListener('click', e => {_startgalvis(e);});
	}
	

	//set default parametrs и построение галереи
	function ggall_prop(){
		tmp_mass = gg_mass.length;//кол-во изображений по факту
		if(tmp_mass>gg_cols){ // 9>4
			tmp_metka = tmp_mass; // 9  //5
			for(i=1; i<=(gg_cols); i++){
				ggall.insertAdjacentHTML("beforeend","<div class='gal_pic'><img data-img='"+i+"' src='"+qq_urlt+gg_mass[i-1]+"'></div>"); 
			}
			for(j=gg_cols; j<(tmp_mass); j++){
				ggall.insertAdjacentHTML("beforeend","<div class='gal_pic nnact'><img data-img='"+(j+1)+"' src='"+qq_urlt+gg_mass[j]+"'></div>"); 
			}
			if(tmp_metka > gg_cols){ //5 > 4
				tt_but = document.querySelector("img[data-img='4']").parentElement;
				console.log(tt_but);
				tt_but.remove();
				ggall.insertAdjacentHTML("beforeend","<div class='gal_bl'><div>+ Больше</div></div>"); 
			}else{
				ggall.insertAdjacentHTML("beforeend","<div class='gal_bl'><div>+ Больше</div></div>"); 
			}
		}else{
			tmp_metka = tmp_mass; // 4
			for(i=1; i<=(tmp_metka); i++){
				ggall.insertAdjacentHTML("beforeend","<div class='gal_pic'><img data-img='"+i+"' src='"+qq_urlt+gg_mass[i-1]+"'></div>"); 
			}
			if(tmp_metka != gg_cols && tmp_metka > gg_cols){
				ggall.insertAdjacentHTML("beforeend","<div class='gal_bl'><div>+ Больше</div></div>");
			}
		}
		//ggall
	}
	
	function _hovpicchange(e){// действия при наведении на каждое из изображений
		pict = e.target; //.getAttribute('data-img')
		pict.style.transform = 'Scale(1.2)';
	}
	function _leapicchange(e){// действия при наведении на каждое из изображений
		pict = e.target; //.getAttribute('data-img')
		pict.style.transform = null;
	}
	function _startgalvis(e){// при клике на каждое из изображений запускается галлерея
		pict = e.target; //передаем что за объект запустил галерею
		console.log(pict);
	}

});
