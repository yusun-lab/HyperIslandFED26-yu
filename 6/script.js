// 1. TODO: Set item in localStorage
localStorage.setItem('language', 'JavaScript');

// 2.TODO: Get item from localStorage
const language = localStorage.getItem('language');
console.log("Getting item from localStorage: ", language);

// 3. TODO: Remove item from localStorage
localStorage.removeItem('language');
console.log("Item 'language' removed from localStorage"); 

// 4. TODO: Clear all items from localStorage
localStorage.clear();
console.log("All items cleared form localStorage");

// 5. TODO: Add an object to localStorage
const user = { name: "John Doe", age: 25, skill: "React" };
localStorage.setItem('user', JSON.stringify(user));
console.log("Object 'user' added to localStorage: ", user);

// 6. TODO: Get an object from localStorage
const storeUser = JSON.parse(localStorage.getItem('user'));
console.log("Getting object from localStorage: ", storeUser);

// ________________________________________________________________________
// 7. TODO: Set item in sessionStorage
sessionStorage.setItem('sessionLanguage', 'TypeScript');

// 8. TODO: Get item from sessionStorage
const sessionLanguage = sessionStorage.getItem('sessionLanguage');
console.log("Getting item from sessionStorage: ", sessionLanguage);

// 9. TODO: Remove item from sessionStorage
sessionStorage.removeItem('sessionLanguage');
console.log("Item 'sessionLanguage' removed from sessionStorage");

// 10. TODO: Clear all items from sessionStorage
sessionStorage.clear();
console.log("All items cleared from sessionStorage");

// 11. TODO: Add an object to sessionStorage
const sessionUser = { name: "Jane Smith", age: 30, skill: "Vue" };
sessionStorage.setItem('sessionUser', JSON.stringify(sessionUser));
console.log("Object 'sessionUser' added to sessionStorage: ", sessionUser);

// 12. TODO: Get an object from sessionStorage
const storeSessionUser = JSON.parse(sessionUser.getItem('sessionUser'));
console.log("Getting object from sessionStorage: ", storeSessionUser);

