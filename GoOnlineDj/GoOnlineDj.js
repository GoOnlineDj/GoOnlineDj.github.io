
document.getElementById("_id_Good-News").innerHTML = setInterval(() => {
  document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
}, 1000);

let currentIndex = 0;

function getRandomUrl(urls) {
  const minIndex = 0;
  const maxIndex = urls.length - 1;
  const randomIndex =
  Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;

  currentIndex = randomIndex;
  console.log("currentIndex: " + currentIndex);

  return urls[randomIndex];
}



const urls = [
  "https://www.youtube.com/embed/videoseries?si=SmOAyomksctM9NLI&amp;list=PLPdWITRXm_YcnFFkRAFqqyZcRJfHmcgXN",
  "https://www.youtube.com/embed/videoseries?si=Pst3cpmWKtah7r2P&amp;list=PL-nG1cUOoV9_buQChZ9feF3BJ4mLST8Wz",
  "https://www.youtube.com/embed/videoseries?si=GG8ceFQpdOvcwdRk&amp;list=PLPdWITRXm_Ye9sBwHRFqoQAflDqJKxhhl",
  "https://www.youtube.com/embed/videoseries?si=rymElYHjQAOKcKH_&amp;list=PLPdWITRXm_Ycw_N6SQx-3DLsPdP5WF1E8",
  "https://www.youtube.com/embed/videoseries?si=ZSHk7uW13jd_VSsc&amp;list=PLPdWITRXm_YeEWcqKe8EXoNNyB-YUH9_3",
  "https://www.youtube.com/embed/videoseries?si=I7goz3C4x0OjINQK&amp;list=PLPdWITRXm_Yc86_mYHUw9OpHXuHOGxFmA",
  "https://www.youtube.com/embed/videoseries?si=ULUG7wuMHhAbYYen&amp;list=PLPdWITRXm_YcaG7u0wNtwrIonJdpuR7DW",
  "https://www.youtube.com/embed/videoseries?si=RTsrTi2nvcXY4Tzl&amp;list=PLPdWITRXm_YdheC_oO45tDrmlnxrdYnWv",
  "https://www.youtube.com/embed/videoseries?si=spGo0yJge0yZcKTy&amp;list=PLPdWITRXm_YflCUNnbX74cLLUUpUEnxdT",
  "https://www.youtube.com/embed/videoseries?si=Rdi4fketwRZlWGiz&amp;list=PLPdWITRXm_Yc0hIRir472O8Do4XX1p3dg",
  "https://www.youtube.com/embed/videoseries?si=GRhzY4zJ_Kct3avy&amp;list=PLPdWITRXm_YcJBPzkdsS7ajyFv6hcvIkx",
  "https://www.youtube.com/embed/videoseries?si=02UNhQtXE3KsKP-s&amp;list=PLPdWITRXm_YeqJ7HdiYcSoo91e7w2lm-W",
  "https://www.youtube.com/embed/videoseries?si=ub0GxCfZ57jkiMSa&amp;list=PLPdWITRXm_YdxO-7u9JJODXnNGanEDh3W",
  "https://www.youtube.com/embed/videoseries?si=FfXS_SJvT741-LN2&amp;list=PLPdWITRXm_Yc_RcW7xKlCJWyTKkOmQPOP",
  "https://www.youtube.com/embed/videoseries?si=JHkDHLsm7vJ2QV-R&amp;list=PLPdWITRXm_YdVgJHQYF1UsAtcx9BGmlTP",
  "https://www.youtube.com/embed/videoseries?si=ntofFRGMNSrLn7Ai&amp;list=PLPdWITRXm_Yeng8h7CLgpE1vpXVFR4o13",
  "https://www.youtube.com/embed/videoseries?si=4KMISdSXR3HwCHgy&amp;list=PLPdWITRXm_YfviH06BBzkfbGW3S4i-rS2",
  "https://www.youtube.com/embed/videoseries?si=bqq8Vu3BUMzPAUB3&amp;list=PLPdWITRXm_YeBofrv4HvS3ZZ2vL0hTsJC",
  "https://www.youtube.com/embed/videoseries?si=zSJlXoCzy56U82r9&amp;list=PLPdWITRXm_YeB9e5xdkZYI1minSV8S3jm",
  "https://www.youtube.com/embed/videoseries?si=hUpNFpiDVyKq1gQ9&amp;list=PLPdWITRXm_YfrUoKc3hcgt5g6SKPjm2FS",
  "https://www.youtube.com/embed/videoseries?si=R3uUCtMF1RFJ_7b2&amp;list=PLPdWITRXm_YfD4UigRvAWcPgsuny7D0Oj",
  "https://www.youtube.com/embed/videoseries?si=3gn4pM0uXnS17haI&amp;list=PLPdWITRXm_YeJI_pEeEh_YUSyyAgf2DHs",
  "https://www.youtube.com/embed/videoseries?si=mW10w5GTllb4MaNk&amp;list=PLPdWITRXm_YeAqpjoZb9Mwhq6zYLaK_Iz",
  "https://www.youtube.com/embed/videoseries?si=F-WBqERUqVHoJff5&amp;list=PLPdWITRXm_Ydfuh7BY5-Znv8yFgR8XWpt",
  "https://www.youtube.com/embed/videoseries?si=tcqh9FfsKc2o7iQo&amp;list=PLPdWITRXm_YdeADyzhkjRjWllCUgH6AbI",
  "https://www.youtube.com/embed/videoseries?si=Ebmpg9HmcIscHRBm&amp;list=PLPdWITRXm_YeReErSGvPIMtuGtVZKbfV5",
  "https://www.youtube.com/embed/videoseries?si=bF6IlQKjYwnS3lzP&amp;list=PLPdWITRXm_YeyxPAj0xZZcIrSavOMgNBm",
  "https://www.youtube.com/embed/videoseries?si=GYiTVuczTF-CwsSV&amp;list=PLPdWITRXm_Yejup-e8qvwQKqas6FJORjf",
  "https://www.youtube.com/embed/videoseries?si=XvP6b0WviPAah07m&amp;list=PLPdWITRXm_Ycb9wfBXNaysmfi0fi4bMal",
  "https://www.youtube.com/embed/videoseries?si=mUZmrJ_LXYjp-wGv&amp;list=PLPdWITRXm_YcHn_S4WeNSEIMsSuz9LSD9",
  "https://www.youtube.com/embed/videoseries?si=M-YWMNQzuOWSZeqr&amp;list=PLPdWITRXm_YdWenUeQrzQwurY4OG54kRf",
  "https://www.youtube.com/embed/videoseries?si=X1DwLpearafV379o&amp;list=PLPdWITRXm_Ye2vst7sXJ1ytn3GIQG1r9j",
  "https://www.youtube.com/embed/videoseries?si=xdvJG-04qSGQILk0&amp;list=PLPdWITRXm_YeUyg--EhT6FnfTyr6RgRl3",
  "https://www.youtube.com/embed/videoseries?si=5EKLlZqENAEYKsez&amp;list=PLPdWITRXm_YfX3ZEZXLsojRSEOmwXJf-m",
  "https://www.youtube.com/embed/videoseries?si=DLWhTrXsifTfK_O_&amp;list=PLPdWITRXm_YctdoatKdY0lmoZxVRFSSWt",
  "https://www.youtube.com/embed/videoseries?si=Efed7W8nlr9t6g3L&amp;list=PLPdWITRXm_YeJWpkVSPFX-A6jrAkXlkz-",
  "https://www.youtube.com/embed/videoseries?si=27E1ZwoC4Q9Ko1QF&amp;list=PLPdWITRXm_Yf773wiqvOtx0CtlvT04A5R",
  "https://www.youtube.com/embed/videoseries?si=dkvjreCl6sWhstnh&amp;list=PLPdWITRXm_Ye6pjW7V_iu55xkp1DTjhnE",
  "https://www.youtube.com/embed/videoseries?si=OG23CMMUy1BMnVGA&amp;list=PLPdWITRXm_YchKYqG128YkJM8cZbt2Hkk",
  "https://www.youtube.com/embed/videoseries?si=sE4k81JupXa7j8Xh&amp;list=PLPdWITRXm_YeVRpoWv-5AQZFzQ-hjMMnx",
  "https://www.youtube.com/embed/videoseries?si=3pRqkyxRmXrddOha&amp;list=PLPdWITRXm_YchVIcSIruljlYeuazC2hnZ",
  "https://www.youtube.com/embed/videoseries?si=wn7YvnD9nfe97yMt&amp;list=PLPdWITRXm_YcU2LdA69XOJyNUnsnB5jM3",
  "https://www.youtube.com/embed/videoseries?si=IxBAEkCAWOjAChKa&amp;list=PLPdWITRXm_Ycs_gHZLoF5htR5w6bVkLvb",
  "https://www.youtube.com/embed/videoseries?si=0kSOeykCje_Nj0_4&amp;list=PLPdWITRXm_YdyRWyGkuhc-TqauJj-keKF",
  "https://www.youtube.com/embed/videoseries?si=O64pD8ZW4lhVoZmK&amp;list=PLPdWITRXm_YcIVmmEyfWiOC9TDtpy8lKE",
  "https://www.youtube.com/embed/videoseries?si=nFUJx-1bY1KlSeH3&amp;list=PLPdWITRXm_Yftkeq1VM6qQTVqxuRJJ8ly",
  "https://www.youtube.com/embed/videoseries?si=QJrkLNfnsXV3yQmT&amp;list=PLPdWITRXm_YdaYc_w0WVFYRqntM9Qme2W",
  "https://www.youtube.com/embed/videoseries?si=3raB5XmjPEDjFdXJ&amp;list=PLPdWITRXm_YfBkNTCk9s0ljyKinmd08PK",
  "https://www.youtube.com/embed/videoseries?si=ojgFS3yJ95MWWm-v&amp;list=PLPdWITRXm_YfiYf3lUzO2xoODByoY62aa",
  "https://www.youtube.com/embed/videoseries?si=k6cQNBE0jooXP6Cd&amp;list=PLPdWITRXm_Yc_N88GUl2HAOwcZ7c7WpCK",
  "https://www.youtube.com/embed/videoseries?si=2qWr3WYgxnGAwsOo&amp;list=PLPdWITRXm_YcVBnTwtEaIBOtZl7pNNypD",
  "https://www.youtube.com/embed/videoseries?si=g_vGotfhvMHp4Xwu&amp;list=PLPdWITRXm_YfhrLN9aPWIcyx8hKX6ZClE",
  "https://www.youtube.com/embed/videoseries?si=fT8zqj2Q50AF213u&amp;list=PLPdWITRXm_Yc41X5LDj7FeneTSjOc1ujU",
  "https://www.youtube.com/embed/videoseries?si=SvBZLg9HWKQt27f0&amp;list=PLPdWITRXm_Ycree7U7usZJRHaqSOXYRij",
  "https://www.youtube.com/embed/videoseries?si=YNAGvNfKCwapZzXi&amp;list=PLPdWITRXm_YcEZiIX0MACtqAdbv1HvD3r",
  "https://www.youtube.com/embed/videoseries?si=1KAC87i5h6fyxE6Q&amp;list=PLPdWITRXm_YcxS3qih6CThSz2xOipWzyt",
  "https://www.youtube.com/embed/videoseries?si=9qkdg97JPo5LfglG&amp;list=PLPdWITRXm_Yep8ONHqk5vwzz5D9RixneB",
  "https://www.youtube.com/embed/videoseries?si=H9EVJleVSSeO_P4Q&amp;list=PLPdWITRXm_YeTM3G8YEwDFky3k96snG1-",
  "https://www.youtube.com/embed/videoseries?si=j-gtNzDrZg-IBW6b&amp;list=PLPdWITRXm_YebiNPTsXxlfqPMiv3T0i7x",
  "https://www.youtube.com/embed/videoseries?si=TSxHpkZju26RpRUk&amp;list=PLPdWITRXm_YfeopzG63GIYKiLwnfHhFv4",
  "https://www.youtube.com/embed/videoseries?si=EkaP52FqvcGFbS2T&amp;list=PLPdWITRXm_YfegmaBi8Z9zBIJFWmjEJJZ",
  "https://www.youtube.com/embed/videoseries?si=Pst3cpmWKtah7r2P&amp;list=PL-nG1cUOoV9_buQChZ9feF3BJ4mLST8Wz",
];







let value = 0;
const defaultUrl =
  "https://www.youtube.com/embed/videoseries?si=gV_w2OBPeYHWNH2C&amp;list=PLPdWITRXm_YeJI_pEeEh_YUSyyAgf2DHs";
let randomSelectedUrl = getRandomUrl(urls);
let iframe = document.createElement("iframe");
iframe.className = "random-iframe";
iframe.src = defaultUrl || randomSelectedUrl; // Use default URL if available, otherwise use random URL
iframe.width = "100%";
iframe.height = 640;
iframe.frameborder = 0;
iframe.seamless = "seamless";

document.getElementById("_id_iframe").appendChild(iframe);

document.querySelector("._c_Alive").addEventListener("click", function (event) {
  randomSelectedUrl = getRandomUrl(urls);
  randomSelectedUrl = getRandomUrl(urls);

  iframe.src = randomSelectedUrl;
  console.log("randomSelectedUrl: " + randomSelectedUrl);
});

document.querySelectorAll("._c_Music-Video-back").forEach(function(btn) {
  btn.addEventListener("click", function () {
    if (value > 0) {
      value--;
      iframe.src = urls[value];
      console.log("value: " + value + " url[value]: " + urls[value]);
    }
  });
});

document.querySelectorAll("._c_Music-Video-forward").forEach(function(btn) {
  btn.addEventListener("click", function () {
    if (value < urls.length - 1) {
      value++;
      iframe.src = urls[value];
      console.log("value: " + value + " url[value]: " + urls[value]);
    }
  });
});

// if (value >= urls.length) {
//   return;
// }

