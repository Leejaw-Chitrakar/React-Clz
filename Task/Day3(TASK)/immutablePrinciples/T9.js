// 9. Merge two objects immutably into a new object.

const defaultSettings = {
  theme: "light",
  notifications: true,
  sidebar: "open"
};

const userSettings = {
  theme: "dark",
  sidebar: "closed"
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings
};

console.log("Defaults:", defaultSettings);
console.log("User Settings:", userSettings);
console.log("Final Settings:", finalSettings);
