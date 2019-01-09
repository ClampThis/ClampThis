lines = 6;
elementMain = document.getElementsByClassName('game-desc');
for(var e=0; e<elementMain.length; e++){
	var element = elementMain[e]
	var style = window.getComputedStyle(element);
	var lineHeight = style.getPropertyValue('line-height');
	var fontSize = style.getPropertyValue('font-size');

	if(lineHeight == "normal"){
		lineHeight = 1.1*fontSize;;
	}else{
		lineHeight = parseInt(lineHeight)*1.1;
	}
	var maxHeight = (parseInt(fontSize)*lines)+(lineHeight);
	console.log(maxHeight);
	var text = element.textContent;
	element.textContent = '';
	for(var i=0; i<text.length; i++){
		element.textContent += text[i];
		element.textContent += "...";
		if(element.clientHeight >= maxHeight){
			element.textContent = element.textContent.slice(0, -6);
			element.textContent += "...";
			break;
		}else{
			element.textContent = element.textContent.slice(0, -3);
		}
	}
}