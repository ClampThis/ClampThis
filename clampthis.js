/*
 CLAMPTHIS.JS

 Version: 1.0.0
  Author: Desmond Chin
 Website: https://desmondchin.xyz
    Repo: https://github.com/ClampThis/ClampThis
  Issues: https://github.com/ClampThis/ClampThis/issues

 */

$clampThis = function(selector, uParams){
    lines = uParams.lines;
    params = {
        defaultLineHeight: 1.2,
    };

    for(var uParam in uParams){
        params[uParam] = uParams[uParam];
    }
    
    elementMain = document.querySelectorAll(selector);
    
    for(var e=0; e<elementMain.length; e++){
        var element = elementMain[e];
        if(typeof(element.clampThisText) == "undefined"){
            element['clampThisText'] = element.textContent;
        }
        element['clampThisParams'] = params;
        var style = window.getComputedStyle(element);
        var lineHeight = style.getPropertyValue('line-height');
        var fontSize = style.getPropertyValue('font-size');
        console.log('initial line height: '+lineHeight);
        if(lineHeight == "normal"){
            lineHeight = params.defaultLineHeight*parseInt(fontSize);
        }else{
            lineHeight = parseInt(lineHeight)*params.defaultLineHeight;
        }

        var maxHeight = parseInt(lineHeight)*lines;
        console.log("one line= "+parseInt(lineHeight));
        console.log(maxHeight);
        if(typeof(element.clampThisText) == "undefined"){
            var text = element.textContent;
        }else{
            var text = element.clampThisText;
        }
        element.textContent = '';
        for(var i=0; i<text.length; i++){
            element.textContent += text[i];
            element.textContent += "...";
            if(element.clientHeight == maxHeight){
                break;
            }else if(element.clientHeight > maxHeight){
                element.textContent = element.textContent.slice(0, -6);
				element.textContent += "...";
                break;
            }else{
                element.textContent = element.textContent.slice(0, -3);
                if(i == element.textContent.length){
                    break;
                }
            }
        }
    }
}

