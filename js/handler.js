

function ChangeInfo(Mtext, Minfo, Mcapa, Url1, Url2){
    document.getElementsByClassName("titulo")[0].innerHTML = Mtext;
    document.getElementsByClassName("descricao")[0].innerHTML = Minfo;
    document.getElementsByClassName("filme-principal")[0].style.backgroundImage = "linear-gradient(rgba(0,0,0, .50),rgba(0,0,0, .50)), url(" +Mcapa+ ")";
    document.getElementsByClassName("botao")[0].onclick = function () {
        window.open(Url1,'_blank');
    };
    document.getElementsByClassName("botao")[1].onclick = function () {
        window.open(Url2,'_blank');
    };
    
}