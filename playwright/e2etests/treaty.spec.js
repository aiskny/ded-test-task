const { test, expect } = require("@playwright/test");

test("Can navigate to treaty page.", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1200 });
  await page.goto("/");

  const howWeDoItLink = page.locator('a[href="/how-we-do-it"]');
  await expect(howWeDoItLink).toBeVisible();
  await howWeDoItLink.click();
  await expect(page).toHaveURL(/\/how-we-do-it$/);

  await page.locator('a[href="/how-we-do-it/treaty"]').click();
  await expect(page).toHaveURL(/\/how-we-do-it\/treaty$/);

  const finalHeading = page.locator("h2 strong");
  await expect(finalHeading).toHaveText("The Demilitarise Education Treaty");
  console.log("Final heading is visible with correct text.");
});
