 Name=[];
function submit()
{
    var name_1=document.getElementById("Name_of_the_student_1").value;
    var name_2=document.getElementById("Name_of_the_student_2").value;
    var name_3=document.getElementById("Name_of_the_student_3").value;
    var name_4=document.getElementById("Name_of_the_student_4").value;
    
    Name.push(name_1);
    Name.push(name_2);
    Name.push(name_3);
    Name.push(name_4);

    console.log(Name);

    document.getElementById("display_name").innerHTML=Name;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    Name.sort();
    console.log(Name);
    document.getElementById("display_name").innerHTML=Name;
    
}
