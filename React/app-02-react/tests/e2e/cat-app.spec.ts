import { test, expect } from '@playwright/test';

test.describe('Cat Facts App', () => {
  test.beforeEach(async ({ page }) => {
    // Navegar a la aplicación antes de cada test
    await page.goto('/');
  });

  test('should display the main title', async ({ page }) => {
    // Verificar que el título principal esté presente
    await expect(page.locator('h1').first()).toHaveText('App De Gatitos');
  });

  test('should display the "Get New Fact" button', async ({ page }) => {
    // Verificar que el botón esté presente y tenga el texto correcto
    const button = page.locator('button', { hasText: 'Get New Fact' });
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/bg-yellow-500/);
  });

  test('should load initial cat fact and image', async ({ page }) => {
    // Esperar a que aparezca un fact (puede tomar tiempo por la API)
    const factElement = page.locator('h1.font-bold.text-blue-300');
    await expect(factElement).toBeVisible({ timeout: 10000 });
    
    // Verificar que el fact no esté vacío
    const factText = await factElement.textContent();
    expect(factText).toBeTruthy();
    expect(factText!.length).toBeGreaterThan(0);

    // Verificar que la imagen se carga
    const image = page.locator('img[alt="Cat random image"]');
    await expect(image).toBeVisible({ timeout: 15000 });
    
    // Verificar que la imagen tiene un src válido
    const imageSrc = await image.getAttribute('src');
    expect(imageSrc).toBeTruthy();
    expect(imageSrc).toMatch(/^https?:\/\//);
  });

  test('should get new fact when button is clicked', async ({ page }) => {
    // Esperar a que aparezca el fact inicial
    const factElement = page.locator('h1.font-bold.text-blue-300');
    await expect(factElement).toBeVisible({ timeout: 10000 });
    
    // Obtener el texto del fact inicial
    const initialFact = await factElement.textContent();
    
    // Hacer click en el botón
    const button = page.locator('button', { hasText: 'Get New Fact' });
    await button.click();
    
    // Esperar a que el fact cambie (puede tomar tiempo por la API)
    await page.waitForFunction(
      (initialText) => {
        const element = document.querySelector('h1.font-bold.text-blue-300');
        return element && element.textContent !== initialText;
      },
      initialFact,
      { timeout: 15000 }
    );
    
    // Verificar que el nuevo fact es diferente
    const newFact = await factElement.textContent();
    expect(newFact).toBeTruthy();
    expect(newFact).not.toBe(initialFact);
  });

  test('should update image when fact changes', async ({ page }) => {
    // Esperar a que aparezcan el fact y la imagen iniciales
    const factElement = page.locator('h1.font-bold.text-blue-300');
    const imageElement = page.locator('img[alt="Cat random image"]');
    
    await expect(factElement).toBeVisible({ timeout: 10000 });
    await expect(imageElement).toBeVisible({ timeout: 15000 });
    
    // Obtener la imagen inicial
    const initialImageSrc = await imageElement.getAttribute('src');
    
    // Hacer click en el botón para obtener un nuevo fact
    const button = page.locator('button', { hasText: 'Get New Fact' });
    await button.click();
    
    // Esperar a que la imagen cambie
    await page.waitForFunction(
      (initialSrc) => {
        const img = document.querySelector('img[alt="Cat random image"]') as HTMLImageElement;
        return img && img.src !== initialSrc;
      },
      initialImageSrc,
      { timeout: 20000 }
    );
    
    // Verificar que la nueva imagen es diferente
    const newImageSrc = await imageElement.getAttribute('src');
    expect(newImageSrc).toBeTruthy();
    expect(newImageSrc).not.toBe(initialImageSrc);
  });

  test('should have responsive design elements', async ({ page }) => {
    // Verificar que el contenedor principal tiene las clases de flexbox
    const main = page.locator('main');
    await expect(main).toHaveClass(/flex flex-col items-center/);
    
    // Verificar estilos del botón
    const button = page.locator('button', { hasText: 'Get New Fact' });
    await expect(button).toHaveClass(/bg-yellow-500 text-black p-2 rounded-md cursor-pointer hover:bg-yellow-300/);
  });

  test('should handle API errors gracefully', async ({ page }) => {
    // Este test verifica que la app no se rompe si hay problemas con las APIs
    // Interceptar requests y simular errores
    await page.route('**/fact', route => route.abort());
    await page.route('**/cat', route => route.abort());
    
    await page.goto('/');
    
    // La aplicación debería seguir mostrando el título y el botón
    await expect(page.locator('h1').first()).toHaveText('App De Gatitos');
    await expect(page.locator('button', { hasText: 'Get New Fact' })).toBeVisible();
    
    // El botón debería ser clickeable incluso si las APIs fallan
    const button = page.locator('button', { hasText: 'Get New Fact' });
    await button.click();
    
    // Verificar que no hay errores de JavaScript en la consola
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    // Esperar un momento para que se ejecuten los requests
    await page.waitForTimeout(2000);
    
    // No deberían haber errores críticos de JavaScript
    const criticalErrors = errors.filter(error => 
      !error.includes('Failed to fetch') && 
      !error.includes('NetworkError')
    );
    expect(criticalErrors).toHaveLength(0);
  });
});
