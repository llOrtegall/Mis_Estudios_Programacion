import { test, expect } from '@playwright/test';

test.describe('Basic App Tests', () => {
  test('app loads successfully', async ({ page }) => {
    // Ir a la página principal
    await page.goto('/');
    
    // Verificar que el título está presente
    await expect(page.locator('h1')).toContainText('App De Gatitos');
    
    // Verificar que el botón está presente
    await expect(page.locator('button')).toContainText('Get New Fact');
    
    // Tomar una captura de pantalla (útil para debugging)
    await page.screenshot({ path: 'test-results/app-loaded.png' });
  });

  test('button is clickable', async ({ page }) => {
    await page.goto('/');
    
    // Encontrar el botón y hacer click
    const button = page.locator('button', { hasText: 'Get New Fact' });
    await button.click();
    
    // Verificar que el botón sigue siendo visible después del click
    await expect(button).toBeVisible();
  });
});
