document.querySelector('#check').addEventListener('click', printDay);

function printDay() {
  const day = document.querySelector('#day').value.toLowerCase();

  //logic statements
  if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = "Yayy it's the weekend Baby!!!"
  } else if (day === 'monday') {
    document.querySelector('#placeToSee').innerText = "It is Career Skills Day!!"
  } else {
    document.querySelector('#placeToSee').innerText = "It is a Class Day!"

  }
}