const { test, expect } = require('@playwright/test');

test.describe('uni-search', () => {
  const searchText = "bri";
  const targetName = "University of the West of England, Bristol";
  const targetPath = "/data/university/2";
  const expectedLinkText = [
    "policies",
    "financial partnerships",
    "research partnerships",
    "academic partnerships",
    "FOI requests",
    "actions",
  ];
  test('University search on home page yields expected results.', async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1200 });
    await page.goto('/');
    await page.fill('input.ded-input-search-university', searchText);
    const container = page.locator('div.ded-university-search-result-container');
    await container.locator(`button:has-text("${targetName}")`).click();
    await expect(page).toHaveURL(new RegExp(targetPath));
    expect(page.locator('h2:has-text("' +targetName+'')).toBeVisible;
    for (const linkText of expectedLinkText) {
      const link = page.locator('a:has-text("' + linkText + '")');
      await expect(link).toBeVisible();
    }
  
  });
});