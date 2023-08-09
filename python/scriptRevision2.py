import time
from selenium import webdriver

driver = webdriver.Chrome()

## PARA CASOS DONDE LA CUENTA 1 Esta no registrada y la segunda Desactivada

# TODO: Datos de ingreso a la página
driver.get('http://172.20.1.36/servlet?p=login&q=loginForm&jumpto=status')
user = driver.find_element("xpath", '/html/body/div/form/table/tbody/tr[3]/td[2]/input')
password = driver.find_element("xpath", '/html/body/div/form/table/tbody/tr[4]/td[2]/input[1]')
user.send_keys('admin')
password.send_keys('oLUoXnsQ')

time.sleep(1)
login_btn = driver.find_element("xpath", '/html/body/div/form/table/tbody/tr[5]/td/input[1]')
login_btn.click()

time.sleep(1)
# TODO: Vamos a la cuenta
cuenta = driver.find_element("xpath", "/html/body/div/div[2]/div[2]/ul/li[2]/div[2]/label")
cuenta.click()

time.sleep(2)

# TODO: Seleccionamos la cuenta 2
cuenta2 = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[2]/td[3]/select")
cuenta2.click()
time.sleep(1)
selectCuenta2 = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[2]/td[3]/select/option[2]")
selectCuenta2.click()
time.sleep(1)

# TODO Activamos la linea 
linea = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[4]/td[3]/select")
linea.click()

activeLine = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[4]/td[3]/select/option[2]")
activeLine.click()

# confirmarmos
confirm = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/div/input[1]").click()
time.sleep(4)

time.sleep(1)
# TODO: Vamos a la cuenta
cuenta = driver.find_element("xpath", "/html/body/div/div[2]/div[2]/ul/li[2]/div[2]/label")
cuenta.click()

# TODO: Seleccionamos la cuenta 1
cuenta1 = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[2]/td[3]/select")
cuenta1.click()
time.sleep(1)
selectCuenta1 = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[2]/td[3]/select/option[1]")
selectCuenta1.click()
time.sleep(1)

# TODO Desactivamos la linea 
linea = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[4]/td[3]/select")
linea.click()

desactiveLine = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/table/tbody[1]/tr[4]/td[3]/select/option[1]")
desactiveLine.click()

# confirmarmos
confirm = driver.find_element("xpath", "/html/body/div/div[3]/div[3]/form/div/input[1]").click()
time.sleep(4)

salir = driver.find_element("xpath", "/html/body/div/div[2]/div[2]/div/div/label").click()
time.sleep(2)