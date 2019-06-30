import numpy as np
import pandas as pd
import os
from flask import (
    Flask,
    render_template,
    jsonify)
import json
import sqlite3

app = Flask(__name__)




@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")

@app.route("/viz2")
def viz2():    
    return render_template('map2.html')

@app.route("/viz3")
def viz3():
    return render_template('map3.html')


@app.route('/geojson')
def geoJson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "db/fortune_500_v3.geojson")
    data = json.load(open(json_url))
    return jsonify(data)

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
