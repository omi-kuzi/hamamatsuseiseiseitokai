const kuji = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '20.png',
    '21.png'
];

const omikujiButton = document.getElementById('omikujiButton');
const resultArea = document.getElementById('resultArea');

omikujiButton.addEventListener('click', () => {
    const result = kuji[Math.floor(Math.random() * kuji.length)];
    resultArea.innerHTML = `<img src="${result}" alt="おみくじの結果">`;
});
