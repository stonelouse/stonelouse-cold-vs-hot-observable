// Import stylesheets
import "./style.css";
import { Subject } from "rxjs";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.clear();

const subject = new Subject();

// you can subscribe to them like any other observable

subject.subscribe(
  x => console.log("one", x), 
  err => console.error("one", err));
subject.subscribe(
  x => console.log("two", x), 
  err => console.error("two", err));
subject.subscribe(
  x => console.log("three", x),
  err => console.error("three", err)
);

// and you can next values into subjects.
// NOTICE: each value is sent to *all* subscribers. This is the multicast nature of subjects.

subject.next(1);
subject.next(2);
subject.next(3);

// An error will also be sent to all subscribers
subject.error(new Error("bad"));

// NOTICE: once it's errored or completed, you can't send new values into it
try {
  subject.next(4); //throws ObjectUnsubscribedError
} catch (err) {
  console.error("oops", err);
}
