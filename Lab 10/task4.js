function toggleBulb()
{
    let bulb = document.getElementById("bulbImage");
    if (bulb.src.includes("bulboff"))
        {
            bulb.src = "/Images/off.jpg";
        }
    else
        {
            bulb.src = "/Images/on.jpg";
        }
}
