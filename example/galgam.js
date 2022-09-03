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
	gg_tmch = '#tm_chisl'; //счетчик
	img_act = '_activ';
	qq_clos = '#gl_clos'; //closed gallery
	gg_cols = 4; //кол-во столбцов (равно кол-ву изображений)
	qq_urlt = 'imgs/'; //адрес до папки с изображениями
	gg_mass = galpics; //массив изображений
	glt = ''; //dont change this value
	g_form = '<div id="'+gform+'"><div id="g_pod"><div id="gl_clos"></div><div id="ug_gg"><div class="arr _lefs"></div><div><div id="img_sch"><div id="tm_chisl">0 / 0</div></div><img id="'+gbimg+'" src="" prop=""></div><div class="arr _rifs"></div></div><div id="'+gbcont+'"></div></div></div>';
	
	
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
	g_stmch = document.querySelector(gg_tmch);
	g_glcls = document.querySelector(qq_clos);

	
	if(ggall){
		Array.from(g_imgs, el => el.addEventListener('mouseenter', e => {_hovpicchange(e);}));
		Array.from(g_imgs, el => el.addEventListener('mouseleave', e => {_leapicchange(e);}));
		Array.from(g_imgs, el => el.addEventListener('click', e => {_startgalvis(e);}));
		Array.from(g_arrw, el => el.addEventListener('click', e => {_datachange(e);})); //листаем по стрелкам в сторону изображения
		g_glcls.addEventListener('click', e => {_galclosed(e);});
	}
	if(g_dpb){
		g_dpb.addEventListener('click', e => {_startgalvis(e);});
	}
	
	//set default parametrs и построение галереи
	function ggall_prop(){
		tmp_mass = gg_mass.length;//кол-во изображений по факту
		if(tmp_mass>gg_cols){
			tmp_metka = tmp_mass; 
			for(i=1; i<=(gg_cols); i++){ //вывод видимых изображений на страницу
				ggall.insertAdjacentHTML("beforeend","<div class='"+gimgs+"'><img data-img='"+i+"' src='"+qq_urlt+gg_mass[i-1]+"'></div>"); 
			}
			for(j=gg_cols; j<(tmp_mass); j++){//вывод невидимых изображений на страницу
				ggall.insertAdjacentHTML("beforeend","<div class='"+gimgs+" nnact'><img data-img='"+(j+1)+"' src='"+qq_urlt+gg_mass[j]+"'></div>"); 
			}
			if(tmp_metka > gg_cols){
				tt_but = document.querySelector("img[data-img='"+gg_cols+"']").parentElement;
				tt_but.classList.add('nnact');
				ggall.insertAdjacentHTML("beforeend","<button class='"+gbldp+"'>+ Больше</button>"); 
			}else{
				ggall.insertAdjacentHTML("beforeend","<button class='"+gbldp+"'>+ Больше</button>"); 
			}
		}else{
			tmp_metka = tmp_mass; 
			for(i=1; i<=(tmp_metka); i++){
				ggall.insertAdjacentHTML("beforeend","<div class='"+gimgs+"'><img data-img='"+i+"' src='"+qq_urlt+gg_mass[i-1]+"'></div>"); 
			}
		}
	}
	
	function _hovpicchange(e){// действия при наведении на каждое из изображений
		pict = e.target;
		pict.style.transform = 'Scale(1.2)';
	}
	function _leapicchange(e){// действия при отсутствии  наведения на из изображении
		pict = e.target;
		pict.style.transform = null;
	}
	function _startgalvis(e){// при клике на каждое из изображений запускается галлерея
		pict = e.target; //передаем что за объект запустил галерею
		bzh = pict.getAttribute('class');
		if(bzh){
			pfg = gg_cols; 
		}else{
			pfg = pict.getAttribute('data-img');
		}
		gp_img = qq_urlt+gg_mass[pfg-1];
		gbip.setAttribute('src', gp_img);
		gbip.setAttribute('prop', pfg);
		//цикл подложки
		for(k=1; k<=(tmp_mass); k++){
			gcontp.insertAdjacentHTML("beforeend","<div class='"+gimgt+"'><img data-img='"+k+"' src='"+qq_urlt+gg_mass[k-1]+"'></div>"); 
		if(pfg == k){
			var e = pfg;
			_chanramp(e)
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
				ghh = gcontp.querySelector("img[data-img='"+glt+"']");
				ghh.classList.remove(img_act);
				e = lz;
				_chanramp(e);
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
					ghh = gcontp.querySelector("img[data-img='"+glt+"']");
					ghh.classList.remove(img_act);
					e = lz; 
					_chanramp(e);
				}
			}
		}
	}
	function _imgchange(e){
		bb_im = e.target; //что за изображение превью?
		lz = bb_im.getAttribute('data-img'); //что за изображение превью?
		ghh = gcontp.querySelector("img[data-img='"+glt+"']");
		ghh.classList.remove(img_act);
		if(lz>0 && lz<=tmp_mass){
			lz_img = qq_urlt+gg_mass[lz - 1];
			gbip.setAttribute('src', lz_img);
			gbip.setAttribute('prop', lz);
			var e = lz;
			_chanramp(e);
		}
	}
	function _chanramp(e){
		glt = e;
		g_stmch.innerHTML = glt + ' / ' + tmp_mass;
		tg_act = gcontp.querySelector("img[data-img='"+glt+"']");
		tg_act.classList.add(img_act);
	}
	function _galclosed(e){
		gpifo.style.display = null;
		gcontp.innerHTML = '';
	}
});
