var item = new Array();


// "Page","Address","","Title of the page","Keyword","Description of the page"

//ㄱ
c=0; item[c]=new Array("","","ㄱ","ㄱ, g, a","g/k");
c++; item[c]=new Array("","","공부【工夫】<font color='green'>/공부/</font>","공부, study","【名詞】 Study");
c++; item[c]=new Array("","","공부방【工夫房】<font color='green'>/공부빵/</font>","공부방, study","【名詞】 Study (room)");
c++; item[c]=new Array("","","공부하다【工夫하다】<font color='green'>/*/</font>","공부하다, to study, a...","【動詞】 to Study");

//ㄱ 
//ㄴ 
//ㄷ 
//ㄹ 
//ㅁ 
c++; item[c]=new Array("","","먹다 <font color='green'>/먹따/</font>","먹다, to eat","【動詞】活用 <br> to Eat");

//ㅂ 
c++; item[c]=new Array("","","백과사전【百科事典】 <font color='green'>/*/</font>","백과사전, encyclopedia, a...","【名詞】 Encyclopedia");

//ㅅ 
c++; item[c]=new Array("","","사전【辭典】 <font color='green'>/*/</font>","사전, dictionary, a...","【名詞】 Dictionary");

//ㅇ 
c++; item[c]=new Array("","","<font color='black'>아이</font>（Child）","아이, child","【名詞】 ...");
c++; item[c]=new Array("","","<font color='black'>여우</font>（Fox）","여우, fox","【名詞】 ...");
c++; item[c]=new Array("","","오이【瓜】","오이, cucumber, a...","【名詞】 Cucumber");
c++; item[c]=new Array("","","<font color='black'>우아【優雅】</font>（Elegance）","우아, elegance","【名詞】 ...");
c++; item[c]=new Array("","","<font color='black'>우유【牛乳】</font>（Milk）","우유, milk","【名詞】 ...");
c++; item[c]=new Array("","","<font color='black'>유아【幼兒】</font>（Baby）","유아, baby","【名詞】 ...");
c++; item[c]=new Array("","","<font color='black'>이</font>（Tooth）","이, tooth","...");

//ㅈ 
//ㅊ 
//ㅋ 
c++; item[c]=new Array("","","컴퓨터 <font color='green'>/*/</font>","컴퓨터, computer, a...","【名詞】 Computer");

//ㅌ 
//ㅍ 
//ㅎ
c++; item[c]=new Array("","","하다","하다, do, make","【動詞】活用 <br> Do; perform; make");

page=
"<html><head><title>Results of the search</title></head><body bgcolor='#C2CDC2'><center><a href='https://demisart.github.io/korean/'><img src='https://demisart.github.io/korean/CONT/homecanvas.png' style='max-width:100px;width: auto;'/></a><table border=0 cellspacing=10 width=80%>"
;

function search(frm) {
	win=window.open("", "_self");
	win.document.write(page);
	txt = frm.srchval.value.split(" ");
	fnd = new Array(); total=0;
	for (i = 0; i < item.length; i++) {
		fnd[i] = 0; order = new Array(0, 4, 2, 3);
		for (j = 0; j < order.length; j++)
		for (k = 0; k < txt.length; k++)
		if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
		fnd[i] += (j+1);
	}
	for (i = 0; i < fnd.length; i++) {
		n = 0; w = -1;
		for (j = 0;j < fnd.length; j++)
		if (fnd[j] > n) { n = fnd[j]; w = j; };
		if (w > -1) total += show(w, win, n);
		fnd[w] = 0;
	}
win.document.write("</table><br><font face='meiryo'>約 <b>"+total+"</b> 件</font><br></body></html>");
win.document.close();
}
function show(which,wind,num) {
	link = item[which][1] + item[which][0]; 
	line = "<tr><td><a href='"+link+"' style='color:black; font-family:Meiryo;font-weight: bold; text-decoration:none;'>"+item[which][2]+"</a> <br/>";
	line += item[which][4] + "</td></tr>";
	wind.document.write(line);
return 1;
}
