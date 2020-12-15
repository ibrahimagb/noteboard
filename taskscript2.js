// JavaScript source code
var notes = [
    {
        text: "",
        date: "",
        hour: ""
    }];
var n = localStorage.getItem('counter');
if (n === null) {
    n = 0;
} else {
    n++;
}
console.log(n);
localStorage.setItem("counter", n);
function clearnotepad() {
    var textnote = document.getElementById("notedraft").value
    var datetarget = document.getElementById("doday").value
    var hourtarget = document.getElementById("dotime").value
    document.getElementById("notedraft").value = "";
    document.getElementById("doday").value = "";
    document.getElementById("dotime").value = "";
}
function clearcount() {
    var n = 0;
    localStorage.setItem("counter", n);
    console.log(n)
}
function creatanotetemp(newNotes) {
    var n = localStorage.getItem('counter');
    var parent = document.getElementById('readynotebord');
    var notetext = newNotes[n].text;
    var notedate = newNotes[n].date;
    var newChild = '<div id="note"><article id="textnote"></article></div>';
    parent.insertAdjacentHTML('beforeend', newChild);
    insertintel(notetext, notedate);
}
function insertintel(notetext, notedate) {

    var parent2 = document.getElementById('readynotebord').lastElementChild;
    var noteinput = '<article id="textnote">' + (notetext) + '</article>' + (notedate)+''
    parent2.insertAdjacentHTML('beforeend', noteinput);
   
}
function addnote() {
    var textnote = document.getElementById("notedraft").value
    var datetarget = document.getElementById("doday").value
    var hourtarget = document.getElementById("dotime").value
        if (datetarget == false) {
            alert("Please Enter a target date")
   
        }
        else {
            var userinput = {
                text: textnote,
                date: datetarget,
                hour: hourtarget
                }
        notes.push(userinput)
        document.getElementById("notedraft").value = "";
        document.getElementById("doday").value = "";
        document.getElementById("dotime").value = "";
        myjson = JSON.stringify(notes)
        localStorage.setItem("JSONbank", myjson);
    }
    var servertext = localStorage.getItem("JSONbank")
    var newNotes = JSON.parse(servertext)
    console.log(newNotes)
    printnote(n)
}
function printnote(x) {
    var servertext = localStorage.getItem("JSONbank")
    var newNotes = JSON.parse(servertext)
    creatanotetemp(newNotes)
    
    var temp = null;
    var clone = null;
    n++;
    localStorage.setItem("counter", n);
    console.log(n);

}
