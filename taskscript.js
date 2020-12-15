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
    var temp = document.getElementById("note");
    var clone = temp.cloneNode(true);
    var n = localStorage.getItem('counter');
    clone.append(newNotes[n].text)
    console.log(newNotes[n].text)

    document.getElementById("readynotebord").append(clone)
    for (i = 1; i < newNotes.length; i++) {
        console.log(newNotes[i].text)
        var temp = null;
        var clone = null;
    }
    n++;
    localStorage.setItem("counter", n);
    console.log(n);


}
