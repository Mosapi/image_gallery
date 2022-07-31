document.addEventListener("DOMContentLoaded", function(event) { 
	
	def_gcont = "#gall_cont"; //id container gallery
	def_gal = "#gall_gam"; //id gallery
	gimgs = 'gal_pic';//класс изображений галлереи
	gimgt = 'gal_bic';//класс изображений галлереи
	gbldp = 'gal_bl';//class дополнительного блока
	gbcont = 'gb_cont'; //id контролов
	gbimg = 'bi_img'; //id big image
	gform = 'g_form'; //id form
	q_arbl = 'arr'; //class arrows
	qq_left = '_lefs'; //left arrow
	qq_right = '_rifs'; //right arrow
	gg_cols = 4; //кол-во столбцов (равно кол-ву изображений)
	qq_urlt = 'imgs/'; //адрес до папки с изображениями
	gg_mass = galpics; //массив изображений
	glt = '';
	g_form = '<div id="'+gform+'"><div id="g_pod"><div id="ug_gg"><div class="arr _lefs"></div><div><img id="'+gbimg+'" src="" prop=""></div><div class="arr _rifs"></div></div><div id="'+gbcont+'"></div></div></div>';
	
	
	ggalc = document.querySelector(def_gcont);//контейнер галлереи
	ggalc.innerHTML = "<div id='gall_gam'></div>";
	document.body.insertAdjacentHTML("afterbegin", g_form);
	ggall = document.querySelector(def_gal);//галлерея
	gpifo = document.querySelector('#'+gform);//форма изображения
	gbip = document.querySelector('#'+gbimg);//изображение биг
	gcontp = document.querySelector('#'+gbcont);//панель контролов
	ggall_prop();
	g_imgs = document.querySelectorAll('.'+gimgs);//массив всех изображений галлереи
	g_dpb = document.querySelector('.'+gbldp);//доп. кнопка галлереи
	g_arrw = document.querySelectorAll('.'+q_arbl);//массив всех стрелок биг img

	
	if(ggall){
		Array.from(g_imgs, el => el.addEventListener('mouseenter', e => {_hovpicchange(e);}));
		Array.from(g_imgs, el => el.addEventListener('mouseleave', e => {_leapicchange(e);}));
		Array.from(g_imgs, el => el.addEventListener('click', e => {_startgalvis(e);}));
		Array.from(g_arrw, el => el.addEventListener('click', e => {_datachange(e);})); //листаем по стрелкам в сторону изображения
	}
	if(g_dpb){
		g_dpb.addEventListener('click', e => {_startgalvis(e);});
	}
	
	//set default parametrs и построение галереи
	function ggall_prop(){
		tmp_mass = gg_mass.length;//кол-во изображений по факту
		if(tmp_mass>gg_cols){ // 6>4
			tmp_metka = tmp_mass; // 6
			for(i=1; i<=(gg_cols); i++){ //вывод видимых изобрадений на страницу
				ggall.insertAdjacentHTML("beforeend","<div class='"+gimgs+"'><img data-img='"+i+"' src='"+qq_urlt+gg_mass[i-1]+"'></div>"); 
			}
			for(j=gg_cols; j<(tmp_mass); j++){//вывод невидимых изобрадений на страницу
				ggall.insertAdjacentHTML("beforeend","<div class='"+gimgs+" nnact'><img data-img='"+(j+1)+"' src='"+qq_urlt+gg_mass[j]+"'></div>"); 
			}
			if(tmp_metka > gg_cols){ //6 > 4
				tt_but = document.querySelector("img[data-img='"+gg_cols+"']").parentElement;
				tt_but.classList.add('nnact');
				ggall.insertAdjacentHTML("beforeend","<button class='"+gbldp+"'>+ Больше</button>"); 
			}else{
				ggall.insertAdjacentHTML("beforeend","<button class='"+gbldp+"'>+ Больше</button>"); 
			}
		}else{
			tmp_metka = tmp_mass; // 3
			for(i=1; i<=(tmp_metka); i++){
				ggall.insertAdjacentHTML("beforeend","<div class='"+gimgs+"'><img data-img='"+i+"' src='"+qq_urlt+gg_mass[i-1]+"'></div>"); 
			}
		}
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
		bzh = pict.getAttribute('class');
		if(bzh){// кнопка ?
			pfg = gg_cols; //4
		}else{
			pfg = pict.getAttribute('data-img'); //2
		}
		gp_img = qq_urlt+gg_mass[pfg-1];
		gbip.setAttribute('src', gp_img);
		gbip.setAttribute('prop', pfg);
		//цикл подложки
		// parentElement.classList.add('_activ');
		for(k=1; k<=(tmp_mass); k++){
			gcontp.insertAdjacentHTML("beforeend","<div class='"+gimgt+"'><img data-img='"+k+"' src='"+qq_urlt+gg_mass[k-1]+"'></div>"); 
		if(pfg == k){
			var e = pfg;
			glt = pfg;
			console.log(glt);
			_chanramp(e)
			/*tg_act = document.querySelector("img[data-img='"+pfg+"']");
			tg_act.classList.add('_activ');*/
		}
		
		}
		gpifo.style.display = 'block';
		qb_impr = gcontp.querySelectorAll('img'); //массив всех минипревью на биг форме
		Array.from(qb_impr, el => el.addEventListener('click', e => {_imgchange(e);})); //меняем изображение по клику на него
	}
	function _datachange(e){
		tp_ar = e.target; //arrows
		arh = tp_ar.classList.contains(qq_left);//left?
		if(arh){
			//если кликнули влево
			lz = gbip.getAttribute('prop');
			lz = lz -1;
			if(lz == 0){}else{
			if(lz>0){
				lz_img = qq_urlt+gg_mass[lz-1];
				gbip.setAttribute('src', lz_img);
				gbip.setAttribute('prop', lz);
			}
			}
		}else{
			arh = tp_ar.classList.contains(qq_right);
			if(arh){
				//если кликнули вправо
				lz = gbip.getAttribute('prop');
				lz = Number(lz) +1;
				if(lz<=tmp_mass){
					lz_img = qq_urlt+gg_mass[lz - 1];
					gbip.setAttribute('src', lz_img);
					gbip.setAttribute('prop', lz);
				}
			}
		}
	}
	function _imgchange(e){
		bb_im = e.target; //что за изображение превью?
		lz = bb_im.getAttribute('data-img'); //что за изображение превью?
		if(lz>0 && lz<=tmp_mass){
			lz_img = qq_urlt+gg_mass[lz - 1];
			gbip.setAttribute('src', lz_img);
			gbip.setAttribute('prop', lz);
			var e = lz;
			console.log(e);
			_chanramp(e);
		}
	}
	function _chanramp(e){
		//_activ
		ton = e;
		//glt;
		console.log(glt);
		ghh = gcontp.querySelector("img[data-img='"+glt+"']");
		ghh.classList.remove('_activ');
		tg_act = gcontp.querySelector("img[data-img='"+ton+"']");
		tg_act.classList.add('_activ');
	}
});
