"use strict";
export function getPopularGuitars() {
    return fetch("http://localhost:8080/guitar/popular")
        .then(response => response.json());
}

export function getAcousticGuitars() {
    return fetch("http://localhost:8080/guitar/acoustic")
        .then(response => response.json());
}

export function getElectricGuitars() {
    return fetch("http://localhost:8080/guitar/electric")
        .then(response => response.json());
}

export function getBasGuitars() {
    return fetch("http://localhost:8080/guitar/bas")
        .then(response => response.json());
}


export default {getPopularGuitars, getAcousticGuitars, getElectricGuitars, getBasGuitars};

// function forToAddPicture() {
//     let form = document.querySelector('[data-add]');
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//
//         let fileInput = form.querySelector('input[type="file"]');
//         let file = fileInput.files[0];
//
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = async (e) => {
//                 const base64data = e.target.result;
//
//                 const formData = new FormData();
//                 formData.append('picture', base64data);
//                 try {
//                     const response = await fetch('http://localhost:8080/guitar/addPicture', {
//                         method: 'POST',
//                         body: formData,
//                     });
//
//                 } catch (error) {
//                     console.error('An error occurred while sending the request:', error);
//                 }
//             };
//
//             reader.readAsDataURL(file);
//         }
//     })
// }