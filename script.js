import {
  finalize,
  fromEvent,
  interval,
  map,
  mergeMap,
  mergeMapTo,
  Observable,
  switchMapTo,
  takeUntil,
  tap,
  timer,
} from "rxjs";
import { ajax } from "rxjs/ajax";
// elements html
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const status = document.querySelector("#status");
const quoteText = document.querySelector("#quote-text");
const quoteCharacter = document.querySelector("#quote-character");

// API :
const API_URL = "https://game-of-thrones-quotes.herokuapp.com/v1/random";

// const startButtonClick$ = fromEvent(startButton, "click");
// const stopButtonClick$ = fromEvent(stopButton, "click");

// const call$ = new Observable((observer) => {
//   fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => observer.next(data));
// });

// startButtonClick$
//   .pipe(
//     mergeMapTo(
//       timer(0, 5000).pipe(
//         tap(() => {
//           startButton.textContent = "En cours";
//           startButton.setAttribute("aria-busy", true);
//           startButton.setAttribute("disabled", true);
//         }),
//         switchMapTo(call$),
//         takeUntil(stopButtonClick$),
//         finalize(() => {
//           startButton.textContent = "Commencer";
//           startButton.setAttribute("aria-busy", false);
//           startButton.removeAttribute("disabled");
//         })
//       )
//     )
//   )
//   .subscribe((data) => {
//     quoteText.textContent = data.sentence;
//     quoteCharacter.textContent = data.character.name;
//   });
