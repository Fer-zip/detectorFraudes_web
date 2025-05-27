const btnDarkMode = document.querySelector('#btnDarkMode');
const svgSun = `<svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.125 12C15.125 13.4497 13.9497 14.625 12.5 14.625C11.0503 14.625 9.875 13.4497 9.875 12C9.875 10.5503 11.0503 9.375 12.5 9.375C13.9497 9.375 15.125 10.5503 15.125 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5 12.75C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25V12.75ZM17.75 11.25C17.3358 11.25 17 11.5858 17 12C17 12.4142 17.3358 12.75 17.75 12.75V11.25ZM7.25 12.75C7.66421 12.75 8 12.4142 8 12C8 11.5858 7.66421 11.25 7.25 11.25V12.75ZM5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75V11.25ZM13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5H13.25ZM11.75 6.75C11.75 7.16421 12.0858 7.5 12.5 7.5C12.9142 7.5 13.25 7.16421 13.25 6.75H11.75ZM13.25 17.25C13.25 16.8358 12.9142 16.5 12.5 16.5C12.0858 16.5 11.75 16.8358 11.75 17.25H13.25ZM11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75C12.9142 19.75 13.25 19.4142 13.25 19H11.75ZM17.9803 7.58033C18.2732 7.28744 18.2732 6.81256 17.9803 6.51967C17.6874 6.22678 17.2126 6.22678 16.9197 6.51967L17.9803 7.58033ZM15.6817 7.75767C15.3888 8.05056 15.3888 8.52544 15.6817 8.81833C15.9746 9.11122 16.4494 9.11122 16.7423 8.81833L15.6817 7.75767ZM9.31833 16.2423C9.61122 15.9494 9.61122 15.4746 9.31833 15.1817C9.02544 14.8888 8.55056 14.8888 8.25767 15.1817L9.31833 16.2423ZM7.01967 16.4197C6.72678 16.7126 6.72678 17.1874 7.01967 17.4803C7.31256 17.7732 7.78744 17.7732 8.08033 17.4803L7.01967 16.4197ZM8.08033 6.51967C7.78744 6.22678 7.31256 6.22678 7.01967 6.51967C6.72678 6.81256 6.72678 7.28744 7.01967 7.58033L8.08033 6.51967ZM8.25767 8.81833C8.55056 9.11122 9.02544 9.11122 9.31833 8.81833C9.61122 8.52544 9.61122 8.05056 9.31833 7.75767L8.25767 8.81833ZM16.7433 15.1827C16.4504 14.8898 15.9756 14.8898 15.6827 15.1827C15.3898 15.4756 15.3898 15.9504 15.6827 16.2433L16.7433 15.1827ZM16.9197 17.4803C17.2126 17.7732 17.6874 17.7732 17.9803 17.4803C18.2732 17.1874 18.2732 16.7126 17.9803 16.4197L16.9197 17.4803ZM19.5 11.25H17.75V12.75H19.5V11.25ZM7.25 11.25H5.5V12.75H7.25V11.25ZM11.75 5V6.75H13.25V5H11.75ZM11.75 17.25V19H13.25V17.25H11.75ZM16.9197 6.51967L15.6817 7.75767L16.7423 8.81833L17.9803 7.58033L16.9197 6.51967ZM8.25767 15.1817L7.01967 16.4197L8.08033 17.4803L9.31833 16.2423L8.25767 15.1817ZM7.01967 7.58033L8.25767 8.81833L9.31833 7.75767L8.08033 6.51967L7.01967 7.58033ZM15.6827 16.2433L16.9197 17.4803L17.9803 16.4197L16.7433 15.1827L15.6827 16.2433Z" fill="#000000"></path></g></svg>`
const svgMoon = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.5761 14.5765C18.7677 14.8513 17.9013 15.0003 17 15.0003C12.5817 15.0003 9 11.4186 9 7.00029C9 6.09888 9.14908 5.23229 9.42394 4.42383C6.26952 5.49607 4 8.48301 4 12C4 16.4183 7.58172 20 12 20C15.5169 20 18.5037 17.7307 19.5761 14.5765Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode');

    const isDarkTheme = document.body.classList.contains('dark_mode');
    localStorage.setItem('darkMode', isDarkTheme ? 'enabled' : 'disabled');

    btnDarkMode.innerHTML = isDarkTheme ? svgMoon : svgSun;
});

// Para aplicar el modo correcto al cargar
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark_mode');
        btnDarkMode.innerHTML = svgMoon;
    } else {
        btnDarkMode.innerHTML = svgSun;
    }


    const elements = document.querySelectorAll(".scroll-element");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Esto permite que desaparezca al salir
        }
      });
    }, {
      threshold: 0.1,
    });

    elements.forEach(el => observer.observe(el));
});

const inputImage = document.querySelector('#image')
const change_svg = document.querySelector('#change_svg')

inputImage.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewContainer = document.querySelector('.previewImage');

    
    if (file && file.type.startsWith('image/')) {
        change_svg.remove()
        const reader = new FileReader();
        reader.onload = function(e) {
            previewContainer.innerHTML = `<img src="${e.target.result}" alt="Vista previa de la imagen">`;
        };
        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = ''; // limpia si no es imagen válida
    }
});


const menu = document.querySelector('#menu')
const listNavMin = document.querySelector('.listNavMin')

menu.addEventListener('click',()=>{
    listNavMin.classList.toggle('listNavMin-act')
})



const noFraude = `<svg width="200px" height="200px" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#00ff91;} .st1{fill:none;stroke:#00ff91;stroke-width:32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <g id="Layer_1"></g> <g id="Layer_2"> <g> <path class="st0" d="M256,43.5C138.64,43.5,43.5,138.64,43.5,256S138.64,468.5,256,468.5S468.5,373.36,468.5,256 S373.36,43.5,256,43.5z M378.81,222.92L249.88,351.86c-7.95,7.95-18.52,12.33-29.76,12.33s-21.81-4.38-29.76-12.33l-57.17-57.17 c-8.3-8.3-12.87-19.35-12.87-31.11s4.57-22.81,12.87-31.11c8.31-8.31,19.36-12.89,31.11-12.89s22.8,4.58,31.11,12.89l24.71,24.7 l96.47-96.47c8.31-8.31,19.36-12.89,31.11-12.89c11.75,0,22.8,4.58,31.11,12.89c8.3,8.3,12.87,19.35,12.87,31.11 S387.11,214.62,378.81,222.92z"></path> </g> </g> </g></svg>`
const posibleFraude = `<svg width="200px" height="200px" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#ffdd00;} .st1{fill:none;stroke:#ffdd00;stroke-width:32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <g id="Layer_1"></g> <g id="Layer_2"> <g> <path class="st0" d="M256,46.66C140.38,46.66,46.66,140.38,46.66,256S140.38,465.34,256,465.34S465.34,371.62,465.34,256 S371.62,46.66,256,46.66z M256,110.88c17.07,0,30.91,13.84,30.91,30.91c0,17.07-13.84,30.91-30.91,30.91s-30.91-13.84-30.91-30.91 C225.09,124.72,238.93,110.88,256,110.88z M287.03,370.09c0,17.14-13.89,31.03-31.03,31.03l0,0c-17.14,0-31.03-13.89-31.03-31.03 V257.61c0-17.14,13.89-31.03,31.03-31.03l0,0c17.14,0,31.03,13.89,31.03,31.03V370.09z"></path> </g> </g> </g></svg>`
const alertaFraude = `<svg width="200px" height="200px" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#ff0000;} .st1{fill:none;stroke:#ff0000;stroke-width:32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <g id="Layer_1"></g> <g id="Layer_2"> <g> <path class="st0" d="M461.86,393.89L299.94,73.68c-18.22-36.03-69.66-36.03-87.88,0L50.14,393.89 c-16.56,32.75,7.24,71.46,43.94,71.46h323.84C454.62,465.34,478.42,426.64,461.86,393.89z M256,423.92 c-17.07,0-30.91-13.84-30.91-30.91c0-17.07,13.84-30.91,30.91-30.91s30.91,13.84,30.91,30.91 C286.91,410.08,273.07,423.92,256,423.92z M287.03,287.2c0,17.14-13.89,31.03-31.03,31.03l0,0c-17.14,0-31.03-13.89-31.03-31.03 V174.72c0-17.14,13.89-31.03,31.03-31.03l0,0c17.14,0,31.03,13.89,31.03,31.03V287.2z"></path> </g> </g> </g></svg>`


const btnAnalizarImage = document.querySelector('#btnAnalizarImage')
const btnAnalizarText = document.querySelector('#btnAnalizarText')

const previewResult = document.querySelector('.previewResult')

const imgresultPRE = document.querySelector('#imgresultPRE')
const textResult = document.querySelector('.textResult')

let porcentaje = '40'
let text = `El porcentaje de posibilidades de ser un fraude es: ${porcentaje}%`

btnAnalizarImage.addEventListener('click', ()=>{
    if (inputImage.files.length > 0) {
        imgresultPRE.remove()
        previewResult.innerHTML=posibleFraude
        textResult.innerHTML=text
    }else {
        Swal.fire({
            icon: "error",
            title: "Vaya...",
            text: "Por favor, selecciona una imagen para analizar."
        });
    }
})

const textArea = document.querySelector('#text')

btnAnalizarText.addEventListener('click', ()=>{
    if (textArea.value) {
        previewResult.innerHTML=posibleFraude
        textResult.innerHTML=text
    }else {
        Swal.fire({
            icon: "error",
            title: "Vaya...",
            text: "Por favor, ingresa un texto para analizar."
        });
    }
})

const ctnInputImage = document.querySelector('.ctnInputImage')
const ctnInputText = document.querySelector('.ctnInputText')
const switchButton =document.querySelector('#switchButton')
let textButtonText = `Cambiar a texto
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
let textButtonImage = `Cambiar a image
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
let ver = false

switchButton.addEventListener('click',()=>{
    if (ver) {
        switchButton.innerHTML=textButtonText
        ver=false

        ctnInputImage.classList.toggle('ctnInputImage-act')
        ctnInputText.classList.toggle('ctnInputText-act')
    }else{
        switchButton.innerHTML=textButtonImage
        ver=true
        ctnInputText.classList.toggle('ctnInputText-act')
        ctnInputImage.classList.toggle('ctnInputImage-act')
    }
})