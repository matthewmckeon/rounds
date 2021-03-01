from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import time

chrome_options = Options()
# chrome_options.add_argument("--headless")

PATH = '/Users/matthewmckeon/pySelenium/chromedriver'

# Initialize chrome driver with headless option
driver = webdriver.Chrome(PATH, chrome_options=chrome_options)

# Go to website
driver.get('https://rounds-golf-app.herokuapp.com/')

# Check website title
assert "Rounds App" in driver.title

# Navigate to create round tab
create_round = driver.find_element_by_link_text('Create Round')
create_round.click()

# Find name input element
# clear input
# Enter name: 'Test User'
name = driver.find_element_by_id('formBasicName')
name.clear()
name.send_keys('Test User')

# Find course input element
# clear input
# Enter course: 'Test Course'
course = driver.find_element_by_id('formBasicCourse')
course.clear()
course.send_keys('Test Course')

# Find par input element
# clear input
# Enter par: '71'
par = driver.find_element_by_id('formBasicPar')
par.clear()
par.send_keys('71')

# Find score input element
# clear input
# Enter score: '78'
score = driver.find_element_by_id('formBasicScore')
score.clear()
score.send_keys('78')

# Locate date element
# Clear it
# input desired date
date = driver.find_element_by_xpath('/html/body/div/div/div/div/form/div[6]/div[1]/div/input')
for i in range(10):
    date.send_keys(Keys.BACKSPACE)
date.send_keys('05/30/2020')

submit_button = driver.find_element_by_xpath('/html/body/div/div/div/div/form/button')
submit_button.click()

# Quit driver
driver.quit()