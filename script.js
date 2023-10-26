const thermo = () =>
{
    document.getElementById('therm').src="empty.jpg";
    console.log("empty");
    setTimeout(()=>{
        document.getElementById('therm').src="half.jpg";
        console.log("half");
    },1000)
    setTimeout(()=>{
        document.getElementById('therm').src="full.jpg";
        console.log("full");
    },2000)
}
thermo();
setInterval(thermo,3000);