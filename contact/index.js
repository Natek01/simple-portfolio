function validateForm() {
    const InputName = document.getElementById("name");
    const name = InputName.value.trim();
    

    if (name.length < 5 ) {
        document.getElementById("modifier").textContent = "Name must be at least 5 characters.";
        document.getElementById("modifier").style.color = "red";
        document.getElementById("modifier").style.fontSize = "0.8rem";
        return false;
    }
    return true;
    
}