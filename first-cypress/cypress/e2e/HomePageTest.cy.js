const onClickCount = (initialCount = 0, maxCount = 5) => {
  let count = initialCount;
  while (count < maxCount) {
    cy.get(`[data-test-id='cypress-count-button']`)
      .should("exist")
      .should("have.text", `count is ${count}`);
    count++;
    cy.wait(2000);
    cy.get(`[data-test-id='cypress-count-button']`).click();
    cy.get(`[data-test-id='cypress-count-button']`)
      .should("exist")
      .should("have.text", `count is ${count}`);
  }
};

describe("visit home page ", () => {
  it("passes", () => {
    cy.visit("http://192.168.50.40:5174/");
    cy.wait(3000);
  });
});

describe("count button ", () => {
  it("首頁的 count 按鈕裡面有文字", () => {
    cy.visit("http://192.168.50.40:5174/");
    cy.get(`[data-test-id='cypress-count-button']`)
      .should("exist")
      .should("contain", "count is 0");
    cy.wait(3000);
  });

  it("點擊 count 按鈕一次, count === 1", () => {
    cy.visit("http://192.168.50.40:5174/");
    cy.get(`[data-test-id='cypress-count-button']`)
      .should("exist")
      .should("contain", "count is 0");
    cy.get(`[data-test-id='cypress-count-button']`).click();
    cy.get(`[data-test-id='cypress-count-button']`)
      .should("exist")
      .should("contain", "count is 1");
    cy.wait(3000);
  });

  it("確認點擊五次後，每次 count + 1", () => {
    cy.visit("http://192.168.50.40:5174/");
    onClickCount();
  });
});
