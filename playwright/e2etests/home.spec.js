const{test,expect}=require('@playwright/test');
test('Home page loads without errors; total investment is greater than 1bn.',async({page})=>{

    await page.goto('/');
    const heading = page.locator("h2",{hasText:'The Demilitarise Education Model'});
    expect(page.locator("h2",{hasText:'The Demilitarise Education Model'}));

    const investmentElement= page.locator('p.ded-total-investment');
    const investmentText=await investmentElement.textContent();
    expect(investmentElement).toContainText('£');

    const valueString = investmentText.replace(/[^\d.]/g, '');
    const valueFloat = parseFloat(valueString);
    expect(valueFloat).toBeGreaterThan(1000000000);
    
});