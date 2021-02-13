Feature(`Wikipedia Test`);
Scenario(`Search`, async ({ I }) => {
  I.amOnPage(`https://www.wikipedia.org/`);
  I.waitForElement(`#searchInput`, 5);
  I.fillField(`#searchInput`, `JavaScript`);
  I.click(`#search-form > fieldset > button`);
  I.wait(5);
});
