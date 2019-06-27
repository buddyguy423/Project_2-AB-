import numpy as np
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

import sqlite3

app = Flask(__name__)



conn = sqlite3.connect("db/fortune.db")

# Create database tables
#@app.before_first_request
#def setup():
#    # Recreate database each time for demo
#    # db.drop_all()
#    db.create_all()


@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")

@app.route("/viz2")
def viz2():    
    return render_template('map2.html')


@app.route("/viz2data")
def emoji_char_data():
    conn = sqlite3.connect("db/fortune500.db")
    cur = conn.cursor()
    cur.execute("SELECT * from fortune500_table;")
    results = cur.fetchall()
	
    # Create lists from the query results
    names = [result[2] for result in results]
    profits = [result[4] for result in results]

    # Generate the plot trace
    trace = {
       "x": names,
        "y": profits,
        "type": "bar"
    }
#we need to return json data here for D3 to pick up 
    return jsonify(trace)


@app.route("/viz3")
def viz3():
    return render_template('map3.html')

@app.route("/viz3data")
def emoji_id_data():
    conn = sqlite3.connect("db/fortune500.db")
    cur = conn.cursor()
    cur.execute("SELECT * from fortune500_table;")
    results = cur.fetchall()
    #df = pd.DataFrame(results, columns=['emoji_id', 'score'])


    # Format the data for Plotly
    #trace = {
    #    "x": df["emoji_id"].values.tolist(),
    #    "y": df["score"].values.tolist(),
    #    "type": "bar"
    #}
	
    return jsonify(results)

@app.route("/revenues_by_sector")
def rev_industry_data():
    conn = sqlite3.connect("db/fortune500_all_ints.db")
    cur = conn.cursor()
    cur.execute("SELECT Sector, SUM(Revenues) FROM MG_500_cleaned_ints GROUP BY Sector;")
    results = cur.fetchall()

	
    return jsonify(results)

@app.route("/profits_by_sector")
def prof_industry_data():
    conn = sqlite3.connect("db/fortune500_all_ints.db")
    cur = conn.cursor()
    cur.execute("SELECT Sector, SUM(Profits) FROM MG_500_cleaned_ints GROUP BY Sector;")
    results = cur.fetchall()

	
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
