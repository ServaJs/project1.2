const heroSection = document.getElementById('hero-section');
const interactiveContainer = document.getElementById('interactive-container');
function openMode(mode){

    heroSection.style.display = "none";
    interactiveContainer.style.display="block";
    const targetMode = document.getElementById(`mode-${mode}`);
    if(targetMode){
        targetMode.style.display="flex";
    }
}

function resetView(){
    interactiveContainer.style.display= "none";
    heroSection.style.display="flex";
}