import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to aula3-testes!');
  });


  it('deve ficar 2 ao clica duas vezes em aumentar', () => {
    page.navigateTo();
    page.getIncremetButton().click();
    page.getIncremetButton().click();
    page.navigateTo()
    expect(page.getCounterText()).toBe('Contar: 2');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
