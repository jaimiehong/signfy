import sqlite3
import csv

# Connect to SQLite database (or create if not exists)
conn = sqlite3.connect('dict.db')
cursor = conn.cursor()

# Create table to store data
cursor.execute('''CREATE TABLE IF NOT EXISTS titles (
                    id INTEGER PRIMARY KEY,
                    title TEXT,
                    title_URL TEXT
                )''')

# Read data from CSV file and insert into database
with open('data.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        cursor.execute('''INSERT INTO titles (title, title_URL) 
                          VALUES (?,?)''', (row['Title'], row['Title_URL']))

# Commit changes and close connection
conn.commit()
conn.close()