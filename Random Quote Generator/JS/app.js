// function generate() {
//   const quotes = {
//     '- Albert Einstein': '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
//     '- Jules Renard, The Journal of Jules Renard': '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
//     '- Madeline Miller, The Song of Achilles': '"Bury us, and mark our names above. Let us be free."',
//     '- Jon Krakauer, Into the Wild': '"He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight."',
//     '- John Galsworthy' : '"Life calls the tune, we dance."',
//     '- J.D. Stroube, Caged in Darkness': '"All that is left to bring you pain, are the memories. If you face those, you\'ll be free. You can\'t spend the rest of your life hiding from yourself; always afraid that your memories will incapacitate you, and they will if you continue to bury them."',
//     '- Debasish Mridha': '"Wisdom sets you free; beliefs put you in a prison."',
//     '- Ehsan Sehgal': '"Hi, you seem as tiresome, you need recharging your IQ. If you want, I can do that free of charge."',
//     '- Richie Norton': '"The job of a dream is to set you free. Don\'t turn dreams into jobs."',
//     '- Carol Burnett': '"When you have a dream, you\'ve got to grab it and never let go."',
//     '- Alexander the Great': '"There is nothing impossible to they who will try."',
//     '- Michael Altshuler': '"The bad news is time flies. The good news is you\'re the pilot."',
//     '- Nicole Kidman': '"Life has got all those twists and turns. You\'ve got to hold on tight and off you go."',
//     '- Amal Clooney': '"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."',
//     '- Taylor Swift': '"I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it\'s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please."'
//   }

//   // Берем ключи (Авторов) из объекста
//   const authors = Object.keys(quotes);

//   const author = authors[Math.floor(Math.random() * authors.length)];

//   const quote = quotes[author];

//   document.querySelector('.quote').innerHTML = quote;
//   document.querySelector('.author').innerHTML = author;

// }


function generate() {
  const quotes = {
    '- Albert Einstein': '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
    '- Jules Renard, The Journal of Jules Renard': '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
    '- Madeline Miller, The Song of Achilles': '"Bury us, and mark our names above. Let us be free."',
    '- Jon Krakauer, Into the Wild': '"He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight."',
    '- John Galsworthy' : '"Life calls the tune, we dance."',
    '- J.D. Stroube, Caged in Darkness': '"All that is left to bring you pain, are the memories. If you face those, you\'ll be free. You can\'t spend the rest of your life hiding from yourself; always afraid that your memories will incapacitate you, and they will if you continue to bury them."',
    '- Debasish Mridha': '"Wisdom sets you free; beliefs put you in a prison."',
    '- Ehsan Sehgal': '"Hi, you seem as tiresome, you need recharging your IQ. If you want, I can do that free of charge."',
    '- Richie Norton': '"The job of a dream is to set you free. Don\'t turn dreams into jobs."',
    '- Carol Burnett': '"When you have a dream, you\'ve got to grab it and never let go."',
    '- Alexander the Great': '"There is nothing impossible to they who will try."',
    '- Michael Altshuler': '"The bad news is time flies. The good news is you\'re the pilot."',
    '- Nicole Kidman': '"Life has got all those twists and turns. You\'ve got to hold on tight and off you go."',
    '- Amal Clooney': '"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."',
    '- Taylor Swift': '"I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it\'s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please."'
  }

  const authors = Object.keys(quotes);
  const author = authors[Math.floor(Math.random() * authors.length)];
  const quote = quotes[author];

  document.querySelector('.quote').innerHTML = quote;
  document.querySelector('.author').innerHTML = author;

}