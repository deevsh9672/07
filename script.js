function create(){
let num = document.querySElector("#number").value;
  let output="";
  for(let row= num; row>=1; row--){
let patten = "";
    for(let col=1; col<=row;;col++){
patten +="*";
    }
    output+=patten +"/n";
  }
  document.getElementById("output").textcontext=output;
  alert(output);
}
